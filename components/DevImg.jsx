import Image from 'next/image'

const DevImg = ({ containerStyles, imgSrc, alt }) => (
  <div className={containerStyles}>
    <Image src={imgSrc} fill priority sizes="510px" className="object-contain object-bottom" alt={alt} />
  </div>
)

export default DevImg
