'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[120px] sm:text-[180px] font-bold text-gradient leading-none">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-4 mb-2">
            Sayfa Bulunamadı
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD60A] to-[#FDB931] text-black font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_30px_rgba(255,214,10,0.5)] transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Geri Dön
          </button>
        </motion.div>
      </div>
    </div>
  )
}
