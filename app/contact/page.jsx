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
          <h1 className='h1 max-w-md mb-8'>Lets work together</h1>
          <p className='subtitle max-w-[400px]'>Looking for any work to be completed on your digital projects? Do not hesitate to give me a message. Please let me know your current painpoints, timelines and what you would see as an optimal product.</p>
        </div>
        {/*illustration */}
        <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
      </div>
      <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
       {/*info and form */}
       <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
          {/*mail */}
          <div className='flex items-center gap-x-8'>
            <MailIcon size={20} className='text-primary' />
            <div>Please respond with an email I can contact!</div>
          </div>
          {/*Address */}
          <div className='flex items-center gap-x-8'>
            <HomeIcon size={20} className='text-primary' />
            <div>Let me know where you are located</div>
          </div>
          {/*Number */}
            <div className='flex items-center gap-x-8'>
            <PhoneCall size={20} className='text-primary' />
            <div>Leave your number in the messages field (optional) </div>
          </div>
        </div>
        <Form></Form>
       </div>
    </div>
    </section>
}

export default Contact