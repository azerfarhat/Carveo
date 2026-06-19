'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-4 relative"
      >
        <div className="relative max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-balance">
              Prêt à moderniser votre flotte ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Rejoignez les agences qui optimisent déjà leur gestion avec Carveo. Essayez gratuitement pendant 14 jours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 px-8 h-12 shadow-lg shadow-primary/25 group">
                Essai gratuit 14 jours
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 border-muted-foreground/20">
                Planifier une démo
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Sans engagement. Aucune carte bancaire requise.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
