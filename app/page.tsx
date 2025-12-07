import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import DemoRequest from '@/components/DemoRequest'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Process />
      <Pricing />
      <DemoRequest />
      <Footer />
    </main>
  )
}
