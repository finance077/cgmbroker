'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Send } from 'lucide-react'

export default function DemoRequest() {

  return (
    <section id="demo" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_2px,transparent_2px),linear-gradient(to_bottom,#2a2a2a_2px,transparent_2px)] bg-[size:4rem_4rem] opacity-30"></div>
      
      {/* Gradient Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-l from-[#FFD60A]/5 to-transparent rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Trading Platformunuzu
              <span className="text-gradient"> Başlatmaya Hazır mısınız?</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#8E8E93] mb-6 sm:mb-8 leading-relaxed">
              Kişiselleştirilmiş bir demo planlayın ve CGM'nin brokerlik işinizi nasıl dönüştürebileceğini görün.
              Ekibimiz tüm özellikleri size anlatacak ve sorularınızı yanıtlayacak.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                { label: 'Canlı platform demosu alın', icon: '🎯' },
                { label: 'Özelleştirme seçeneklerini görüşün', icon: '⚙️' },
                { label: 'Fiyatlandırma bilgisi alın', icon: '💰' },
                { label: 'Ücretsiz denemenizi başlatın', icon: '🚀' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-base sm:text-lg text-gray-300">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/905xxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="block bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/60 to-[#0a0a0a]/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-[#25D366]/30 shadow-2xl hover:shadow-[#25D366]/30 hover:border-[#25D366]/70 transition-all duration-300 group hover:bg-gradient-to-br hover:from-[#25D366]/5 hover:via-[#1a1a1a]/60 hover:to-[#25D366]/5"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                {/* WhatsApp Icon */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366]/10 rounded-xl flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E8ECEF] mb-2 group-hover:text-[#25D366] transition-colors">
                    WhatsApp ile İletişime Geçin
                  </h3>
                  <p className="text-sm sm:text-base text-[#8E8E93] mb-3 sm:mb-4 leading-relaxed">
                    Hızlı yanıt için WhatsApp üzerinden bize ulaşın. Platform hakkında sorularınızı anında yanıtlayalım.
                  </p>
                  <div className="flex items-center space-x-2 text-[#25D366] font-semibold text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Şimdi Mesaj Gönder</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Telegram Card */}
            <motion.a
              href="https://t.me/cgmtrade"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="block bg-gradient-to-br from-[#0a0a0a]/90 via-[#1a1a1a]/60 to-[#0a0a0a]/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-[#0088cc]/30 shadow-2xl hover:shadow-[#0088cc]/30 hover:border-[#0088cc]/70 transition-all duration-300 group hover:bg-gradient-to-br hover:from-[#0088cc]/5 hover:via-[#1a1a1a]/60 hover:to-[#0088cc]/5"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                {/* Telegram Icon */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#0088cc]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0088cc]/20 transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E8ECEF] mb-2 group-hover:text-[#0088cc] transition-colors">
                    Telegram ile İletişime Geçin
                  </h3>
                  <p className="text-sm sm:text-base text-[#8E8E93] mb-3 sm:mb-4 leading-relaxed">
                    Telegram kanalımıza katılın. Güncellemeler, duyurular ve teknik destek için bize ulaşın.
                  </p>
                  <div className="flex items-center space-x-2 text-[#0088cc] font-semibold text-sm sm:text-base">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Telegram'da Yazın</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
