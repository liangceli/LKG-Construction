import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/siteData.js';
import SectionTitle from './SectionTitle.jsx';
import styles from './ProjectsSection.module.css';

const getVisibleCount = () => (window.matchMedia('(max-width: 680px)').matches ? 1 : 3);

export default function ProjectsSection() {
  const [activePage, setActivePage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const galleryRef = useRef(null);
  const isMobile = visibleCount === 1;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 680px)');
    const handleChange = () => {
      setVisibleCount(getVisibleCount());
      setActivePage(0);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const pages = useMemo(() => {
    const groupedProjects = [];
    for (let index = 0; index < projects.length; index += visibleCount) {
      groupedProjects.push(projects.slice(index, index + visibleCount));
    }
    return groupedProjects;
  }, [visibleCount]);

  const activeProjects = pages[activePage] ?? pages[0];

  const handleMobileScroll = () => {
    if (!galleryRef.current || !isMobile) return;
    const { scrollLeft, clientWidth } = galleryRef.current;
    setActivePage(Math.round(scrollLeft / clientWidth));
  };

  const goToPage = (index) => {
    setActivePage(index);
    if (galleryRef.current && isMobile) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.clientWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const goToPrevious = () => {
    setActivePage((currentPage) => (currentPage === 0 ? pages.length - 1 : currentPage - 1));
  };

  const goToNext = () => {
    setActivePage((currentPage) => (currentPage + 1) % pages.length);
  };

  return (
    <section className={styles.projects} id="our-services">
      <div className={styles.copy} id="our-projects">
        <SectionTitle kicker="OUR PROJECTS" title="Selected Project Highlights" />
        <p>We are currently working on and have previously completed projects across ceilings, partitions, linings and renovation works.</p>
        <div className={styles.sliderControls}>
          <button aria-label="Previous projects" onClick={goToPrevious} type="button"><ArrowLeft size={18} /></button>
          <button aria-label="Next projects" onClick={goToNext} type="button"><ArrowRight size={18} /></button>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.gallery} onScroll={handleMobileScroll} ref={galleryRef}>
          {(isMobile ? projects : activeProjects).map((project) => (
            <article className={styles.card} key={`${isMobile ? 'mobile' : activePage}-${project.title}`}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
        <div className={styles.dots} aria-label="Project gallery pagination">
          {pages.map((page, index) => (
            <button
              aria-label={`Show project group ${index + 1}`}
              aria-current={activePage === index ? 'true' : undefined}
              className={activePage === index ? styles.current : ''}
              key={page[0].title}
              onClick={() => goToPage(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
