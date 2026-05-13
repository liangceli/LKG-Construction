import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contact-us">
      <div className={styles.copy}>
        <SectionTitle kicker="CONTACT US" title="Let's talk about your next project" ruleClassName={styles.contactRule} />
        <p>We stay in constant communication with our customers until the job is done. To get a free quote, or if you have questions or special requests, just drop us a line.</p>
        <ul>
          <li><Phone size={17} /> <span>+61 417 356 789</span></li>
          <li><Mail size={17} /> <span>jack@lkgconstruction.com.au</span></li>
          <li><MapPin size={17} /> <span>Brisbane QLD, Australia</span></li>
          <li><Clock3 size={17} /> <span><b>Mon - Fri</b> 7:00am - 5:00pm<br /><b>Sat</b> 9:00am - 5:00pm</span></li>
        </ul>
      </div>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <input placeholder="Full name" aria-label="Full name" />
          <input placeholder="Email" aria-label="Email" />
        </div>
        <div className={styles.formRow}>
          <input placeholder="Phone" aria-label="Phone" />
          <input placeholder="Location" aria-label="Location" />
        </div>
        <textarea placeholder="Project details" aria-label="Project details" />
        <select aria-label="Preferred timeframe" defaultValue="">
          <option value="" disabled>Preferred timeframe</option>
          <option>As soon as possible</option>
          <option>Within 1 month</option>
          <option>Within 3 months</option>
        </select>
        <button type="button">SEND ENQUIRY</button>
      </form>
    </section>
  );
}
