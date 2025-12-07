'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Smartphone, ChevronRight, Layers, Zap, Shield, Globe, BarChart3, ChevronLeft, X, Maximize2, ExternalLink,Airplay } from 'lucide-react'

const screenshots = [
  {
    id: 0,
    title: 'Landing Sayfası',
    description: 'Markanıza özel modern açılış sayfası. Profesyonel ilk izlenim.',
    images: ['/screenshots/desktop/landing/main.png',
      '/screenshots/desktop/landing/main2.png',
    ],
    category: 'desktop',
    icon: Airplay
  },
  {
    id: 1,
    title: 'Trading Dashboard',
    description: 'TradingView entegrasyonu ve gerçek zamanlı veri akışı.',
    images: ['/screenshots/desktop/dashboard/main.png'],
    category: 'desktop',
    icon: BarChart3
  },
  {
    id: 2,
    title: 'Admin Paneli Dashboard',
    description: 'Tüm operasyonları tek merkezden yönetin. Risk analizi ve aktivite takibi.',
    images: [
      '/screenshots/admin/dashboard/main.png'
    ],
    category: 'desktop',
    icon: Shield
  },
  {
    id: 3,
    title: 'Kullanıcı Yönetimi',
    description: 'Detaylı CRM ve müşteri portföyü yönetimi. Hızlı KYC süreçleri.',
    images: [
      '/screenshots/admin/customers/main.png',
      '/screenshots/admin/customers/open.png',
      '/screenshots/admin/customers/closed.png'
    ],
    category: 'desktop',
    icon: Globe
  },
  {
    id: 4,
    title: 'Mobil Trading',
    description: 'iOS ve Android uyumlu native uygulama. Piyasayı cebinizde taşıyın.',
    images: [
      '/screenshots/mobile/dashboard/main.png',
      '/screenshots/mobile/dashboard/positions.png'
    ],
    category: 'mobile',
    icon: Smartphone
  },
  {
    id: 5,
    title: 'Admin Pozisyon Yönetimi',
    description: 'Tüm pozisyonları tek ekrandan takip edin. Detaylı raporlama.',
    images: [
      '/screenshots/admin/positions/open-positions.png',
      '/screenshots/admin/positions/closed-positions.png',
      '/screenshots/admin/positions/modal/position-detail-1.png',
      '/screenshots/admin/positions/modal/position-detail-2.png',
      '/screenshots/admin/positions/modal/position-detail-3.png',
      '/screenshots/admin/positions/modal/position-detail-4.png',
      '/screenshots/admin/positions/modal/position-detail-5.png',
      '/screenshots/admin/positions/modal/position-detail-6.png',
      '/screenshots/admin/positions/modal/position-detail-7.png',
      '/screenshots/admin/positions/modal/position-detail-8.png',
      '/screenshots/admin/positions/modal/position-detail-9.png',
    ],
    category: 'desktop',
    icon: Layers
  },
  {
    id: 6,
    title: 'Para Yatırma İşlemleri',
    description: 'Kullanımı kolay para yatırma yönetimi. Anında onay ve bakiye güncelleme.',
    images: [
      '/screenshots/admin/deposits/main.png',
      '/screenshots/admin/deposits/onay.png',
      '/screenshots/admin/deposits/talep.png'
    ],
    category: 'desktop',
    icon: Zap
  },
  {
    id: 7,
    title: 'Para Çekme İşlemleri',
    description: 'Güvenli çekim yönetimi. Anında doğrulama ve hızlı onay.',
    images: [
      '/screenshots/admin/withdrawals/main.png',
      '/screenshots/admin/withdrawals/talep.png'
    ],
    category: 'desktop',
    icon: Zap
  },
  {
    id: 8,
    title: 'Banka Hesapları',
    description: 'Çoklu banka desteği ve otomatik mutabakat.',
    images: ['/screenshots/admin/banks/main.png'],
    category: 'desktop',
    icon: Globe
  },
  {
    id: 9,
    title: 'Spread Yönetimi',
    description: 'Dinamik spread ayarları. Piyasa koşullarına otomatik uyum.',
    images: [
      '/screenshots/admin/spread/main.png',
      '/screenshots/admin/spread/modal/spread-detail-1.png',
      '/screenshots/admin/spread/modal/spread-detail-2.png'
    ],
    category: 'desktop',
    icon: BarChart3
  },
  {
    id: 10,
    title: 'Mobil Pozisyonlar',
    description: 'Mobil pozisyon takibi. Anlık kar/zarar göstergeleri.',
    images: [
      '/screenshots/mobile/positions/open.png',
      '/screenshots/mobile/positions/closed.png',
      '/screenshots/mobile/positions/main.png',
      '/screenshots/mobile/positions/modal/position-detail-1.png',
      '/screenshots/mobile/positions/modal/position-detail-2.png',
      '/screenshots/mobile/positions/modal/position-detail-3.png'
    ],
    category: 'mobile',
    icon: Smartphone
  },
  {
    id: 11,
    title: 'Mobil Cüzdan',
    description: 'Mobil para yatırma ve çekme. Bakiye ve işlem geçmişi.',
    images: ['/screenshots/mobile/wallet/main.png'],
    category: 'mobile',
    icon: Smartphone
  },
  {
    id: 12,
    title: 'Kimlik Doğrulama',
    description: 'KYC belgesi yükleme ve onay takibi.',
    images: ['/screenshots/mobile/verification/main.png'],
    category: 'mobile',
    icon: Shield
  },
  {
    id: 13,
    title: 'Mobil Landing',
    description: 'Markanıza özel mobil açılış sayfası. Profesyonel ilk izlenim.',
    images: [
      '/screenshots/mobile/landing/main.png',
      '/screenshots/mobile/landing/main2.png'
    ],
    category: 'mobile',
    icon: Smartphone
  },
  {
    id: 14,
    title: 'Online Kullanıcı Takibi',
    description: 'Aktif kullanıcıları canlı izleyin. Analiz ve işlem yönetimi.',
    images: ['/screenshots/admin/online/main.png'],
    category: 'desktop',
    icon: Shield
  },
]

