import Link from 'next/link'
import Image from 'next/image'

const Logo = () => (
  <Link href="/" aria-label="Harsh Chopra — home">
    <Image src="/logo.png" width={54} height={54} priority alt="Harsh Chopra logo" />
  </Link>
)

export default Logo
