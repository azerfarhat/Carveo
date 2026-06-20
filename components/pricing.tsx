'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Pour les petites agences',
    price: '49',
    period: '/mois',
    features: [
      "Jusqu'à 20 véhicules",
      '2 utilisateurs',
      'Tableau de bord basique',
      'Support par email',
      'Rapports mensuels',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Pour les agences en croissance',
    price: '119',
    period: '/mois',
    features: [
      "Jusqu'à 100 véhicules",
      '10 utilisateurs',
      'Tableau de bord avancé',
      'Support prioritaire',
      'Rapports personnalisés',
      'API Access',
    ],
    popular: true,
  },
]

export function Pricing() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Tarifs</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4">
            Une offre adaptée à chaque besoin
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choisissez le plan qui correspond à la taille de votre flotte
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-xl shadow-primary/10 scale-[1.02]'
                  : 'bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full shadow-lg shadow-primary/25">
                    Plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-heading font-semibold mb-1.5">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-heading font-bold tracking-tight">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">
                      TND{plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-11 cursor-pointer ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                variant={plan.popular ? 'default' : 'secondary'}
                onClick={scrollToContact}
              >
                Commencer
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
