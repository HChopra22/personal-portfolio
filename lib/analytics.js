// Tiny dataLayer helper. Events are picked up by GTM (configure GA4 tags there).
export const CONSENT_KEY = 'hc-consent' // 'granted' | 'denied'

export function track(event, params = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

export function updateConsent(granted) {
  if (typeof window === 'undefined') return
  const state = granted ? 'granted' : 'denied'
  try { localStorage.setItem(CONSENT_KEY, state) } catch {}
  window.dataLayer = window.dataLayer || []
  // GTM only reads consent commands pushed as an `arguments` object (gtag style), not arrays
  function gtag() { window.dataLayer.push(arguments) } // eslint-disable-line prefer-rest-params
  gtag('consent', 'update', { analytics_storage: state })
  window.dataLayer.push({ event: 'consent_update', analytics_consent: state })
}
