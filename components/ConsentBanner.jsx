'use client'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { CONSENT_KEY, updateConsent } from '@/lib/analytics'

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  const choose = (granted) => {
    updateConsent(granted)
    setVisible(false)
  }

  return (
    <div role="region" aria-label="Cookie consent" className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-50 rounded-lg border bg-background p-6 shadow-2xl">
      <p className="mb-4 text-base">
        I use analytics cookies (Google Analytics and Microsoft Clarity) to understand how this site is used. Nothing is
        set unless you accept.
      </p>
      <div className="flex gap-3">
        <Button size="sm" onClick={() => choose(true)}>Accept</Button>
        <Button size="sm" variant="outline" onClick={() => choose(false)}>Decline</Button>
      </div>
    </div>
  )
}

export default ConsentBanner
