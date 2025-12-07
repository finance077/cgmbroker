'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Settings, Link, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'İletişime Geçin',
    description: 'Demo talep edin ve ihtiyaçlarınızı belirleyelim. Size özel çözüm paketini birlikte oluşturalım.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Settings,
    title: 'Kurulum & Özelleştirme',
    description: 'Marka kimliğinize uygun renkler, logolar ve domain ayarları ile platformunuzu hazırlayalım.',
    color: 'from-[#FFD60A] to-orange-500'
  },
  {
    icon: Link,
    title: 'Entegrasyonlar',
    description: 'Likidite sağlayıcıları, ödeme sistemleri ve CRM bağlantılarını yapılandıralım.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Rocket,
    title: 'Yayına Başlayın',
    description: 'Son testler ve eğitimlerin ardından brokerlik işinizi dünyaya açın. Müşteri kabul etmeye başlayın.',
    color: 'from-green-500 to-emerald-500'
  }
]

export default function Process() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#FFD60A]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sadece 4 Adımda <span className="text-[#FFD60A]">Broker Olun</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Karmaşık teknik süreçlerle uğraşmayın. Anahtar teslim çözümümüz ile en kısa sürede piyasaya giriş yapın.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD60A]/30 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-8xl font-bold text-white/5 select-none group-hover:text-[#FFD60A]/10 transition-colors duration-500">
                  0{index + 1}
                </div>

                {/* Card */}
                <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FFD60A]/30 hover:bg-white/10 transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-6 shadow-lg`}>
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FFD60A] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-600">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
