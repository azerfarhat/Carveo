'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export function VideoDemo() {
  return (
    <section id="demo" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="section-label">Démo</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4">
            Voyez Carveo en action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez comment Carveo simplifie la gestion de votre flotte au quotidien
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-muted-foreground">Vidéo de démonstration</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
