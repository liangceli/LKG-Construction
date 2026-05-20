import { ArrowRight, Grid3X3, Layers3, PaintRoller, PanelsTopLeft, SquareStack } from 'lucide-react';
import ButtonLink from '../components/ButtonLink.jsx';
import Footer from '../components/Footer.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import styles from './ServicesPage.module.css';

const serviceCards = [
  {
    icon: Grid3X3,
    title: 'Commercial',
    href: '/services/commercial',
    image: '/assets/project-fitout.png',
    text: 'We specialise in commercial plastering for shopping centres, retail stores, offices, warehouses, apartments, and large scale projects across all Brisbane.',
  },
  {
    icon: PaintRoller,
    title: 'Renovations',
    href: '/services/renovations',
    image: '/assets/project-renovation.png',
    text: 'We upgrade and reconfigure existing spaces with new ceilings and partition walls, ideal for refurbishments, tenancy changes, and interior improvements.',
  },
  {
    icon: Layers3,
    title: 'Education',
    href: '/services/education',
    image: '/assets/about-construction-progress.png',
    text: 'We install safe and durable ceiling and partition systems for schools, childcare centres, and education facilities, meeting all compliance requirements.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Medical Center',
    href: '/services/medical-center',
    image: '/assets/about-finished-fitout.png',
    text: 'We deliver clean, precise, and hygienic finishes for medical centres, clinics, and healthcare spaces with minimal disruption.',
  },
  {
    icon: SquareStack,
    title: 'External Cladding',
    href: '/services/external-cladding',
    image: '/assets/project-partition.png',
    text: 'We install external FC and cladding systems for commercial buildings, ensuring durability, weather resistance, and a professional finish.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.banner}>
        <SiteHeader active="Our Services" compact />
        <div className={styles.bannerInner}>
          <h1>OUR SERVICES</h1>
          <p className={styles.breadcrumb}><a href="/">Home</a><span>&gt;</span><strong>Our Services</strong></p>
          <p className={styles.bannerCopy}>Explore our range of premium ceilings and partitions services designed to meet the unique needs of every project.</p>
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.heading}>
          <div>
            <p className={styles.kicker}>OUR CEILINGS & PARTITIONS SERVICE</p>
            <h2>Plastering Solutions Built<br />for Every Space</h2>
          </div>
          <p>From concept to completion, we deliver professional ceilings, partitions, plastering and cladding solutions across key project sectors.</p>
        </div>

        <div className={styles.cardGrid}>
          {serviceCards.map(({ icon: Icon, title, href, image, text }) => (
            <article
              className={styles.card}
              key={title}
            >
              <img src={image} alt={title} />
              <div className={styles.cardBody}>
                <span className={styles.cardIcon}><Icon size={31} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={href}>View Details <ArrowRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>Need Help Choosing the<br />Right Plastering Solution?</h2>
          <p>Our team is here to guide you to the best solution for your project, budget and timeline.</p>
        </div>
        <ButtonLink href="/contact-us">GET A FREE QUOTE <ArrowRight size={17} /></ButtonLink>
      </section>

      <Footer />
    </>
  );
}
