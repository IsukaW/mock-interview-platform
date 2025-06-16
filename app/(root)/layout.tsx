import Link from 'next/dist/client/link'
import Image from 'next/image'
import {ReactNode} from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className='text-primary-100'>Mock Interview Platform</h2>
        </Link>

        {children}
      </nav>
     
    </div>
  )
}

export default RootLayout
