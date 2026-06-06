import {
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  Phone,
  UsersRound,
} from 'lucide-react';
import Footer from '../components/Footer.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import styles from './ContactPage.module.css';

const contactItems = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['Brisbane QLD, Australia'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+61 417 356 789'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['jack@lkgconstruction.com.au'],
  },
  {
    icon: Clock3,
    title: 'Business Hours',
    lines: ['Mon - Fri      7:00am - 5:00pm', 'Sat            9:00am - 5:00pm'],
  },
  {
    icon: CheckCircle2,
    title: 'ABN & QBCC',
    lines: ['ABN: 98 677 525 165', 'QBCC: 15454061'],
  },
];

const supportItems = [
  { icon: Headphones, title: 'Quick Response', text: 'We aim to respond to all enquiries within 24 hours.' },
  { icon: UsersRound, title: 'Expert Team', text: 'Our experienced team is here to assist you.' },
  { icon: ClipboardList, title: 'Free Quotes', text: 'Get a detailed, no-obligation quote for your project.' },
  { icon: CheckCircle2, title: 'Reliable Service', text: 'We deliver quality results on time, every time.' },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.banner}>
        <SiteHeader active="Contact Us" compact />
        <div className={styles.bannerInner}>
          <h1>CONTACT US</h1>
          <p className={styles.bannerCopy}>Let's talk about your next project. We're here to answer your questions and provide the right solutions for your needs.</p>
          <p className={styles.breadcrumb}><a href="/">Home</a><span>&gt;</span><strong>Contact Us</strong></p>
        </div>
      </section>

      <section className={styles.contactPanel}>
        <div className={styles.contactCopy}>
          <p className={styles.kicker}>GET IN TOUCH</p>
          <h2>We'd love to hear from you.</h2>
          <p className={styles.bodyText}>Whether you have a question about our services, need a quote or want to discuss your next project, our team is ready to help.</p>
          <div className={styles.infoList}>
            {contactItems.map(({ icon: Icon, title, lines }) => (
              <article className={styles.infoItem} key={title}>
                <span className={styles.infoIcon}><Icon size={28} /></span>
                <div>
                  <h3>{title}</h3>
                  {lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <form className={styles.form}>
          <h2>Send Us an Enquiry</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          <div className={styles.formGrid}>
            <input aria-label="Full name" placeholder="Full name*" />
            <input aria-label="Email" placeholder="Email*" />
            <input aria-label="Phone" placeholder="Phone*" />
            <input aria-label="Company" placeholder="Company" />
          </div>
          <input aria-label="Subject" placeholder="Subject*" />
          <textarea aria-label="Project details" placeholder="Project details*" />
          <label className={styles.selectWrap}>
            <select aria-label="Preferred timeframe" defaultValue="">
              <option value="" disabled>Preferred timeframe</option>
              <option>As soon as possible</option>
              <option>Within 1 month</option>
              <option>Within 3 months</option>
            </select>
            <ChevronDown size={18} />
          </label>
          <p>Online enquiry form coming soon. Please contact us by phone or email for now.</p>
          <button disabled type="button">SEND ENQUIRY</button>
        </form>
      </section>

      <section className={styles.mapSection} aria-label="Our location">
        <iframe
          title="LKG Construction location in Brisbane"
          src="https://maps.google.com/maps?hl=en&q=Brisbane%20QLD%2C%20Australia&z=11&iwloc=B&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <span className={styles.mapPin} aria-hidden="true" />
        <article className={styles.locationCard}>
          <h2>Our Location</h2>
          <span />
          <p>We are based in Brisbane, QLD and service clients across Queensland.</p>
          <div>
            <MapPin size={20} />
            <p>Brisbane QLD, Australia</p>
          </div>
        </article>
      </section>

      <section className={styles.supportGrid}>
        {supportItems.map(({ icon: Icon, title, text }) => (
          <article className={styles.supportItem} key={title}>
            <Icon size={38} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <Footer />
    </>
  );
}
