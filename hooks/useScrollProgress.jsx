import { useState, useEffect } from 'react'

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setCompletion(scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return completion
}

export default useScrollProgress
