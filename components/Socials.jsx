'use client'

import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri'
import Link from 'next/link'
import React from 'react'

const icons = [
  {
    path: 'https://www.linkedin.com/in/harshdeep-chopra/',
    name: <RiLinkedinFill/>
  },
  {
    path: 'https://github.com/HChopra22',
    name: <RiGithubFill/>
  },
  {
    path: 'https://www.instagram.com/harshc._/',
    name: <RiInstagramFill/>
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link 
            href={icon.path} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className={`${iconStyles}`}>
              {icon.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
