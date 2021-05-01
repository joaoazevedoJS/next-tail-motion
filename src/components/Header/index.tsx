import { FC } from "react";
import Link from 'next/link'

const Header: FC = () => {
  return (
    <div className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Link href="/">
        <strong className="text-lg cursor-pointer transition duration-500">Next Tail Motion</strong>
      </Link>

      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <span className="tracking-wide hover:text-gray-300 cursor-pointer transition duration-500">Next.JS</span>
        </Link>
        
        <Link href="/tailwind">
          <span className="tracking-wide hover:text-gray-300 cursor-pointer transition duration-500">Tailwind</span>
        </Link>
        
        <Link href="/framermotion">
          <span className="tracking-wide hover:text-gray-300 cursor-pointer transition duration-500">Framer Motion</span>
        </Link>
      </nav>
    </div>
  )
}

export default Header