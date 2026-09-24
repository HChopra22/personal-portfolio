import Image from 'next/image'
import { RiBriefcase4Fill, RiTodoFill, RiArtboard2Fill } from 'react-icons/ri'
import Badge from './Badge'
import { yearsOfExperience } from '@/data/site'

// The original hero illustration: memoji on the brand shapes with count-up badges.
export default function MemojiVisual() {
  return (
    <div className="relative h-[520px] w-[600px]">
      <div className="absolute right-6 top-2 h-[500px] w-[500px] bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark">
        <div className="relative h-[462px] w-[510px] bg-hero_shape bg-bottom bg-no-repeat">
          <Image src="/hero/harsh-hero-memoji-1.png" fill priority sizes="510px" className="object-contain object-bottom" alt="Illustrated memoji of Harsh Chopra" />
        </div>
      </div>
      <Badge containerStyles="absolute top-[6%] right-0" icon={<RiBriefcase4Fill />} endCountNum={yearsOfExperience()} endCountText="+" badgeText="Years of experience" />
      <Badge containerStyles="absolute top-[30%] left-0" icon={<RiTodoFill />} endCountNum={10} endCountText="+" badgeText="Projects completed" />
      <Badge containerStyles="absolute top-[68%] right-0" icon={<RiArtboard2Fill />} endCountNum={10} endCountText="+" badgeText="UX designs created" />
    </div>
  )
}
