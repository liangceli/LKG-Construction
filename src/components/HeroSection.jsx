import { ArrowRight, Building2, ShieldCheck } from 'lucide-react';
import ButtonLink from './ButtonLink.jsx';
import SiteHeader from './SiteHeader.jsx';
import styles from './HeroSection.module.css';

const stats = [
  { icon: Building2, label: '1000+', detail: 'Projects completed' },
  { icon: ShieldCheck, label: 'Trusted', detail: 'Construction subcontractor' },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <video className={styles.heroBg} aria-hidden="true" autoPlay muted loop playsInline poster="/assets/hero-space.png">
        <source src="/assets/hero-video-2.mp4" type="video/mp4" />
      </video>
      <SiteHeader active="Home" />

      <div className={styles.content} id="home">
        <p className={styles.eyebrow}>COMMERCIAL | RENOVATIONS | EDUCATION | MEDICAL CENTRE | EXTERNAL CLADDING</p>
        <h1>
          Reliable construction
          <span>services built on</span>
          <strong>quality workmanship.</strong>
        </h1>
        <p className={styles.copy}>Delivering quality workmanship, practical expertise and dependable service on every project.</p>
        <div className={styles.actions}>
          <ButtonLink href="/contact-us">GET A FREE QUOTE <ArrowRight size={17} /></ButtonLink>
          <ButtonLink href="#our-services" variant="secondary">VIEW OUR SERVICES <ArrowRight size={17} /></ButtonLink>
        </div>
        <div className={styles.stats}>
          {stats.map(({ icon: Icon, label, detail }) => (
            <div className={styles.stat} key={label}>
              <span className={styles.statIcon}><Icon size={label === '1000+' ? 26 : 27} /></span>
              <p><strong>{label}</strong><small>{detail}</small></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
