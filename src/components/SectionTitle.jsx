import styles from './SectionTitle.module.css';

export default function SectionTitle({ kicker, title, ruleClassName = '' }) {
  const ruleClass = [styles.rule, ruleClassName].filter(Boolean).join(' ');

  return (
    <>
      <p className={styles.kicker}>{kicker}</p>
      {title && <h2 className={styles.title}>{title}</h2>}
      {title && <span className={ruleClass} />}
    </>
  );
}
