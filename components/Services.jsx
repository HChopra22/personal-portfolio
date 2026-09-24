'use client'

import Link from 'next/link'
import { Paintbrush2, Laptop, TrendingUp, Search, Camera, Video, ArrowUpRight, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { services } from '@/data/site'

const icons = { Paintbrush2, Laptop, TrendingUp, Search, Camera, Video }

const cardClass =
  'w-full max-w-[424px] h-full min-h-[325px] mx-auto flex flex-col pt-16 pb-10 justify-center items-center relative text-left transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

const ServiceCard = ({ item, cta }) => {
  const Icon = icons[item.icon]
  return (
    <Card className={cardClass}>
      <CardHeader className="text-primary absolute -top-[60px]">
        <div className="w-[140px] h-[80px] bg-background flex justify-center items-center" aria-hidden="true">
          <Icon size={72} strokeWidth={0.8} />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardTitle className="mb-4">{item.title}</CardTitle>
        <CardDescription className="text-lg">{item.description}</CardDescription>
        <span className="mt-4 inline-flex items-center gap-x-1 text-sm font-medium text-primary">{cta}</span>
      </CardContent>
    </Card>
  )
}

const Services = () => (
  <section id="services" className="mb-12 xl:mb-36">
    <div className="container mx-auto">
      <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto mt-20">What I do</h2>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-y-20 xl:gap-y-24 gap-x-8">
        {services.map((item) => (
          <li key={item.title}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full rounded-lg">
                <ServiceCard item={item} cta={<>Visit my photography site <ArrowUpRight size={16} aria-hidden="true" /></>} />
              </a>
            ) : (
              <Dialog>
                <DialogTrigger className="block h-full w-full rounded-lg">
                  <ServiceCard item={item} cta={<>Learn more <Plus size={16} aria-hidden="true" /></>} />
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>{item.title}</DialogTitle>
                  <DialogDescription className="mb-4">{item.description}</DialogDescription>
                  <p className="text-lg mb-8">{item.more}</p>
                  <Button asChild>
                    <Link href="/contact">Get in touch</Link>
                  </Button>
                </DialogContent>
              </Dialog>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Services
