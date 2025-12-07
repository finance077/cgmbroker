'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Star, Sparkles, Shield, BarChart3, Settings, Smartphone, Globe, Users, Bot, Wallet, Lock, LineChart, TrendingUp, ArrowRight, ImagesIcon } from 'lucide-react'
import Image from 'next/image'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FFD60A]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tam Entegre
            <span className="text-[#FFD60A]"> Platform Çözümü</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            İhtiyaçlarınıza göre özelleştirilebilir, tam kapsamlı trading platform çözümü. 
            Fiyatlandırma ve özellikler tamamen isteğinize göre belirlenir.
          </p>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow Effect Behind Card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD60A]/30 to-[#E0B000]/30 rounded-[2rem] blur-2xl opacity-50"></div>

          <div className="relative rounded-[2rem] p-10 md:p-16 bg-[#0a0a0a] border border-white/10 overflow-hidden">
            {/* Background Grid inside Card */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>



            <div className="relative z-10 text-center mb-12 mt-4">
              {/* Icon */}
              <div className="relative z-10 w-24 h-24 mx-auto mb-6">
                <Image
                  src="/images/ayı.png"
                  alt="CGM Broker Bear"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Title */}
              <h3 className="text-4xl font-bold text-white mb-4">CGM Trade Platform</h3>
              <p className="text-gray-400 text-xl mb-10">Eksiksiz Trading Çözümü</p>
            </div>

            {/* Features Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mb-12">
              {[
                { icon: BarChart3, text: 'Gelişmiş Trading Platformu', desc: 'TradingView entegrasyonlu' },
                { icon: Shield, text: 'Kurumsal Güvenlik', desc: 'DDOS koruması & Şifreleme' },
                { icon: Settings, text: 'Güçlü Admin Paneli', desc: 'Tam kontrol ve raporlama' },
                { icon: Smartphone, text: 'PWA Desteği', desc: 'Tüm cihazlarda çalışır (iOS & Android)' },
                { icon: Globe, text: '500+ Bist enstrümanları', desc: 'Piyasadaki tüm bist enstrümanları' },
                { icon: Zap, text: 'Yıldırım Hızı Emir İşleme', desc: '< 10ms gecikme süresi' },
                { icon: Users, text: 'Copy Trading Modülü', desc: 'Sosyal trading altyapısı' },
                { icon: Bot, text: 'Trading Bot Entegrasyonu', desc: 'Otomatik işlem desteği' },
                { icon: Wallet, text: 'Ödeme Gateway', desc: 'Kripto & Fiat entegrasyonu' },
                { icon: Lock, text: 'KYC/AML Uyumluluğu', desc: 'Otomatik kimlik doğrulama' },
                { icon: LineChart, text: 'Gerçek Zamanlı Analitik', desc: 'Detaylı kullanıcı analizi' },
                { icon: TrendingUp, text: 'Tam Özelleştirilebilir', desc: 'Sizin markanız, sizin kurallarınız' },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 bg-[#FFD60A]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD60A] group-hover:text-black transition-all duration-300 border border-[#FFD60A]/20 shadow-lg shadow-[#FFD60A]/5">
                    <feature.icon className="w-6 h-6 text-[#FFD60A] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg group-hover:text-[#FFD60A] transition-colors">{feature.text}</div>
                    <div className="text-gray-500 text-sm mt-1 group-hover:text-gray-400 transition-colors">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Features */}
            <div className="relative z-10 border-t border-white/10 pt-10 mb-10">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Ek Avantajlar</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { val: '7/24', label: 'Öncelikli Destek' },
                  { val: '99.9%', label: 'Uptime Garantisi' },
                  { val: 'Ücretsiz', label: 'Setup & Eğitim' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#FFD60A]/30 transition-colors">
                    <div className="text-3xl font-bold text-[#FFD60A] mb-2">{item.val}</div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#demo"
              className="relative z-10 block w-full py-5 text-center text-xl font-bold rounded-xl bg-[#FFD60A] text-black hover:shadow-[0_0_40px_-10px_rgba(255,214,10,0.6)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              Demo Talep Et ve Fiyat Alın
            </a>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8 text-lg">
            Özel ihtiyaçlarınız mı var? Size özel bir çözüm oluşturalım.
          </p>
          <a
            href="#demo"
            className="inline-flex items-center space-x-3 px-8 py-4 border border-white/10 text-white font-medium rounded-xl hover:bg-white/5 hover:border-[#FFD60A]/50 transition-all duration-300 group"
          >
            <span>Detaylı Bilgi İçin İletişime Geçin</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#FFD60A]" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
