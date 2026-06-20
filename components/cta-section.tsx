'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Sparkles } from 'lucide-react'

export function CTASection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-4 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-balance leading-[1.1]">
            Prêt à moderniser<br />
            <span className="text-gradient-primary">votre flotte ?</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Rejoignez les agences qui optimisent déjà leur gestion avec Carveo
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 gap-3 px-8 h-13 text-base shadow-xl shadow-primary/30 group cursor-pointer"
              onClick={scrollToContact}
            >
              <Sparkles className="w-4 h-4" />
              Essai gratuit 14 jours
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-3 px-8 h-13 text-base border-muted-foreground/30 hover:bg-primary/10 hover:border-primary/40 cursor-pointer"
              onClick={scrollToContact}
            >
              <Calendar className="w-4 h-4" />
              Planifier une démo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/70 mt-8 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            Sans engagement — Aucune carte bancaire requise
          </p>
        </div>
      </motion.div>
    </section>
  )
}
