'use client'

import { motion } from 'framer-motion'
import {
  Car,
  BarChart3,
  Shield,
  Users,
  Bell,
  Wrench,
} from 'lucide-react'

const features = [
  {
    icon: Car,
    title: 'Gestion de véhicules',
    description: 'Suivez l\'état de chaque véhicule en temps réel. Historique complet, fiches détaillées et documents attachés.',
    gradient: 'from-orange-500/20 to-orange-600/10',
    iconBg: 'bg-orange-500/20',
  },
  {
    icon: BarChart3,
    title: 'Analyses et rapports',
    description: 'Tableaux de bord personnalisables avec KPIs essentiels. Export automatique et Rapports détaillés.',
    gradient: 'from-red-500/20 to-red-600/10',
    iconBg: 'bg-red-500/20',
  },
  {
    icon: Shield,
    title: 'Sécurité avancée',
    description: 'Contrôle d\'accès granulaire, authentification forte et audit trail complet. Vos données sont protégées.',
    gradient: 'from-orange-400/20 to-orange-500/10',
    iconBg: 'bg-orange-400/20',
  },
  {
    icon: Users,
    title: 'CRM intégré',
    description: 'Base clients complète avec historique des locations, contrats actifs et préférences.',
    gradient: 'from-amber-500/20 to-amber-600/10',
    iconBg: 'bg-amber-500/20',
  },
  {
    icon: Bell,
    title: 'Alertes intelligentes',
    description: 'Notifications personnalisées pour les échéances, maintenances et événements critiques en temps réel.',
    gradient: 'from-orange-600/20 to-orange-700/10',
    iconBg: 'bg-orange-600/20',
  },
  {
    icon: Wrench,
    title: 'Maintenance préventive',
    description: 'Planifiez les entretiens, suivez les coûts et recevez des rappels automatiques.',
    gradient: 'from-red-400/20 to-red-500/10',
    iconBg: 'bg-red-400/20',
  },
]

export function Features() {
  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label">Fonctionnalités</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4 text-balance">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une suite complète d&apos;outils pour gérer votre agence de location avec efficacité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 h-full">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
                    <div className="text-sm leading-relaxed" style={{ color: '#83827d' }}>
                      {feature.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
