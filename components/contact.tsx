'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Loader2, Linkedin, Globe } from 'lucide-react'
import { toast } from 'sonner'

const team = [
  { name: 'Anas BOUSSEHMINE', role: 'Développeur ERP', img: '/anas.png', linkedin: 'https://www.linkedin.com/in/anas-boussehmine/', website: 'https://www.anasbo.com/' },
  { name: 'Azer FARHAT', role: 'Développeur ERP', img: '/azer.jpeg', linkedin: 'https://www.linkedin.com/in/azer-farhat/', website: 'https://azer-mocha.vercel.app/' },
]

export function Contact() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const data = {
      firstName: form.get('firstName'),
      lastName: form.get('lastName'),
      email: form.get('email'),
      agency: form.get('agency'),
      fleetSize: form.get('fleetSize'),
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    setLoading(false)

    if (res.ok) {
      toast.success('Demande envoyée avec succès !')
      ;(e.target as HTMLFormElement).reset()
    } else {
      toast.error("Erreur lors de l'envoi. Réessayez plus tard.")
    }
  }

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
                <div className="w-32 h-32 rounded-full mx-auto mb-3 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-heading font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">Full-Stack Developer</p>
                <div className="flex justify-center gap-3 mt-2">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Prénom</label>
                  <Input
                    name="firstName"
                    placeholder="Ali"
                    required
                    className="bg-secondary/50 border-border focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Nom</label>
                  <Input
                    name="lastName"
                    placeholder="Ammar"
                    required
                    className="bg-secondary/50 border-border focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Email professionnel</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Ali@gmail.com"
                  required
                  className="bg-secondary/50 border-border focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Nom de l&apos;agence</label>
                <Input
                  name="agency"
                  placeholder="Mon agence"
                  required
                  className="bg-secondary/50 border-border focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Taille de la flotte</label>
                <select
                  name="fleetSize"
                  className="w-full rounded-lg bg-black text-white border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                >
                  <option>1-20 véhicules</option>
                  <option>21-50 véhicules</option>
                  <option>51-100 véhicules</option>
                  <option>100+ véhicules</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 gap-2 mt-2 h-11 shadow-lg shadow-primary/25 group"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Demander une démo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
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
