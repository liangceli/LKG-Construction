import { ArrowRight, Grid3X3, Layers3, PaintRoller, PanelsTopLeft, SquareStack } from 'lucide-react';
import ButtonLink from '../components/ButtonLink.jsx';
import Footer from '../components/Footer.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import styles from './ServicesPage.module.css';

const serviceCards = [
  {
    icon: Grid3X3,
    title: 'Ceilings',
    href: '/services/ceilings',
    image: '/assets/project-fitout.png',
    text: 'Premium ceiling systems for commercial, industrial and residential spaces.',
  },
  {
    icon: SquareStack,
    title: 'Partitions',
    href: '/services/partitions',
    image: '/assets/project-partition.png',
    text: 'Durable partition systems that shape practical and polished interiors.',
  },
  {
    icon: Layers3,
    title: 'Linings',
    href: '/services/linings',
    image: '/assets/about-construction-progress.png',
    text: 'Professional wall and interior linings installed for clean, lasting finishes.',
  },
  {
    icon: PaintRoller,
    title: 'Renovations',
    href: '/services/renovations',
    image: '/assets/project-renovation.png',
    text: 'Carefully managed renovation works that refresh existing spaces.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Fit-Outs',
    href: '/services/fit-outs',
    image: '/assets/about-finished-fitout.png',
    text: 'Complete interior fit-out support for functional commercial spaces.',
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
          <p className={styles.bannerCopy}>Explore our range of premium ceiling solutions designed to meet the unique needs of every project.</p>
        </div>
      </section>

      <section className={styles.services} id="ceilings">
        <div className={styles.heading}>
          <div>
            <p className={styles.kicker}>OUR CEILING SERVICES</p>
            <h2>Ceiling Solutions Built<br />for Every Space</h2>
          </div>
          <p>From concept to completion, we deliver precision ceiling systems that combine functionality, durability and modern design.</p>
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
          <h2>Need Help Choosing the<br />Right Ceiling Solution?</h2>
          <p>Our team is here to guide you to the best solution for your project, budget and timeline.</p>
        </div>
        <ButtonLink href="/contact-us">GET A FREE QUOTE <ArrowRight size={17} /></ButtonLink>
      </section>

      <Footer />
    </>
  );
}
