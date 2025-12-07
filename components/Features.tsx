'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Shield,
  Smartphone,
  Users,
  Zap,
  Globe,
  Lock,
  TrendingUp,
  Settings,
  Wallet,
  Bot,
  LineChart,
  ArrowUpRight
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Gelişmiş Trading Platformu',
    description: 'TradingView grafikleri, gerçek zamanlı veri ve gelişmiş emir tipleri ile profesyonel trading arayüzü.',
    size: 'large'
  },
  {
    icon: Shield,
    title: 'Kurumsal Güvenlik',
    description: 'Banka seviyesi şifreleme, 2FA kimlik doğrulama, cold wallet ve SOC2 uyumluluğu.',
    size: 'small'
  },
  {
    icon: Settings,
    title: 'Güçlü Admin Paneli',
    description: 'Kullanıcılar, pozisyonlar, yatırımlar, çekimler ve platform ayarlarını yönetmek için tam kontrol paneli.',
    size: 'small'
  },
  {
    icon: Smartphone,
    title: 'Mobil Uyumlu',
    description: 'Tüm cihazlarda sorunsuz çalışan responsive tasarım. Native mobil uygulamalar mevcut.',
    size: 'medium'
  },
  {
    icon: TrendingUp,
    title: '500+ BİST & VİOP',
    description: 'Borsa İstanbul\'daki tüm hisse senetleri ve VİOP kontratlarına tek platformdan, kurumsal hızda erişim sağlayın.',
    size: 'large'
  },
  {
    icon: Zap,
    title: 'Yıldırım Hızı',
    description: '10ms altı emir gerçekleştirme, sıfır kayma garantisi ve kurumsal seviye altyapı.',
    size: 'small'
  },
  {
    icon: Users,
    title: 'Copy Trading',
    description: 'Kullanıcıların başarılı traderları takip edip kopyalamasını sağlayan sosyal trading özellikleri.',
    size: 'small'
  },
  {
    icon: Bot,
    title: 'Trading Botları',
    description: 'Hazır stratejiler veya özel bot geliştirme yetenekleri ile otomatik trading.',
    size: 'large'
  },
  {
    icon: Wallet,
    title: 'Ödeme Entegrasyonu',
    description: 'Çoklu ödeme gateway, kripto yatırma ve otomatik çekim işleme sistemleri.',
    size: 'medium'
  },
  {
    icon: Lock,
    title: 'KYC/AML Uyumluluğu',
    description: 'Otomatik kimlik doğrulama, doküman yönetimi ve yasal uyumluluk araçları.',
    size: 'small'
  },
  {
    icon: LineChart,
    title: 'Gerçek Zamanlı Analitik',
    description: 'Kapsamlı raporlama, kullanıcı analitiği, kar/zarar takibi ve iş zekası dashboard.',
    size: 'small'
  },
  {
    icon: TrendingUp,
    title: 'White-Label Hazır',
    description: 'Tamamen özelleştirilebilir marka, domain, renkler ve özellikler. Sizin markanız, bizim teknolojimiz.',
    size: 'medium'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FFD60A]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Başarı İçin İhtiyaçınız Olan
            <span className="text-[#FFD60A]"> Her Şey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Brokerlik işinizin sektör liderleriyle rekabet etmesi için gereken tüm araç ve özellikleri içeren eksiksiz trading ekosistemi.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(240px,auto)]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative p-8 rounded-3xl border hover:border-[#FFD60A]/30 transition-all duration-500 hover:bg-white/10 overflow-hidden flex flex-col justify-between
                ${feature.title.includes('BİST') ? 'bg-[#FFD60A]/10 border-[#FFD60A]/30' : 'bg-white/5 border-white/5'}
                ${feature.size === 'large' ? 'md:col-span-2' : ''}
                ${feature.size === 'medium' ? 'md:col-span-2' : ''}
                ${feature.size === 'small' ? 'md:col-span-1' : ''}
              `}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD60A]/0 via-[#FFD60A]/0 to-[#FFD60A]/0 group-hover:from-[#FFD60A]/5 group-hover:to-[#FFD60A]/10 transition-all duration-500"></div>
              
              {/* Visuals for Large & Medium Cards */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 {/* Chart Visual for Trading Platform */}
                 {feature.title === 'Gelişmiş Trading Platformu' && (
                    <div className="absolute -right-10 -bottom-10 w-[300px] h-[200px] opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M0 150 L50 120 L100 160 L150 80 L200 100 L250 40 L300 60 V200 H0 Z" fill="url(#grad1)" />
                        <path d="M0 150 L50 120 L100 160 L150 80 L200 100 L250 40 L300 60" stroke="#FFD60A" strokeWidth="3" />
                        <defs>
                          <linearGradient id="grad1" x1="150" y1="0" x2="150" y2="200" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD60A" stopOpacity="0.5" />
                            <stop offset="1" stopColor="#FFD60A" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                 )}



                 {/* Code Visual for Bots */}
                 {feature.title === 'Trading Botları' && (
                    <div className="absolute right-6 bottom-6 font-mono text-xs text-[#FFD60A] opacity-20 group-hover:opacity-40 transition-opacity duration-500 text-right bg-black/50 p-4 rounded-xl border border-[#FFD60A]/10 backdrop-blur-sm">
                      <div className="text-[#FFD60A]">if (rsi &lt; 30 && price &gt; ma200) {'{'}</div>
                      <div className="pl-4 text-white">executeOrder({'{'}</div>
                      <div className="pl-8 text-gray-400">side: 'BUY',</div>
                      <div className="pl-8 text-gray-400">amount: 1.5,</div>
                      <div className="pl-8 text-gray-400">leverage: 10x</div>
                      <div className="pl-4 text-white">{'}'});</div>
                      <div className="text-[#FFD60A]">{'}'}</div>
                    </div>
                 )}

                 {/* Mobile Visual */}
                 {feature.title === 'Mobil Uyumlu' && (
                    <>
                      <div className="absolute -right-4 -bottom-4 w-32 h-48 bg-white/5 rounded-2xl border border-white/10 transform rotate-12 group-hover:rotate-6 transition-all duration-500"></div>
                      <div className="absolute -right-8 -bottom-8 w-32 h-48 bg-[#FFD60A]/10 rounded-2xl border border-[#FFD60A]/20 transform rotate-6 group-hover:rotate-0 transition-all duration-500"></div>
                    </>
                 )}

                 {/* Payment Visual */}
                 {feature.title === 'Ödeme Entegrasyonu' && (
                    <div className="absolute right-4 bottom-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <div className="w-16 h-16 rounded-full border-2 border-[#FFD60A] absolute right-0 bottom-0 animate-pulse"></div>
                      <div className="w-16 h-16 rounded-full border-2 border-white absolute right-8 bottom-0 opacity-50"></div>
                      <div className="w-16 h-16 rounded-full border-2 border-[#FFD60A] absolute right-4 bottom-6 opacity-30"></div>
                    </div>
                 )}

                 {/* White Label Visual */}
                 {feature.title === 'White-Label Hazır' && (
                    <div className="absolute right-6 bottom-6 flex gap-3 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                      <div className="w-8 h-8 rounded-full bg-[#FFD60A] shadow-[0_0_15px_rgba(255,214,10,0.5)]"></div>
                      <div className="w-8 h-8 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                    </div>
                 )}
              </div>
              
              {/* Icon */}
              <div className="relative mb-6 w-12 h-12 rounded-2xl bg-[#FFD60A]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-[#FFD60A]/20">
                <feature.icon className="w-6 h-6 text-[#FFD60A]" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className={`font-bold text-white mb-3 group-hover:text-[#FFD60A] transition-colors ${feature.size === 'large' ? 'text-2xl' : 'text-lg'}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Arrow Icon for Large Cards */}
              {feature.size === 'large' && (
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="w-6 h-6 text-[#FFD60A]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="#demo"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#FFD60A] text-black font-bold rounded-xl hover:shadow-[0_0_30px_-5px_rgba(255,214,10,0.4)] transition-all duration-300 transform hover:scale-105"
          >
            <span>Canlı Göster</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
