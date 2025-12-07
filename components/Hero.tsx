'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Shield,Columns3Cog } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import NumberTicker from '@/components/NumberTicker'

export default function Hero() {
  const words = ['HIZLI', 'MODERN','GÜVENLİ', 'KULLANIŞLI', 'YENİLİKÇİ']
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050505]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FFD60A]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 relative z-10">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD60A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD60A]"></span>
              </span>
              <span className="text-sm text-gray-300 font-medium tracking-wide uppercase">Yeni Nesil Broker Teknolojisi</span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-8 relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
              >
                Yatırımlarınız İçin <br />
                <span className="whitespace-nowrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD60A] via-[#FFD60A] to-[#E0B000]">
                    En
                  </span>{' '}
                  <span className="inline-block min-w-[200px] text-white">
                    {text}
                    <span className="animate-pulse text-[#FFD60A]">|</span>
                  </span>
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Tamamen özelleştirilebilir <span className="text-[#FFD60A]">CGM Broker</span> ile finansal piyasalara hükmedin. Gelişmiş teknoloji, ışık hızında işlemler ve özelleştirilebilir çözümler sunar.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#demo"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#FFD60A] text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,214,10,0.5)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Hemen Demo İste
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Özellikleri Keşfet
              </a>
            </motion.div>

            {/* Stats / Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1 flex items-center gap-1">
                  <span>+</span>
                  <NumberTicker value={5} />
                  <span>Yıl</span>
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Aktif Çalışma Deneyimi</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-white mb-1 flex items-center gap-1">
                  <NumberTicker value={550} />
                  <span>+</span>
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Bist</div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white mb-1 flex items-center gap-1">
                  <NumberTicker value={800} />
                  <span>+</span>
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Parite</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 z-10"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating Elements Animation */}
              <div className="relative z-20">
                <Image
                  src="/images/ayı.png"
                  alt="CGM Broker Bear"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Background Glow Behind Bear */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#FFD60A]/20 to-transparent rounded-full blur-[80px] -z-10"></div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
