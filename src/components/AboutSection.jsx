import { ArrowRight } from 'lucide-react';
import ButtonLink from './ButtonLink.jsx';
import SectionTitle from './SectionTitle.jsx';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about} id="about-us">
      <div className={styles.text}>
        <SectionTitle kicker="ABOUT US" title="About LKG Construction" />
        <p>LKG Construction is a construction subcontractor that has grown over the years to become one of the most trusted names in the construction industry.</p>
        <p>We have completed over 1000 projects and have built a reputation for excellence.</p>
        <ButtonLink href="/about-us" size="small">READ MORE <ArrowRight size={15} /></ButtonLink>
      </div>
      <img className={styles.image} src="/assets/about-interior.png" alt="Modern commercial interior fit-out" />
    </section>
  );
}
