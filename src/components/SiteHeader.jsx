import { useState } from 'react';
import { ChevronDown, Grid3X3, Layers3, PaintRoller, PanelsTopLeft, SquareStack, X } from 'lucide-react';
import { navItems } from '../data/siteData.js';
import styles from './SiteHeader.module.css';

const serviceTabs = [
  { icon: Grid3X3, label: 'Ceilings', href: '/services/ceilings' },
  { icon: SquareStack, label: 'Partitions', href: '/services/partitions' },
  { icon: Layers3, label: 'Linings', href: '/services/linings' },
  { icon: PaintRoller, label: 'Renovations', href: '/services/renovations' },
  { icon: PanelsTopLeft, label: 'Fit-Outs', href: '/services/fit-outs' },
];

export default function SiteHeader({ active = 'Home', compact = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className={`${styles.header} ${compact ? styles.compact : ''}`}>
      <a className={styles.brand} href="/" aria-label="LKG Construction home">
        <img src="/assets/lkg-logo-transparent-smooth-2x.webp" alt="LKG" />
      </a>
      <nav className={styles.nav} aria-label="Primary navigation">
        {navItems.map((item) => (
          item.label === 'Our Services' ? (
            <div className={styles.servicesNavItem} key={item.label}>
              <a className={item.label === active ? styles.active : ''} href={item.href}>
                {item.label}
                <ChevronDown size={13} strokeWidth={2.5} />
              </a>
              <div className={styles.megaMenu}>
                <div className={styles.megaInner}>
                  {serviceTabs.map(({ icon: Icon, label, href }) => (
                    <a className={styles.serviceTab} href={href} key={label}>
                      <span><Icon size={30} /></span>
                      <strong>{label}</strong>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <a className={item.label === active ? styles.active : ''} href={item.href} key={item.label}>
              {item.label}
            </a>
          )
        ))}
      </nav>
      <a className={styles.quoteTop} href="/contact-us">GET A FREE QUOTE</a>
      <button className={styles.menuButton} onClick={() => setIsMenuOpen(true)} type="button">
        MENU
      </button>
      {isMenuOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobilePanel}>
            <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)} aria-label="Close menu" type="button">
              <X size={32} />
            </button>
            <a href="/">Home</a>
            <button
              className={styles.mobileMenuToggle}
              onClick={() => setIsServicesOpen((isOpen) => !isOpen)}
              aria-expanded={isServicesOpen}
              type="button"
            >
              <span>Our Services</span>
              <ChevronDown size={21} />
            </button>
            {isServicesOpen && (
              <div className={styles.mobileServices}>
                {serviceTabs.map(({ icon: Icon, label, href }) => (
                  <a href={href} key={label}>
                    <Icon size={21} />
                    {label}
                  </a>
                ))}
              </div>
            )}
            <a href="/about-us">About Us</a>
            <a href="/contact-us">Contact Us</a>
            <a href="/contact-us">Get a Free Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
