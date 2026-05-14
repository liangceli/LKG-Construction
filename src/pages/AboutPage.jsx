import {
  ArrowRight,
  Building2,
  Clock3,
  HardHat,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  PaintRoller,
  Phone,
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
  { icon: Clock3, title: 'On Time, Every Time', text: 'We understand the importance of deadlines and deliver.' },
  { icon: Building2, title: 'Customer Focused', text: 'We work closely with our clients to bring their vision to life.' },
];

const team = [
  { name: 'Luke Gauci', role: 'Director', image: '/assets/team-luke-gauci.png', text: 'With over 15 years in the industry, Luke leads LKG Construction with a focus on quality, integrity and client satisfaction.' },
  { name: 'Kane Gauci', role: 'Director', image: '/assets/team-kane-gauci.png', text: 'Kane oversees project delivery and operations, ensuring every project runs smoothly from start to finish.' },
  { name: 'Chantelle Gauci', role: 'Business Manager', image: '/assets/team-chantelle-gauci.png', text: 'Chantelle manages business operations and client relations, keeping everything organised and on track.' },
  { name: 'Daniel Gauci', role: 'Project Manager', image: '/assets/team-daniel-gauci.png', text: 'Daniel brings experience and attention to detail to manage projects and deliver exceptional results.' },
];

const services = [
  { icon: Layers3, title: 'Ceilings', text: 'Suspended ceilings, grid ceilings, bulkheads and feature ceilings installed with precision.' },
  { icon: SquareStack, title: 'Partitions', text: 'Metal stud, plasterboard and glass partitions for commercial and residential spaces.' },
  { icon: SquareStack, title: 'Linings', text: 'Wall linings, shaft linings and specialised linings for a clean and professional finish.' },
  { icon: PaintRoller, title: 'Renovations', text: 'Complete renovation and refurbishment services to transform your spaces.' },
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
          <p className={styles.bodyText}>LKG Construction is a Sydney-based construction subcontractor specialising in ceilings, partitions, linings and renovations. With years of experience and a commitment to excellence, we deliver high-quality workmanship on every project.</p>
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
            <p>Founded with a simple goal — to deliver reliable, high-quality construction services — LKG Construction has grown to become one of the most trusted names in the construction industry.</p>
            <p>We've completed over 1000 projects across a wide range of sectors, including commercial, retail, education, healthcare and residential developments.</p>
            <p>Our success is built on strong relationships, skilled craftsmanship and a customer-first approach.</p>
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
            <article className={styles.teamCard} key={member.name}>
              {member.image ? (
                <img className={styles.portrait} src={member.image} alt={`${member.name}, ${member.role}`} />
              ) : (
                <div className={styles.portrait} aria-label={`${member.name} image placeholder`} />
              )}
              <h3>{member.name}</h3>
              <strong>{member.role}</strong>
              <p>{member.text}</p>
              <div className={styles.teamLinks}>
                <a href="#linkedin" aria-label={`${member.name} LinkedIn`}><Linkedin size={22} /></a>
                <a href="mailto:jack@lkgconstruction.com.au" aria-label={`Email ${member.name}`}><Mail size={22} /></a>
                <a href="tel:+61417356789" aria-label={`Call ${member.name}`}><Phone size={22} /></a>
                <a href="/contact-us" aria-label={`Contact ${member.name}`}><MessageCircle size={22} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.servicesSection}>
        <p className={styles.kicker}>WHAT WE DO</p>
        <h2>Specialists in Interior Construction</h2>
        <p className={styles.centerText}>We provide a complete range of interior fit-out and construction services, tailored to meet the unique needs of each project.</p>
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