export default function Screenshots() {
  const [activeCategory, setActiveCategory] = useState<'desktop' | 'mobile'>('desktop')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)

  const filteredScreenshots = screenshots.filter(s => s.category === activeCategory)
  const activeScreenshot = filteredScreenshots[activeIndex]

  // Klavye kontrolleri
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage()
      } else if (e.key === 'ArrowRight') {
        handleNextImage()
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentImageIndex, isFullscreen, activeScreenshot])

  // Her screenshot için görseller arası otomatik geçiş (10 saniye)
  useEffect(() => {
    if (!activeScreenshot || activeScreenshot.images.length <= 1) return

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % activeScreenshot.images.length)
    }, 10000)

    return () => clearInterval(imageInterval)
  }, [activeIndex, activeScreenshot])

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
    setCurrentImageIndex(0)
    setIsAutoPlaying(false)
  }

  const handleCategoryChange = (category: 'desktop' | 'mobile') => {
    setActiveCategory(category)
    setActiveIndex(0)
    setCurrentImageIndex(0)
    setIsAutoPlaying(true)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? activeScreenshot.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % activeScreenshot.images.length
    )
  }

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNextImage()
    }
    if (isRightSwipe) {
      handlePrevImage()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section id="screenshots" className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#FFD60A]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Platformu <span className="text-[#FFD60A]">Keşfedin</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            En son teknolojilerle donatılmış trading arayüzümüzü ve yönetim panelimizi yakından inceleyin.
          </motion.p>

          {/* Live Demo Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mb-12"
          >
            <a
              href="#demo"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#FFD60A] to-[#FFA500] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,214,10,0.5)] transition-all duration-300 group"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Canlı Demo İste</span>
            </a>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            <button
              onClick={() => handleCategoryChange('desktop')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === 'desktop'
                  ? 'bg-[#FFD60A] text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <Monitor className="w-5 h-5" />
              <span>Desktop & Admin</span>
            </button>
            <button
              onClick={() => handleCategoryChange('mobile')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === 'mobile'
                  ? 'bg-[#FFD60A] text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <Smartphone className="w-5 h-5" />
              <span>Mobil Uygulama</span>
            </button>
          </motion.div>
        </div>

        {/* Desktop: Image on top, tabs below */}
        {activeCategory === 'desktop' && (
          <div className="space-y-12">
            {/* Top: Image Display */}
            <div className="relative h-[600px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desktop-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Device Frame Container */}
                  <div className="relative w-full max-w-5xl h-full">
                    
                    {/* Glow Effect Behind Image */}
                    <div className="absolute -inset-4 bg-[#FFD60A]/20 blur-2xl rounded-full opacity-50"></div>

                    {/* The Frame */}
                    <div className="relative h-full bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl rounded-xl">
                      
                      {/* Desktop Browser Header */}
                      <div className="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                        <div className="ml-4 px-3 py-1 bg-black/50 rounded text-[10px] text-gray-600 font-mono flex-1 text-center">
                          {activeScreenshot.title}
                        </div>
                      </div>

                      {/* Screenshot Image */}
                      <div 
                        className="relative w-full h-[calc(100%-2rem)] bg-[#050505] flex items-center justify-center group overflow-hidden cursor-pointer"
                        onClick={() => setIsFullscreen(true)}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                      >
                        {/* Background Pattern for fallback */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a1a1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                        
                        {/* Fullscreen Hint */}
                        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="px-3 py-2 bg-black/70 rounded-lg flex items-center space-x-2 text-white text-sm">
                            <Maximize2 className="w-4 h-4" />
                            <span>Büyüt</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        {activeScreenshot.images.length > 1 && (
                          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
                            <motion.div
                              className="h-full bg-[#FFD60A]"
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 10, ease: 'linear' }}
                              key={`progress-${currentImageIndex}`}
                            />
                          </div>
                        )}

                        {/* Image Counter */}
                        {activeScreenshot.images.length > 1 && (
                          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 rounded-full text-white text-xs font-medium">
                            {currentImageIndex + 1} / {activeScreenshot.images.length}
                          </div>
                        )}
                        
                        {/* Image Carousel */}
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={currentImageIndex}
                            src={activeScreenshot.images[currentImageIndex]} 
                            alt={`${activeScreenshot.title} - ${currentImageIndex + 1}`} 
                            className="w-full h-full object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        </AnimatePresence>

                        {/* Navigation Arrows (görseller 1'den fazlaysa) */}
                        {activeScreenshot.images.length > 1 && (
                          <>
                            <button
                              onClick={handlePrevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                              onClick={handleNextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-6 h-6 text-white" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                              {activeScreenshot.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentImageIndex(idx)}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    idx === currentImageIndex 
                                      ? 'bg-[#FFD60A] w-6' 
                                      : 'bg-white/30 hover:bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Feature Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {filteredScreenshots.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleTabClick(index)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 group relative overflow-hidden border ${
                    activeIndex === index
                      ? 'bg-[#FFD60A]/10 border-[#FFD60A] shadow-[0_0_30px_-10px_rgba(255,214,10,0.3)]'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                  }`}
                >
                  {/* Active Indicator Top Line */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="desktopActiveIndicator"
                      className="absolute top-0 left-0 right-0 h-1 bg-[#FFD60A]"
                    />
                  )}

                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                      activeIndex === index ? 'bg-[#FFD60A] text-black' : 'bg-white/10 text-gray-400 group-hover:text-white'
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-base font-bold mb-1 transition-colors ${
                        activeIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs leading-relaxed transition-colors line-clamp-2 ${
                        activeIndex === index ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile: Side-by-side layout */}
        {activeCategory === 'mobile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Feature List */}
            <div className="lg:col-span-5 space-y-4">
              {filteredScreenshots.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleTabClick(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group relative overflow-hidden border ${
                    activeIndex === index
                      ? 'bg-[#FFD60A]/10 border-[#FFD60A] shadow-[0_0_30px_-10px_rgba(255,214,10,0.3)]'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                  }`}
                >
                  {/* Active Indicator Line */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFD60A]"
                    />
                  )}

                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg transition-colors ${
                      activeIndex === index ? 'bg-[#FFD60A] text-black' : 'bg-white/10 text-gray-400 group-hover:text-white'
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 transition-colors ${
                        activeIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        activeIndex === index ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right Side: Image Display */}
            <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Device Frame Container */}
                  <div className="relative w-[340px] h-[700px]">
                    
                    {/* Glow Effect Behind Image */}
                    <div className="absolute -inset-4 bg-[#FFD60A]/20 blur-2xl rounded-full opacity-50"></div>

                    {/* The Frame */}
                    <div className="relative h-full bg-[#0a0a0a] border-[8px] border-[#1a1a1a] overflow-hidden shadow-2xl rounded-[3rem]">
                      
                      {/* Mobile Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-xl z-20"></div>

                      {/* Screenshot Image */}
                      <div 
                        className="relative w-full h-full bg-[#050505] flex items-center justify-center group overflow-hidden cursor-pointer"
                        onClick={() => setIsFullscreen(true)}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                      >
                        {/* Background Pattern for fallback */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a1a1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                        
                        {/* Fullscreen Hint */}
                        <div className="absolute top-8 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="px-2 py-1 bg-black/70 rounded-lg flex items-center space-x-1 text-white text-xs">
                            <Maximize2 className="w-3 h-3" />
                            <span>Büyüt</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        {activeScreenshot.images.length > 1 && (
                          <div className="absolute top-6 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-[#FFD60A]"
                              initial={{ width: '0%' }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 10, ease: 'linear' }}
                              key={`progress-mobile-${currentImageIndex}`}
                            />
                          </div>
                        )}

                        {/* Image Counter */}
                        {activeScreenshot.images.length > 1 && (
                          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 px-2 py-1 bg-black/70 rounded-full text-white text-[10px] font-medium">
                            {currentImageIndex + 1} / {activeScreenshot.images.length}
                          </div>
                        )}
                        
                        {/* Image Carousel */}
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={currentImageIndex}
                            src={activeScreenshot.images[currentImageIndex]} 
                            alt={`${activeScreenshot.title} - ${currentImageIndex + 1}`} 
                            className="w-full h-full object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        </AnimatePresence>

                        {/* Navigation Arrows (görseller 1'den fazlaysa) */}
                        {activeScreenshot.images.length > 1 && (
                          <>
                            <button
                              onClick={handlePrevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                              onClick={handleNextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-6 h-6 text-white" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                              {activeScreenshot.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setCurrentImageIndex(idx)}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    idx === currentImageIndex 
                                      ? 'bg-[#FFD60A] w-6' 
                                      : 'bg-white/30 hover:bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
        
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-black/50 rounded-full text-white text-sm">
              {currentImageIndex + 1} / {activeScreenshot.images.length}
            </div>

            {/* Main Image */}
            <div 
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`fullscreen-${currentImageIndex}`}
                  src={activeScreenshot.images[currentImageIndex]}
                  alt={activeScreenshot.title}
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Navigation */}
              {activeScreenshot.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrevImage()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNextImage()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="text-xl font-bold mb-2">{activeScreenshot.title}</h3>
              <p className="text-sm text-gray-400">{activeScreenshot.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
