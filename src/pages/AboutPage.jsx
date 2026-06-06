import {
  ArrowRight,
  Building2,
  Clock3,
  HardHat,
  Layers3,
  Mail,
  PaintRoller,
  ShieldCheck,
  SquareStack,
  UsersRound,
} from 'lucide-react';
import ButtonLink from '../components/ButtonLink.jsx';
import Footer from '../components/Footer.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import styles from './AboutPage.module.css';

const values = [
  { icon: ShieldCheck, title: 'Quality Workmanship', text: 'We take pride in our attention to detail and superior finishes.' },
  { icon: UsersRound, title: 'Experienced Team', text: 'Our skilled team brings expertise to projects of all sizes.' },
  { icon: Clock3, title: 'Reliable Scheduling', text: 'We understand the importance of deadlines and deliver.' },
  { icon: Building2, title: 'Customer Focused', text: 'We work closely with our clients to bring their vision to life.' },
];

const team = [
  { id: 'jack-liu', name: 'Jack Liu', role: 'Director', email: 'jack@lkgconstruction.com.au', image: '/assets/team-jack-liu.jpg' },
  { id: 'ivy-wang', name: 'Ivy Wang', role: 'Manager', email: 'Ivy@lkgconstruction.com.au', image: '/assets/team-ivy-wang.jpg' },
  { id: 'hamit-arkin', name: 'Hamit Arkin', role: 'Project supervisor', email: 'hamit@lkgconstruction.com.au', image: '/assets/team-hamit-arkin.jpg' },
  { id: 'estimator', name: '', role: '', email: '', image: '' },
];

const services = [
  { icon: Layers3, title: 'Commercial', text: 'We specialise in commercial plastering for shopping centres, retail stores, offices, warehouses, apartments, and large scale projects across Greater Brisbane.' },
  { icon: PaintRoller, title: 'Renovations', text: 'We upgrade and reconfigure existing spaces with new ceilings and partition walls, ideal for refurbishments, tenancy changes, and interior improvements.' },
  { icon: SquareStack, title: 'Education', text: 'We install safe and durable ceiling and partition systems for schools, childcare centres, and education facilities, meeting all compliance requirements.' },
  { icon: Building2, title: 'Medical Centre', text: 'We deliver clean, precise, and hygienic finishes for medical centres, clinics, and healthcare spaces with minimal disruption.' },
  { icon: HardHat, title: 'External Cladding', text: 'We install external FC and cladding systems for commercial buildings, ensuring durability, weather resistance, and a professional finish.' },
];

const stats = [
  { icon: Building2, value: '1000+', label: 'Projects Completed' },
  { icon: UsersRound, value: '15+', label: 'Years of Experience' },
  { icon: ShieldCheck, value: '50+', label: 'Skilled Professionals' },
  { icon: HardHat, value: '100%', label: 'Safety Focused' },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.banner}>
        <SiteHeader active="About Us" compact />
        <div className={styles.bannerInner}>
          <h1>ABOUT US</h1>
          <p><a href="/">Home</a><span>/</span><strong>About Us</strong></p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introCopy}>
          <p className={styles.kicker}>WHO WE ARE</p>
          <h2>Building Quality.<br />Delivering Trust.</h2>
          <p className={styles.bodyText}>At LKG Construction, we are a Brisbane-based specialist plastering company delivering high quality workmanship across both commercial and residential projects.</p>
          <p className={styles.bodyText}>With extensive industry experience, our team has successfully completed a wide range of projects including commercial office buildings, schools, aged care facilities, shopping centres, hospitals, and residential renovations.</p>
          <div className={styles.valuesGrid}>
            {values.map(({ icon: Icon, title, text }) => (
              <article className={styles.valueCard} key={title}>
                <span><Icon size={22} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <img
          className={styles.introImage}
          src="/assets/about-finished-fitout.png"
          alt="Completed commercial interior fit-out with glass partitions and timber ceiling detail"
        />
      </section>

      <section className={styles.storyBand}>
        <div className={styles.story}>
          <img
            className={styles.storyImage}
            src="/assets/about-partition-framing.png"
            alt="Metal stud partition framing and ceiling grid installation in progress"
          />
          <div className={styles.storyCopy}>
            <p className={styles.kicker}>OUR STORY</p>
            <h2>Built on Experience.<br />Focused on Excellence.</h2>
            <p>We pride ourselves on reliability, efficiency, and attention to detail. Whether it's large scale commercial developments or smaller renovation works, we are committed to delivering professional results that meet the highest standards.</p>
            <p>At LKG Construction, we work closely with builders, developers, and clients to ensure every project is completed on time, within budget, and to specification.</p>
            <ButtonLink href="/contact-us" size="small">GET IN TOUCH <ArrowRight size={15} /></ButtonLink>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <p className={styles.kicker}>OUR TEAM</p>
        <h2>Meet the People Behind LKG Construction</h2>
        <p className={styles.centerText}>Our team of professionals bring passion, experience and leadership to every project we deliver.</p>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <article className={styles.teamCard} key={member.id}>
              {member.image ? (
                <img className={styles.portrait} src={member.image} alt={`${member.name}, ${member.role}`} />
              ) : (
                <div className={styles.portrait} aria-label="Team member image placeholder" />
              )}
              <h3>{member.name || '\u00a0'}</h3>
              <strong>{member.role || '\u00a0'}</strong>
              {member.email && (
                <div className={styles.teamLinks}>
                  <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}><Mail size={22} /></a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.servicesSection}>
        <p className={styles.kicker}>WHAT WE DO</p>
        <h2>Specialists in Ceilings & Partitions</h2>
        <p className={styles.centerText}>We provide a complete range of plastering services across commercial, renovation, education, medical and external cladding projects.</p>
        <div className={styles.serviceGrid}>
          {services.map(({ icon: Icon, title, text }) => (
            <article className={styles.serviceItem} key={title}>
              <span><Icon size={32} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className={styles.statsBar}>
          {stats.map(({ icon: Icon, value, label }) => (
            <div className={styles.statItem} key={label}>
              <Icon size={34} />
              <p><strong>{value}</strong><span>{label}</span></p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <p className={styles.kicker}>LET'S BUILD SOMETHING GREAT TOGETHER</p>
        <h2>Ready to start your next project?</h2>
        <p>We're here to bring your vision to life with quality workmanship, reliable service and expert support every step of the way.</p>
        <ButtonLink href="/contact-us">GET A FREE QUOTE <ArrowRight size={17} /></ButtonLink>
      </section>

      <Footer />
    </>
  );
}
