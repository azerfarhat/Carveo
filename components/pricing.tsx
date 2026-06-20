'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function Pricing() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            <div className="relative">
              <span className="section-label">Devis</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4">
                Demander un devis personnalisé
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Chaque agence est unique. Obtenez une offre adaptée à vos besoins spécifiques
              </p>

              <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
                {[
                  'Analyse gratuite',
                  'Démonstration personnalisée',
                  'Devis sans engagement',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2 px-10 h-14 text-base shadow-lg shadow-primary/25 group cursor-pointer"
                onClick={scrollToContact}
              >
                Demander un devis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground mt-6">
                Réponse sous 24h ouvrées
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
