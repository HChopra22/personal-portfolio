import {MailIcon, HomeIcon, PhoneCall} from 'lucide-react'
import Form from '@/components/Form'

const Contact = () => {
  return <section>
    <div className="container mx-auto">
      {/*text and illustrations */}
      <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
        {/*text */}
        <div className='flex flex-col justify-center'>
          <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
            <span className='w-[30px] h-[2px] bg-primary'></span>
            Say Hello
          </div>
          <h1 className='h1 max-w-md mb-8'>lets work together</h1>
          <p className='subtitle max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloribus cumque voluptate quasi, blanditiis eum quod dolorem, et omnis delectus, dolorum mollitia quaerat voluptatum est minima ad reprehenderit ipsa laborum?</p>
        </div>
      </div>
      {/*illustration */}
      <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
      <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
       {/*info and form */}
       <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
          {/*mail */}
          <div className='flex items-center gap-x-8'>
            <MailIcon size={10} className='text-primary' />
            <div>hcmedia@gmail.com</div>
          </div>
          {/*Address */}
          <div className='flex items-center gap-x-8'>
            <HomeIcon size={10} className='text-primary' />
            <div>London, England</div>
          </div>
          {/*Number */}
            <div className='flex items-center gap-x-8'>
            <PhoneCall size={10} className='text-primary' />
            <div>+447803558147</div>
          </div>
        </div>
        <Form></Form>
       </div>
    </div>
    </section>
}

export default Contact