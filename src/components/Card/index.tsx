import { FC } from "react";
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CardProps {
  href: string;
  source: string;
  alt: string;
  layoutId: string;
}

const Card: FC<CardProps> = ({ href, source, alt, layoutId }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition duration-500">
        <motion.img src={source} alt={alt} layoutId={layoutId} className="w-full h-full" />
      </div>
    </Link>
  )
}

export { Card }