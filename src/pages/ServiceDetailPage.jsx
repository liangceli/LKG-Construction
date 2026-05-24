import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  Grid3X3,
  Layers3,
  MessageSquare,
  PaintRoller,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  SquareStack,
  StretchHorizontal,
  TableCellsSplit,
  Wrench,
} from 'lucide-react';
import ButtonLink from '../components/ButtonLink.jsx';
import Footer from '../components/Footer.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import { projects as siteProjects } from '../data/siteData.js';
import styles from './ServiceDetailPage.module.css';

const process = [
  { icon: MessageSquare, title: '1. Consult', text: 'We understand your needs and project requirements.' },
  { icon: ClipboardList, title: '2. Plan', text: 'We provide expert advice and develop tailored solutions.' },
  { icon: Wrench, title: '3. Install', text: 'Our skilled team installs with precision and attention to detail.' },
  { icon: Search, title: '4. Inspect', text: 'We conduct thorough quality checks to ensure everything is perfect.' },
  { icon: ClipboardCheck, title: '5. Handover', text: 'We hand over a finished project you can be proud of.' },
];

const sharedStrengths = [
  { icon: MessageSquare, title: '1. Contact Us', text: 'Get in touch with our team to discuss your project requirements, timeline, and site details.' },
  { icon: ClipboardList, title: '2. Send Us Your Drawings', text: 'Email us your plans, drawings, or project specifications so we can review the scope of work.' },
  { icon: ClipboardCheck, title: '3. Quote & Planning', text: 'We provide a clear quotation, confirm materials, labour requirements, and organise scheduling for the project.' },
  { icon: Wrench, title: '4. Start Construction', text: 'Our team arrives on site and completes the plastering work safely, efficiently, and on schedule.' },
  { icon: CheckCircle2, title: '5. Completion & Handover', text: 'Final checks are completed to ensure quality finishes and the project is delivered ready for handover.' },
];

