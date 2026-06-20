'use client'

import Link from 'next/link'

const footerLinks = {
  product: [
    { name: 'Fonctionnalités', href: '#features' },
    { name: 'Tarifs', href: '#pricing' },
    { name: "Qui sommes-nous", href: '#' },
    { name: 'Blog', href: '#' },
  ],
  ressources: [
    { name: 'Documentation', href: '#' },
    { name: "Centre d'aide", href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Statut du service', href: '#' },
  ],
  legal: [
    { name: 'Confidentialité', href: '#' },
    { name: 'CGU', href: '#' },
    { name: 'Mentions légales', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <span className="text-lg font-heading font-bold tracking-tight">Carveo</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              La solution de gestion de flotte nouvelle génération pour les agences de location de véhicules.
            </p>


          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Carveo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
