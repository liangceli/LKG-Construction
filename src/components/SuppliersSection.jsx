import { supplierRows } from '../data/siteData.js';
import SectionTitle from './SectionTitle.jsx';
import styles from './SuppliersSection.module.css';

function SupplierLogo({ supplier }) {
  return (
    <span className={styles.supplier}>
      <img src={supplier.image} alt={supplier.name} />
    </span>
  );
}

export default function SuppliersSection() {
  return (
    <section className={styles.suppliers}>
      <div className={styles.copy}>
        <SectionTitle kicker="OUR SUPPLIERS" />
        <p>We work with reliable suppliers and recognised brands to help ensure every project meets expectations for quality, compliance and long-term performance.</p>
      </div>
      <div className={styles.logos} aria-label="Supplier brands">
        {supplierRows.map((row, rowIndex) =>
          row.map((supplier) => <SupplierLogo supplier={supplier} key={`desktop-${rowIndex}-${supplier.name}`} />),
        )}
        {supplierRows.map((row, rowIndex) => (
          <div className={`${styles.logoRow} ${rowIndex === 1 ? styles.reverse : ''}`} key={`mobile-row-${rowIndex}`}>
            <div className={styles.logoTrack}>
              {[...row, ...row].map((supplier, index) => <SupplierLogo supplier={supplier} key={`${rowIndex}-${supplier.name}-${index}`} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
