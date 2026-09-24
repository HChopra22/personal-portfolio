import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'

// Required env vars (set in Vercel → Settings → Environment Variables):
//   RESEND_API_KEY      – from resend.com
//   CONTACT_TO_EMAIL    – where enquiries land (e.g. admin@harshchopra.com)
//   CONTACT_FROM_EMAIL  – a sender on a Resend-verified domain, e.g. "Portfolio <hello@harshchopra.com>"

const escape = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  const { name, email, message, company } = parsed.data
  // Honeypot filled → pretend success, send nothing
  if (company) return NextResponse.json({ ok: true })

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('Contact form: missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL')
    return NextResponse.json({ error: 'The form is not available right now — please email me directly.' }, { status: 503 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New enquiry from ${name} — harshchopra.com`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escape(name)}<br/><strong>Email:</strong> ${escape(email)}</p><p style="white-space:pre-wrap">${escape(message)}</p>`,
    }),
  })

  if (!res.ok) {
    console.error('Contact form: Resend error', res.status, await res.text())
    return NextResponse.json({ error: 'Something went wrong sending your message — please email me directly.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
