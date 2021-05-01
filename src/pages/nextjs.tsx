import { FC } from "react";
import { motion } from 'framer-motion'
import Link from "next/link";

const NextJS: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img 
        src="/img/nextjs.svg" 
        alt="NEXT.JS" 
        layoutId="nextjs-logo"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <span className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition cursor-pointer duration-500">
            Voltar para a home
          </span>
        </Link>
      </motion.div>
    </div>
  )
}

export default NextJS