'use client'

import {GanttChartSquare, Paintbrush2, Laptop, TrendingUp, Search, Camera, Video} from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './Modal'

const servicesData = [
  {
    icon: <Paintbrush2 size={72} strokeWidth={0.8} />,
    title: 'UX / UI Design',
    description: 'Using applications such as Figma, Adobe XD, Adobe Illustrate and Canva; I am profficient in taking ideas and devloping them into full wireframed UX models for clients to visualise and interact with their designs.',
    // moreInfo: {
    //   extendedDescription: 'In my experience as a UX/UI designer, I’ve worked with major clients to develop user-centric designs that are functional and visually appealing. I use tools like Figma and Adobe XD to create interactive prototypes that help streamline the design process.',
    //   media: '/images/ux-design-portfolio.png', // Example image
    // },
  },
  {
    icon: <Laptop size={72} strokeWidth={0.8} />,
    title: 'Web Developer',
    description: 'Using languages and frameworks such as HTML, CSS, Javascript, ReactJS, TailwindCSS. I can create stunning websites to suit your purpose. Whether the need is to provide content or eCommerce, no goal is impossible to create.'
  },
  {
    icon: <TrendingUp size={72} strokeWidth={0.8} />,
    title: 'Business Growth Development',
    description: 'As a full time Product Owner for the largest Gaming/Gambling events businesses, I am capable of full project cycles. Including project discovery, requirements gathering, overseeing of delivery, sanity checking and final deliverables.'
  },
  {
    icon: <Search size={72} strokeWidth={0.8} />,
    title: 'SEO',
    description: 'Having experience with analytical data across multiple different products reaching 3M+ Users. I use tools such as Semrush, Google Analytics & Adobe Analytics to make sure projects are at optimal performance.'
  },
  {
    icon: <Camera size={72} strokeWidth={0.8} />,
    title: 'Photography',
    description: 'I have a deep passion for Photography, you can visit my portfolio using the link below. I am able to take pictures of stunning landscapes as well as memorable portraits for special occasions. Visit my site here',
    link: "https://photos.harshchopra.com"
  },
  {
    icon: <Video size={72} strokeWidth={0.8} />,
    title: 'Videography',
    description: 'The passion translates over to catching amazing videos with stunning quality. Profficient in drone usage to get amazing B-Role for video projects as well as an understanding of the clients idea.'
  },
]
  const Services = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState({
      title: '',
      extendedDescription: '',
      media: '',
    })
  
    const handleTileClick = (item) => {
      if (!item.link) {
        // Open modal if there is no link, passing extended information
        setSelectedService({
          title: item.title,
          extendedDescription: item.moreInfo.extendedDescription,
          media: item.moreInfo.media,
        })
        setModalOpen(true)
      }
    }
  
    const closeModal = () => {
      setModalOpen(false)
    }
  
    return (
      <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
          <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto mt-20'>My Services</h2>
          {/* grid items */}
          <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
            {servicesData.map((item, index) => {
              const cardContent = (
                <Card
                  className='w-full max-w-[424px] h-[325px] flex flex-col pt-16 pb-10 justify-center items-center relative
                  transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-white dark:hover:bg-background
                  cursor-pointer'
                  key={index}
                  onClick={() => handleTileClick(item)}
                >
                  <CardHeader className='text-primary absolute -top-[60px]'>
                    <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className='text-center'>
                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                    <CardDescription className='text-lg'>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              )
  
              return item.link ? (
                <Link href={item.link} key={index} target='_blank' rel='noopener noreferrer'>
                  {cardContent}
                </Link>
              ) : (
                cardContent
              )
            })}
          </div>
  
          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedService.title}
            extendedDescription={selectedService.extendedDescription}
            media={selectedService.media}
          />
        </div>
      </section>
    )
  }
export default Services