export const serviceDetails = {
  commercial: {
    title: 'Commercial',
    heroText: 'Commercial ceilings, partitions and plastering services delivered with precision for professional spaces.',
    introText: 'We specialise in commercial plastering for shopping centres, retail stores, offices, warehouses, apartments, and large scale projects across all Brisbane.',
    heroImage: '/assets/project-fitout.png',
    mainImage: '/assets/about-finished-fitout.png',
    solutionsTitle: 'Commercial Solutions',
    systemsHeading: 'Commercial Services\nWe Provide',
    systemsText: 'We support commercial projects with practical plastering systems built for durability, compliance and presentation.',
    projectHeading: 'Projects Using Our Commercial Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: Grid3X3, title: 'Ceilings', text: 'Suspended, grid and feature ceiling systems for commercial interiors.' },
      { icon: SquareStack, title: 'Partitions', text: 'Metal stud, plasterboard and glass partitions for functional spaces.' },
      { icon: Layers3, title: 'Linings', text: 'Clean wall and interior linings ready for final finishes.' },
      { icon: PanelsTopLeft, title: 'Fit-Out Support', text: 'Coordinated plastering works for complete commercial fit-outs.' },
    ],
  },
  education: {
    title: 'Education',
    heroText: 'Specialist ceilings, partitions and plastering services for schools and education facilities.',
    introText: 'We install safe and durable ceiling and partition systems for schools, childcare centres, and education facilities, meeting all compliance requirements.',
    heroImage: '/assets/about-construction-progress.png',
    mainImage: '/assets/project-partition.png',
    solutionsTitle: 'Education Solutions',
    systemsHeading: 'Education Services\nWe Provide',
    systemsText: 'We deliver education spaces with strong, maintainable systems suitable for high-use environments.',
    projectHeading: 'Projects Using Our Education Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: Grid3X3, title: 'Classroom Ceilings', text: 'Ceiling systems designed for practical learning environments.' },
      { icon: SquareStack, title: 'Learning Area Partitions', text: 'Partitions that define classrooms, offices and shared areas.' },
      { icon: PanelsTopLeft, title: 'Acoustic Treatments', text: 'Systems that support comfort and sound control.' },
      { icon: ShieldCheck, title: 'Safe Site Delivery', text: 'Careful sequencing for active or staged education projects.' },
    ],
  },
  'medical-center': {
    title: 'Medical Center',
    heroText: 'High-quality plastering and interior construction for medical and healthcare spaces.',
    introText: 'We deliver clean, precise, and hygienic finishes for medical centres, clinics, and healthcare spaces with minimal disruption.',
    heroImage: '/assets/about-finished-fitout.png',
    mainImage: '/assets/about-interior.png',
    solutionsTitle: 'Medical Center Solutions',
    systemsHeading: 'Medical Center Services\nWe Provide',
    systemsText: 'We build healthcare interiors with attention to safety, durability and professional presentation.',
    projectHeading: 'Projects Using Our Medical Center Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: PanelsTopLeft, title: 'Treatment Room Partitions', text: 'Functional partitions for consult, treatment and support rooms.' },
      { icon: Grid3X3, title: 'Ceiling Systems', text: 'Ceiling systems coordinated around lighting, services and access.' },
      { icon: Layers3, title: 'Wall Linings', text: 'Clean linings for durable and professional medical interiors.' },
      { icon: ShieldCheck, title: 'Quality Finishes', text: 'Reliable finishes suitable for high-use healthcare settings.' },
    ],
  },
  'external-cladding': {
    title: 'External Cladding',
    heroText: 'External cladding works delivered with durable materials, clean detailing and dependable workmanship.',
    introText: 'We install external FC and cladding systems for commercial buildings, ensuring durability, weather resistance, and a professional finish.',
    heroImage: '/assets/about-cta-ceiling-grid.png',
    mainImage: '/assets/about-construction-progress.png',
    solutionsTitle: 'External Cladding Solutions',
    systemsHeading: 'External Cladding\nWe Provide',
    systemsText: 'We deliver cladding works with practical detailing, durable materials and consistent finish quality.',
    projectHeading: 'Projects Using Our External Cladding Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: PanelsTopLeft, title: 'Facade Cladding', text: 'External cladding systems for commercial and residential facades.' },
      { icon: Layers3, title: 'Sheeting Systems', text: 'Durable sheeting installed with clean, consistent detailing.' },
      { icon: ShieldCheck, title: 'Weather Protection', text: 'Cladding solutions selected for performance and longevity.' },
      { icon: Wrench, title: 'Installation Works', text: 'Carefully managed installation by experienced trades.' },
    ],
  },
  ceilings: {
    title: 'Ceilings',
    heroText: 'High-quality ceiling solutions tailored to your project. Built with precision, installed with care.',
    introText: 'We deliver a wide range of ceiling systems for commercial, industrial and residential projects. From concept to completion, our team ensures a flawless finish that combines functionality, durability and aesthetic appeal.',
    heroImage: '/assets/about-partition-framing.png',
    mainImage: '/assets/about-finished-fitout.png',
    solutionsTitle: 'Ceiling Solutions',
    systemsHeading: 'Ceiling Solutions\nWe Provide',
    systemsText: 'We install a variety of ceiling systems to suit different functional requirements and design goals.',
    projectHeading: 'Projects Using Our Ceiling Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: Grid3X3, title: 'Suspended Ceilings', text: 'Versatile and cost-effective ceiling solutions for commercial and industrial spaces.' },
      { icon: TableCellsSplit, title: 'Grid Ceilings', text: 'Exposed grid systems that offer easy access to services and modern aesthetics.' },
      { icon: PanelsTopLeft, title: 'Acoustic Ceilings', text: 'Designed to improve sound absorption and create more comfortable environments.' },
      { icon: StretchHorizontal, title: 'Feature Ceilings', text: 'Custom ceiling designs that enhance the look and feel of your space.' },
    ],
  },
  partitions: {
    title: 'Partitions',
    heroText: 'Durable partition systems that shape practical, polished and flexible interior spaces.',
    introText: 'We design and install partition systems for commercial, retail and workplace environments. Our team delivers clean lines, strong framing and reliable finishes that support privacy, flow and long-term performance.',
    heroImage: '/assets/about-partition-framing.png',
    mainImage: '/assets/project-partition.png',
    solutionsTitle: 'Partition Solutions',
    systemsHeading: 'Partition Systems\nWe Provide',
    systemsText: 'We build partition systems that balance durability, acoustics, compliance and modern interior design.',
    projectHeading: 'Projects Using Our Partition Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: SquareStack, title: 'Metal Stud Partitions', text: 'Strong framing systems for offices, retail spaces and commercial interiors.' },
      { icon: TableCellsSplit, title: 'Glass Partitions', text: 'Modern glazed partitions that improve openness while defining usable zones.' },
      { icon: PanelsTopLeft, title: 'Acoustic Partitions', text: 'Partition systems designed to reduce sound transfer and improve comfort.' },
      { icon: ShieldCheck, title: 'Fire-Rated Walls', text: 'Compliant wall systems for safety-focused commercial and industrial projects.' },
    ],
  },
  linings: {
    title: 'Linings',
    heroText: 'Professional wall and interior linings installed for clean finishes and dependable performance.',
    introText: 'Our lining services cover walls, columns, shafts and interior surfaces that require precision, durability and a high-quality finish. We work with trusted systems to suit the needs of each project.',
    heroImage: '/assets/about-construction-progress.png',
    mainImage: '/assets/project-fitout.png',
    solutionsTitle: 'Lining Solutions',
    systemsHeading: 'Lining Systems\nWe Provide',
    systemsText: 'We install lining systems for functional, compliant and visually refined interior spaces.',
    projectHeading: 'Projects Using Our Lining Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: Layers3, title: 'Wall Linings', text: 'Smooth plasterboard linings for commercial and residential interiors.' },
      { icon: SquareStack, title: 'Shaft Linings', text: 'Specialised systems for service shafts, lift cores and concealed areas.' },
      { icon: ShieldCheck, title: 'Fire-Rated Linings', text: 'Performance linings designed for compliance and long-term protection.' },
      { icon: PanelsTopLeft, title: 'Acoustic Linings', text: 'Lining systems that help improve sound control and interior comfort.' },
    ],
  },
  renovations: {
    title: 'Renovations',
    heroText: 'Carefully managed renovation works that refresh existing spaces with minimal disruption.',
    introText: 'We upgrade and reconfigure existing spaces with new ceilings and partition walls, ideal for refurbishments, tenancy changes, and interior improvements.',
    heroImage: '/assets/about-cta-ceiling-grid.png',
    mainImage: '/assets/project-renovation.png',
    solutionsTitle: 'Renovation Solutions',
    systemsHeading: 'Renovation Works\nWe Provide',
    systemsText: 'We support renovation projects with practical planning, clean execution and dependable finishing trades.',
    projectHeading: 'Projects Using Our Renovation Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: PaintRoller, title: 'Interior Refurbishment', text: 'Refresh existing spaces with updated ceilings, walls and finishes.' },
      { icon: Wrench, title: 'Ceiling Upgrades', text: 'Replace or improve existing ceilings with minimal operational disruption.' },
      { icon: SquareStack, title: 'Layout Reworks', text: 'Reconfigure interiors with new partitions, linings and functional zones.' },
      { icon: CheckCircle2, title: 'Make-Good Works', text: 'Restore tenancies and commercial spaces to required handover standards.' },
    ],
  },
  'fit-outs': {
    title: 'Fit-Outs',
    heroText: 'Complete interior fit-out support for commercial spaces that need quality, speed and detail.',
    introText: 'We deliver fit-out works across offices, retail spaces, healthcare, education and commercial environments. Our team coordinates ceilings, partitions and linings to create polished, functional spaces.',
    heroImage: '/assets/about-finished-fitout.png',
    mainImage: '/assets/about-interior.png',
    solutionsTitle: 'Fit-Out Solutions',
    systemsHeading: 'Fit-Out Services\nWe Provide',
    systemsText: 'We combine interior construction systems to deliver complete, practical and well-finished spaces.',
    projectHeading: 'Projects Using Our Fit-Out Solutions',
    strengths: sharedStrengths,
    systems: [
      { icon: PanelsTopLeft, title: 'Commercial Fit-Outs', text: 'Interior construction for workplaces, showrooms and commercial environments.' },
      { icon: Grid3X3, title: 'Ceiling Systems', text: 'Integrated ceiling systems designed around lighting, services and use.' },
      { icon: SquareStack, title: 'Partitions', text: 'Functional partitions that create offices, rooms and operational zones.' },
      { icon: Layers3, title: 'Linings & Finishes', text: 'Clean interior linings and finishes that complete the fit-out.' },
    ],
  },
};

