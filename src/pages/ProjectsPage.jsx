import ProjectsSection from '../components/ProjectsSection.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import Footer from '../components/Footer.jsx';
import styles from './ProjectsPage.module.css';

export default function ProjectsPage() {
  return (
    <>
      <section className={styles.banner}>
        <SiteHeader active="Our Projects" compact />
        <div className={styles.bannerInner}>
          <p className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span>/</span>
            <strong>Our Projects</strong>
          </p>
          <h1>Our Projects</h1>
          <p>Explore recent LKG Construction project work across commercial fit-outs, renovations and specialist plastering.</p>
        </div>
      </section>
      <ProjectsSection />
      <Footer />
    </>
  );
}
