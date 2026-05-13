import { supplierRows } from '../data/siteData.js';
import SectionTitle from './SectionTitle.jsx';
import styles from './SuppliersSection.module.css';

function SupplierLogo({ name }) {
  if (name === 'USG') {
    return (
      <span className={styles.supplier}>
        <b>USG</b>
        <strong>BORAL</strong>
        <i />
      </span>
    );
  }

  return <span className={styles.supplier}>{name}</span>;
}

export default function SuppliersSection() {
  return (
    <section className={styles.suppliers}>
      <div className={styles.copy}>
        <SectionTitle kicker="OUR SUPPLIERS" />
        <p>We work with reliable suppliers and recognised brands to help ensure every project meets expectations for quality, compliance and long-term performance.</p>
      </div>
      <div className={styles.logos} aria-label="Supplier brands">
        {supplierRows.flatMap((row, rowIndex) =>
          row.map((name) => <SupplierLogo name={name} key={`${rowIndex}-${name}`} />),
        )}
      </div>
    </section>
  );
}
