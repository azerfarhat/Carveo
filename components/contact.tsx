'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

const team = [
  { name: 'Anas BOUSSEHMINE', role: 'Développeur ERP', img: '/anas.png' },
  { name: 'Azer FARHAT', role: 'Développeur ERP', img: '/azer.jpeg' },
]

export function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="section-label">Contact</span>

          <div className="grid grid-cols-2 gap-6 mt-8 mb-8 max-w-lg mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-3xl font-heading font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-base font-heading font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mx-auto mt-8"
        >
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-heading font-semibold mb-6 text-center">Demander une démo</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Prénom</label>
                  <Input
                    placeholder="Ali"
                    className="bg-secondary/50 border-border focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Nom</label>
                  <Input
                    placeholder="Ammar"
                    className="bg-secondary/50 border-border focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Email professionnel</label>
                <Input
                  type="email"
                  placeholder="Ali@gmail.com"
                  className="bg-secondary/50 border-border focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Nom de l&apos;agence</label>
                <Input
                  placeholder="Mon agence"
                  className="bg-secondary/50 border-border focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Taille de la flotte</label>
                <select className="w-full rounded-lg bg-secondary/50 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                  <option>1-20 véhicules</option>
                  <option>21-50 véhicules</option>
                  <option>51-100 véhicules</option>
                  <option>100+ véhicules</option>
                </select>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 gap-2 mt-2 h-11 shadow-lg shadow-primary/25 group">
                Demander une démo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
