'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { RefreshCcw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl sm:text-7xl font-bold text-gradient mb-4">
            Hata!
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
            Bir şeyler yanlış gitti
          </h2>
          <p className="text-gray-400 mb-8">
            Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD60A] to-[#FDB931] text-black font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_30px_rgba(255,214,10,0.5)] transition-all duration-300"
          >
            <RefreshCcw className="w-5 h-5" />
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Ana Sayfa
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
