'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Shield, TrendingUp, Users } from 'lucide-react'
import { HeroScene } from './hero-scene'



export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 leading-[0.95]">
            Votre flotte,{' '}
            <span className="text-gradient-primary">
              en mode smart
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Carveo est la solution complète pour les agences de location. Gérez vos véhicules,
            suivez vos réservations et optimisez votre rentabilité en temps réel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 h-12 shadow-lg shadow-primary/25 group cursor-pointer"
              onClick={() => scrollTo('contact')}
            >
              Commencer maintenant
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 h-12 border-muted-foreground/20 hover:bg-primary/10 hover:border-primary/30 cursor-pointer"
              onClick={() => scrollTo('demo')}
            >
              <Play className="w-4 h-4" />
              Voir la démo
            </Button>
          </div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-2 bg-muted-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
