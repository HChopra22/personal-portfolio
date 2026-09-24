import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri'
import { socials } from '@/data/site'

const icons = { LinkedIn: RiLinkedinFill, GitHub: RiGithubFill, Instagram: RiInstagramFill }

const Socials = ({ containerStyles, iconStyles }) => (
  <div className={containerStyles}>
    {socials.map(({ name, url }) => {
      const Icon = icons[name]
      return (
        <a href={url} key={name} target="_blank" rel="noopener noreferrer me" aria-label={`Harsh Chopra on ${name}`} className={iconStyles}>
          <Icon aria-hidden="true" />
        </a>
      )
    })}
  </div>
)

export default Socials
