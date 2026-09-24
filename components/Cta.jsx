import Link from 'next/link'
import { Button } from './ui/button'

const Cta = () => (
  <section className="py-24 bg-tertiary dark:bg-secondary">
    <div className="container mx-auto">
      <div className="flex flex-col items-center text-center">
        <h2 className="h2 max-w-xl mb-4">Got a website, product or tracking problem?</h2>
        <p className="subtitle max-w-lg">Tell me what you’re trying to achieve and I’ll tell you honestly how I can help.</p>
        <Button asChild>
          <Link href="/contact">Contact me</Link>
        </Button>
      </div>
    </div>
  </section>
)

export default Cta
