import styles from './ButtonLink.module.css';

export default function ButtonLink({ children, href, variant = 'primary', size = 'default' }) {
  const className = [styles.button, styles[variant], size === 'small' ? styles.small : ''].filter(Boolean).join(' ');

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
