'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Smartphone, Moon, Zap, Globe, ArrowUpRight } from 'lucide-react'

const highlights = [
  { label: 'Interface responsive', icon: Smartphone },
  { label: 'Mode sombre natif', icon: Moon },
  { label: 'Temps réel', icon: Zap },
  { label: 'Multi-langue', icon: Globe },
]

export function Screenshots() {
  return (
    <section id="preview" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Aperçu</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4 text-balance">
            Interface intuitive et moderne
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez l&apos;expérience utilisateur exceptionnelle de Carveo
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-accent/30 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
                <div className="aspect-[16/10] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
                  <Image
                    src="/screenshots/icon1.png"
                    alt="Tableau de bord Carveo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-semibold">Tableau de bord principal</h3>
                    <p className="text-sm text-muted-foreground">Vue d&apos;ensemble de votre flotte</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative md:mt-12"
            >
              <div className="absolute -inset-1 bg-gradient-to-l from-accent/40 to-primary/30 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
                <div className="aspect-[16/10] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5" />
                  <Image
                    src="/screenshots/icon2.png"
                    alt="Gestion des réservations Carveo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-semibold">Gestion des réservations</h3>
                    <p className="text-sm text-muted-foreground">Calendrier et planning en temps réel</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="text-center p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="text-sm font-medium">{item.label}</div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
