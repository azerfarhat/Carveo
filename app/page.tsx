import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { VideoDemo } from "@/components/video-demo"
import { Screenshots } from "@/components/screenshots"
import { Pricing } from "@/components/pricing"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <VideoDemo />
      <Screenshots />
      <Pricing />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}
