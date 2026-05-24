import { BadgeCheck, Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { quickLinks, services } from '../data/siteData.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <img className={styles.logo} src="/assets/lkg-logo-transparent-smooth-2x.webp" alt="LKG" />
          <p>Delivering quality workmanship and dependable plastering solutions across commercial, renovation, education, medical and external cladding projects.</p>
          <div className={styles.socials}>
            <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#facebook" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#instagram" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>
        <FooterLinks title="QUICK LINKS" items={quickLinks} />
        <FooterLinks title="SERVICES" items={services} />
        <div className={styles.contact}>
          <h4>GET IN TOUCH</h4>
          <p><Phone size={14} /> +61 417 356 789</p>
          <p><Mail size={14} /> jack@lkgconstruction.com.au</p>
          <p><MapPin size={14} /> Brisbane QLD, Australia</p>
          <p><BadgeCheck size={14} /> ABN: 98 677 525 165<br />QBCC: 15454061</p>
          <p><Clock3 size={14} /> Mon - Fri&nbsp;&nbsp; 7:00am - 5:00pm<br />Sat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am - 5:00pm</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2024 LKG Construction. All Rights Reserved.</span>
        <nav>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#sitemap">Site Map</a>
        </nav>
      </div>
    </footer>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div className={styles.links}>
      <h4>{title}</h4>
      {items.map((item) => (
        <a href={item.href} key={item.label}>{item.label}</a>
      ))}
    </div>
  );
}