const getProjectVisibleCount = () => (window.matchMedia('(max-width: 680px)').matches ? 1 : 3);

export default function ServiceDetailPage({ slug = 'ceilings' }) {
  const service = serviceDetails[slug] ?? serviceDetails.commercial;
  const serviceProjects = siteProjects.filter((project) => project.serviceSlug === slug);
  return <ServiceDetailTemplate service={{ ...service, process, projects: serviceProjects.length ? serviceProjects : siteProjects }} />;
}

function ServiceDetailTemplate({ service }) {
  return (
    <>
      <section className={styles.banner} style={{ '--service-hero-image': `url("${service.heroImage}")` }}>
        <SiteHeader active="Our Services" compact />
        <div className={styles.bannerInner}>
          <h1>OUR SERVICES</h1>
          <p className={styles.breadcrumb}>
            <a href="/">Home</a>
            <ChevronRight size={13} />
            <a href="/services">Our Services</a>
            <ChevronRight size={13} />
            <strong>{service.title}</strong>
          </p>
          <p className={styles.bannerCopy}>{service.heroText}</p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introCopy}>
          <p className={styles.kicker}>OUR SERVICE</p>
          <h2>{service.title}</h2>
          <p className={styles.bodyText}>{service.introText}</p>
          <div className={styles.strengthList}>
            {service.strengths.map(({ icon: Icon, title, text }) => (
              <article className={styles.strengthItem} key={title}>
                <span><Icon size={27} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <ButtonLink href="/contact-us" size="small">GET A FREE QUOTE <ArrowRight size={15} /></ButtonLink>
        </div>
        <img className={styles.mainImage} src={service.mainImage} alt={`${service.title} service example`} />
      </section>

      <section className={styles.systemBand}>
        <div className={styles.systems}>
          <div className={styles.systemHeading}>
            <div>
              <p className={styles.kicker}>SYSTEMS WE INSTALL</p>
              <h2>{service.systemsHeading.split('\n').map((line) => <span key={line}>{line}</span>)}</h2>
            </div>
            <p>{service.systemsText}</p>
          </div>
          <div className={styles.systemGrid}>
            {service.systems.map(({ icon: Icon, title, text }) => (
              <article className={styles.systemCard} key={title}>
                <Icon size={46} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectCarousel heading={service.projectHeading} projects={service.projects} />

      <section className={styles.processBand}>
        <div className={styles.process}>
          <p className={styles.kicker}>OUR PROCESS</p>
          <h2>How We Work</h2>
          <div className={styles.processGrid}>
            {service.process.map(({ icon: Icon, title, text }, index) => (
              <article className={styles.processItem} key={title}>
                <Icon size={34} />
                <h3>{title}</h3>
                <p>{text}</p>
                {index < service.process.length - 1 && <ChevronRight className={styles.processArrow} size={18} />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>Ready to discuss your project?</h2>
          <p>Get in touch with our team today for expert advice and a free, no-obligation quote.</p>
        </div>
        <ButtonLink href="/contact-us">GET A FREE QUOTE <ArrowRight size={17} /></ButtonLink>
      </section>

      <Footer />
    </>
  );
}

function ProjectCarousel({ heading, projects }) {
  const [activePage, setActivePage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getProjectVisibleCount);
  const galleryRef = useRef(null);
  const isMobile = visibleCount === 1;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 680px)');
    const handleChange = () => {
      setVisibleCount(getProjectVisibleCount());
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
  }, [projects, visibleCount]);

  const activeProjects = pages[activePage] ?? pages[0] ?? [];

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
    <section className={styles.projects}>
      <div className={styles.sectionHead}>
        <div>
          <p className={styles.kicker}>FEATURED PROJECTS</p>
          <h2>{heading}</h2>
        </div>
        <div className={styles.arrows}>
          <button aria-label="Previous project" onClick={goToPrevious} type="button"><ArrowLeft size={18} /></button>
          <button aria-label="Next project" onClick={goToNext} type="button"><ArrowRight size={18} /></button>
        </div>
      </div>
      <div className={styles.projectSlider}>
        <div className={styles.projectGrid} onScroll={handleMobileScroll} ref={galleryRef}>
          {(isMobile ? projects : activeProjects).map((project) => (
            <a className={styles.projectCard} href={project.href} key={`${isMobile ? 'mobile' : activePage}-${project.title}`}>
              <img src={project.image} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.dots} aria-label="Featured project pagination">
          {pages.map((page, index) => (
            <button
              aria-current={activePage === index ? 'true' : undefined}
              aria-label={`Show project group ${index + 1}`}
              className={activePage === index ? styles.currentDot : ''}
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
