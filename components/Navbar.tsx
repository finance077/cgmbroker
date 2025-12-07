'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'Özellikler' },
    { href: '#screenshots', label: 'Platform' },
    { href: '#pricing', label: 'Fiyatlandırma' },
    { href: '#contact', label: 'İletişim' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-[#FFD60A]/30 shadow-lg shadow-[#FFD60A]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/ayı.png"
                alt="CGM Logo"
                width={48}
                height={48}
                className="object-contain drop-shadow-[0_0_8px_rgba(255,214,10,0.3)]"
              />
            </div>
            <span className="text-2xl font-bold text-gradient">CGM</span> 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8E8E93] hover:text-[#FFD60A] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="px-6 py-2.5 bg-gradient-to-r from-[#FFD60A] to-[#E0B000] text-[#0C1117] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FFD60A]/50 transition-all duration-300 transform hover:scale-105"
            >
              Demo Talep Et
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#FFD60A] p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#FFD60A]/30"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#8E8E93] hover:text-[#FFD60A] transition-colors duration-300 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#FFD60A] to-[#E0B000] text-[#0C1117] font-semibold rounded-lg text-center"
              >
                Demo Talep Et
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
