'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, MailIcon, ArrowRightIcon, MessagesSquare, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { contactSchema, contactTopics } from '@/lib/contact-schema'
import { track } from '@/lib/analytics'
import { site } from '@/data/site'

const FieldError = ({ id, message }) =>
  message ? <p id={id} className="text-destructive text-sm mt-1 ml-8" role="alert">{message}</p> : null

const Form = () => {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverError, setServerError] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactSchema), defaultValues: { name: '', email: '', topics: [], message: '', company: '' } })

  const onSubmit = async (data) => {
    setStatus('sending')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.error || 'Something went wrong.')
      setStatus('sent')
      track('generate_lead', { form_name: 'contact', topics: (data.topics || []).join('|') })
      reset()
    } catch (err) {
      setStatus('error')
      setServerError(err.message)
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-start gap-y-4" role="status">
        <CheckCircle2 className="text-primary" size={40} aria-hidden="true" />
        <h2 className="h3">Thanks — message sent.</h2>
        <p className="subtitle">I’ll get back to you soon. If it’s urgent, email {site.email}.</p>
        <Button variant="secondary" onClick={() => setStatus('idle')}>Send another</Button>
      </div>
    )
  }

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact form">
      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <div className="relative flex items-center">
          <Input id="name" autoComplete="name" placeholder="Name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} {...register('name')} />
          <User className="absolute right-6 pointer-events-none" size={20} aria-hidden="true" />
        </div>
        <FieldError id="name-error" message={errors.name?.message} />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email address</label>
        <div className="relative flex items-center">
          <Input id="email" type="email" autoComplete="email" placeholder="Email address" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email')} />
          <MailIcon className="absolute right-6 pointer-events-none" size={20} aria-hidden="true" />
        </div>
        <FieldError id="email-error" message={errors.email?.message} />
      </div>
      <fieldset>
        <legend className="mb-3 ml-2 text-sm font-medium">What can I help with?</legend>
        <div className="flex flex-wrap gap-2">
          {contactTopics.map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="checkbox" value={t} className="peer sr-only" {...register('topics')} />
              <span className="inline-block rounded-full border border-input px-4 py-2 text-sm transition-colors hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <div className="relative flex items-center">
          <Textarea id="message" placeholder="Tell me about your project, timeline and budget." aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} {...register('message')} />
          <MessagesSquare className="absolute top-5 right-6 pointer-events-none" size={20} aria-hidden="true" />
        </div>
        <FieldError id="message-error" message={errors.message?.message} />
      </div>
      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>
      {status === 'error' && (
        <p className="text-destructive" role="alert">
          {serverError} <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      )}
      <Button type="submit" disabled={status === 'sending'} className="flex items-center gap-x-1 max-w-[166px] rounded-full">
        {status === 'sending' ? (<>Sending <Loader2 size={20} className="animate-spin" aria-hidden="true" /></>) : (<>Let’s talk <ArrowRightIcon size={20} aria-hidden="true" /></>)}
      </Button>
    </form>
  )
}

export default Form
