import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Grid3X3,
  MapPin,
  Maximize2,
  UsersRound,
} from 'lucide-react';
import ButtonLink from '../components/ButtonLink.jsx';
import Footer from '../components/Footer.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import styles from './ProjectDetailPage.module.css';

const makeProject = ({ title, heroText, heroImage, overview, mainImage, gallery, location, date, scope, type, size }) => ({
  title,
  heroText,
  heroImage,
  overview,
  mainImage,
  gallery,
  details: [
    { icon: MapPin, label: 'Location', value: location },
    { icon: CalendarDays, label: 'Completion Date', value: date },
    { icon: Grid3X3, label: 'Scope of Work', value: scope },
    { icon: UsersRound, label: 'Project Type', value: type },
    { icon: Maximize2, label: 'Size', value: size },
  ],
});

export const projectDetails = {
  'noosa-civic-shopping-centre': makeProject({
    title: 'Noosa Civic Shopping Centre',
    heroText: 'Shopping centre refurbishment and retail fit-out works delivered for a busy commercial environment.',
    heroImage: '/assets/project-noosa-1.jpg',
    overview: 'We deliver shopping centre refurbishments and retail fit-outs, including walls, ceilings, bulkheads, patching, setting and finishing. Our team works efficiently and cleanly to keep busy commercial sites running safely and on schedule.',
    mainImage: '/assets/project-noosa-2.jpg',
    gallery: [
      '/assets/project-noosa-1.jpg',
      '/assets/project-noosa-3.jpg',
      '/assets/project-noosa-4.jpg',
      '/assets/project-noosa-5.jpg',
      '/assets/project-noosa-6.jpg',
      '/assets/project-noosa-7.jpg',
      '/assets/project-noosa-8.jpg',
    ],
    location: 'Noosa, QLD',
    date: '2024',
    scope: 'Walls, Ceilings, Bulkheads, Patching, Setting, Finishing',
    type: 'Commercial',
    size: 'Shopping Centre Refurbishment',
  }),
  'beauty-brow-thread': makeProject({
    title: 'Beauty Brow & Thread',
    heroText: 'Plastering and ceiling works completed for a modern beauty salon fit-out.',
    heroImage: '/assets/project-beauty-brow-1.jpg',
    overview: 'We completed plastering and ceiling works for this beauty salon fit-out, delivering clean finishes and a modern commercial interior ready for handover.',
    mainImage: '/assets/project-beauty-brow-2.jpg',
    gallery: [
      '/assets/project-beauty-brow-1.jpg',
      '/assets/project-beauty-brow-3.jpg',
      '/assets/project-beauty-brow-4.jpg',
    ],
    location: 'Brisbane, QLD',
    date: '2024',
    scope: 'Plastering, Ceiling Works, Setting, Finishing',
    type: 'Renovations',
    size: 'Beauty Salon Fit-Out',
  }),
  'emf-performance-centre-gym-fit-out': makeProject({
    title: 'EMF Performance Centre - Gym Fit-Out',
    heroText: 'Full gym fit-out works delivered from steel framing through to sanding and finishing.',
    heroImage: '/assets/project-emf-1.png',
    overview: 'We complete full gym fit-outs from steel framing all the way through to sanding and finishing. Our team installs framing, partitions, ceilings, and plasterboard, then completes setting and sanding to deliver a clean, ready-to-use commercial space.',
    mainImage: '/assets/project-emf-2.jpg',
    gallery: [
      '/assets/project-emf-1.png',
      '/assets/project-emf-3.jpg',
      '/assets/project-emf-4.jpg',
      '/assets/project-emf-5.jpg',
      '/assets/project-emf-6.jpg',
      '/assets/project-emf-7.jpg',
      '/assets/project-emf-8.jpg',
      '/assets/project-emf-9.jpg',
      '/assets/project-emf-10.jpg',
      '/assets/project-emf-11.jpg',
      '/assets/project-emf-12.jpg',
      '/assets/project-emf-13.jpg',
      '/assets/project-emf-14.jpg',
      '/assets/project-emf-15.jpg',
    ],
    location: 'Brisbane, QLD',
    date: '2024',
    scope: 'Steel Framing, Partitions, Ceilings, Plasterboard, Setting, Sanding',
    type: 'Commercial',
    size: 'Gym Fit-Out',
  }),
  'westfield-shopping-centre-chermside-night-works': makeProject({
    title: 'Westfield Shopping Centre Chermside - Shopping Centre Night Works',
    heroText: 'Shopping centre night works delivered after hours to minimise disruption to trading.',
    heroImage: '/assets/project-westfield-1.jpg',
    overview: 'We specialise in night shift works in shopping centres to minimise disruption to trading hours. Our team carries out plastering, ceilings, partitions, patching, and fit-out works after hours, ensuring safe, clean, and efficient delivery while stores remain open during the day.',
    mainImage: '/assets/project-westfield-2.jpg',
    gallery: [
      '/assets/project-westfield-1.jpg',
      '/assets/project-westfield-3.jpg',
      '/assets/project-westfield-4.jpg',
      '/assets/project-westfield-5.jpg',
      '/assets/project-westfield-6.jpg',
      '/assets/project-westfield-7.jpg',
      '/assets/project-westfield-8.jpg',
      '/assets/project-westfield-9.jpg',
      '/assets/project-westfield-10.jpg',
    ],
    location: 'Chermside, QLD',
    date: '2024',
    scope: 'Plastering, Ceilings, Partitions, Patching, Fit-Out Works',
    type: 'Commercial',
    size: 'Shopping Centre Night Works',
  }),
  'sash-specialist-emergency-vets-gold-coast': makeProject({
    title: 'SASH - Specialist & 24/7 Emergency Vets (Gold Coast)',
    heroText: 'Framing, plasterboard installation, and setting works delivered for a specialist veterinary facility.',
    heroImage: '/assets/project-sash-1.jpg',
    overview: 'We completed framing, plasterboard installation, and setting/sanding works for this specialist veterinary facility. All works were carried out to a high commercial standard, delivering clean, durable finishes suitable for a medical environment with strict requirements.',
    mainImage: '/assets/project-sash-2.jpg',
    gallery: [
      '/assets/project-sash-1.jpg',
      '/assets/project-sash-3.jpg',
      '/assets/project-sash-4.jpg',
      '/assets/project-sash-5.jpg',
      '/assets/project-sash-6.jpg',
      '/assets/project-sash-7.jpg',
      '/assets/project-sash-8.jpg',
      '/assets/project-sash-9.jpg',
      '/assets/project-sash-10.jpg',
    ],
    location: 'Gold Coast, QLD',
    date: '2024',
    scope: 'Framing, Plasterboard Installation, Setting, Sanding',
    type: 'Commercial',
    size: 'Specialist Veterinary Facility',
  }),
  'aurizon-renovation': makeProject({
    title: 'Aurizon Renovation',
    heroText: 'A full office refurbishment delivered in Rockhampton for a railway company.',
    heroImage: '/assets/project-aurizon-1.jpg',
    overview: 'Our team travelled from Brisbane to Rockhampton to complete a full office refurbishment for the railway company. We carried out plasterboard installation, and setting/sanding works, delivering a clean and professional commercial finish suitable for office use.',
    mainImage: '/assets/project-aurizon-2.jpg',
    gallery: [
      '/assets/project-aurizon-1.jpg',
      '/assets/project-aurizon-3.jpg',
      '/assets/project-aurizon-4.jpg',
      '/assets/project-aurizon-5.jpg',
      '/assets/project-aurizon-6.jpg',
      '/assets/project-aurizon-7.jpg',
      '/assets/project-aurizon-8.jpg',
      '/assets/project-aurizon-9.jpg',
      '/assets/project-aurizon-10.jpg',
      '/assets/project-aurizon-11.jpg',
      '/assets/project-aurizon-12.jpg',
      '/assets/project-aurizon-13.jpg',
      '/assets/project-aurizon-14.jpg',
      '/assets/project-aurizon-15.jpg',
      '/assets/project-aurizon-16.jpg',
      '/assets/project-aurizon-17.jpg',
    ],
    location: 'Rockhampton, QLD',
    date: '2024',
    scope: 'Plasterboard Installation, Setting, Sanding',
    type: 'Renovations',
    size: 'Office Refurbishment',
  }),
  'calvary-christian-college-refurbishment': makeProject({
    title: 'Calvary Christian College - Refurbishment',
    heroText: 'An education refurbishment delivered with safe, durable, high-quality learning spaces.',
    heroImage: '/assets/project-calvary-1.jpg',
    overview: 'We completed refurbishment works at Calvary Christian College, including framing, plasterboard installation, and setting/sanding. The project was delivered with a clean, durable finish suitable for an education environment, ensuring safe and high-quality learning spaces.',
    mainImage: '/assets/project-calvary-2.jpg',
    gallery: [
      '/assets/project-calvary-1.jpg',
      '/assets/project-calvary-3.jpg',
      '/assets/project-calvary-4.jpg',
      '/assets/project-calvary-5.jpg',
      '/assets/project-calvary-6.jpg',
      '/assets/project-calvary-7.jpg',
      '/assets/project-calvary-8.jpg',
      '/assets/project-calvary-9.jpg',
      '/assets/project-calvary-10.jpg',
    ],
    location: 'Calvary Christian College',
    date: '2024',
    scope: 'Framing, Plasterboard Installation, Setting, Sanding',
    type: 'Renovations',
    size: 'Education Refurbishment',
  }),
  'kings-christian-college': makeProject({
    title: "King's Christian College",
    heroText: 'Education fit-out works delivered with practical ceiling, wall lining and service coordination.',
    heroImage: '/assets/project-kings-christian-college-1.jpg',
    overview: 'We completed education fit-out works at King\'s Christian College, including plasterboard linings, acoustic ceiling works, service openings, setting, and finishing. The works were delivered with clean detailing and durable finishes suited to a busy learning environment.',
    mainImage: '/assets/project-kings-christian-college-2.jpg',
    gallery: [
      '/assets/project-kings-christian-college-1.jpg',
      '/assets/project-kings-christian-college-3.jpg',
      '/assets/project-kings-christian-college-4.jpg',
      '/assets/project-kings-christian-college-5.jpg',
      '/assets/project-kings-christian-college-6.jpg',
      '/assets/project-kings-christian-college-7.jpg',
      '/assets/project-kings-christian-college-8.jpg',
    ],
    location: "King's Christian College",
    date: '2024',
    scope: 'Plasterboard Linings, Acoustic Ceilings, Service Openings, Setting, Finishing',
    type: 'Education',
    size: 'Education Fit-Out',
  }),
  'griffith-university-brisbane-south-nathan-campus-n39': makeProject({
    title: 'Griffith University, Brisbane South (Nathan) Campus N39',
    heroText: 'Education refurbishment works delivered for Griffith University at the Nathan Campus N39 building.',
    heroImage: '/assets/project-griffith-university-n39-1.jpg',
    overview: 'We completed education refurbishment works at Griffith University, Brisbane South (Nathan) Campus N39. The works included plasterboard linings, ceiling framing, ceiling sheeting, setting, and service coordination to support durable, practical campus learning spaces.',
    mainImage: '/assets/project-griffith-university-n39-2.jpg',
    gallery: [
      '/assets/project-griffith-university-n39-1.jpg',
      '/assets/project-griffith-university-n39-3.png',
      '/assets/project-griffith-university-n39-4.png',
      '/assets/project-griffith-university-n39-5.png',
    ],
    location: 'Nathan, QLD',
    date: '2024',
    scope: 'Plasterboard Linings, Ceiling Framing, Ceiling Sheeting, Setting, Service Coordination',
    type: 'Education',
    size: 'Campus Refurbishment',
  }),
  'springfield-lakes-state-school': makeProject({
    title: 'Springfield Lakes State School',
    heroText: 'Education refurbishment works delivered for a state school learning environment.',
    heroImage: '/assets/project-springfield-lakes-state-school-1.jpg',
    overview: 'We completed education refurbishment works at Springfield Lakes State School, including framing, plasterboard installation, ceiling works, linings, setting, and finishing. The works were coordinated around existing services to create durable and practical learning spaces.',
    mainImage: '/assets/project-springfield-lakes-state-school-2.jpg',
    gallery: [
      '/assets/project-springfield-lakes-state-school-1.jpg',
      '/assets/project-springfield-lakes-state-school-3.jpg',
      '/assets/project-springfield-lakes-state-school-4.jpg',
      '/assets/project-springfield-lakes-state-school-5.jpg',
      '/assets/project-springfield-lakes-state-school-6.jpg',
      '/assets/project-springfield-lakes-state-school-7.jpg',
      '/assets/project-springfield-lakes-state-school-8.jpg',
      '/assets/project-springfield-lakes-state-school-9.jpg',
    ],
    location: 'Springfield Lakes, QLD',
    date: '2024',
    scope: 'Framing, Plasterboard Installation, Ceiling Works, Linings, Setting, Finishing',
    type: 'Education',
    size: 'School Refurbishment',
  }),
  'all-hallows-school': makeProject({
    title: "All Hallows' School",
    heroText: 'Education fit-out and refurbishment works delivered with detailed ceiling and wall lining coordination.',
    heroImage: '/assets/project-all-hallows-school-1.jpg',
    overview: 'We completed education refurbishment works at All Hallows\' School, including curved ceiling features, acoustic ceiling linings, plasterboard installation, column linings, partitions, setting, and finishing. The works were coordinated around services and staged construction areas to support a durable school environment.',
    mainImage: '/assets/project-all-hallows-school-2.jpg',
    gallery: [
      '/assets/project-all-hallows-school-1.jpg',
      '/assets/project-all-hallows-school-3.jpg',
      '/assets/project-all-hallows-school-4.jpg',
      '/assets/project-all-hallows-school-5.jpg',
      '/assets/project-all-hallows-school-6.jpg',
      '/assets/project-all-hallows-school-7.jpg',
      '/assets/project-all-hallows-school-8.jpg',
      '/assets/project-all-hallows-school-9.jpg',
      '/assets/project-all-hallows-school-10.jpg',
      '/assets/project-all-hallows-school-11.jpg',
      '/assets/project-all-hallows-school-12.jpg',
      '/assets/project-all-hallows-school-13.jpg',
    ],
    location: 'Brisbane, QLD',
    date: '2024',
    scope: 'Curved Ceiling Features, Acoustic Ceilings, Plasterboard Installation, Column Linings, Partitions, Setting, Finishing',
    type: 'Education',
    size: 'School Refurbishment',
  }),
  'seasons-sinnamon-park': makeProject({
    title: 'Seasons Sinnamon Park',
    heroText: 'Medical centre framing and lining works delivered with careful service and access coordination.',
    heroImage: '/assets/project-seasons-sinnamon-park-1.jpg',
    overview: 'We completed medical centre construction works at Seasons Sinnamon Park, including steel framing, plasterboard installation, external and internal wall linings, access coordination, and fit-out support. The works were delivered with durable detailing suited to a healthcare environment.',
    mainImage: '/assets/project-seasons-sinnamon-park-2.jpg',
    gallery: [
      '/assets/project-seasons-sinnamon-park-1.jpg',
      '/assets/project-seasons-sinnamon-park-3.jpg',
      '/assets/project-seasons-sinnamon-park-4.jpg',
    ],
    location: 'Sinnamon Park, QLD',
    date: '2024',
    scope: 'Steel Framing, Plasterboard Installation, Wall Linings, Access Coordination, Fit-Out Support',
    type: 'Medical Centre',
    size: 'Healthcare Fit-Out',
  }),
  'new-build-shopping-centre-at-graf-drive': makeProject({
    title: 'New Build Shopping Centre at Graf Drive',
    heroText: 'External cladding and soffit lining works delivered for a new shopping centre build.',
    heroImage: '/assets/project-graf-drive-shopping-centre-1.jpg',
    overview: 'We completed external cladding and soffit lining works for this new build shopping centre at Graf Drive. The works included fibre cement sheeting, exterior soffit linings, framing coordination, ceiling linings, access equipment coordination, and finishing support across the new retail build.',
    mainImage: '/assets/project-graf-drive-shopping-centre-2.jpg',
    gallery: [
      '/assets/project-graf-drive-shopping-centre-1.jpg',
      '/assets/project-graf-drive-shopping-centre-3.jpg',
      '/assets/project-graf-drive-shopping-centre-4.jpg',
      '/assets/project-graf-drive-shopping-centre-5.jpg',
      '/assets/project-graf-drive-shopping-centre-6.jpg',
      '/assets/project-graf-drive-shopping-centre-7.jpg',
      '/assets/project-graf-drive-shopping-centre-8.jpg',
    ],
    location: 'Graf Drive, QLD',
    date: '2024',
    scope: 'External Cladding, Fibre Cement Sheeting, Soffit Linings, Framing Coordination, Ceiling Linings',
    type: 'External Cladding',
    size: 'New Build Shopping Centre',
  }),
  'shopping-centre-fc-install': makeProject({
    title: 'Shopping Centre FC Install',
    heroText: 'FC cladding installation works delivered for a shopping centre external facade and roofline areas.',
    heroImage: '/assets/project-shopping-centre-fc-install-1.jpg',
    overview: 'We completed shopping centre FC installation works, including fibre cement cladding, external wall sheeting, roofline and parapet linings, service coordination, and finishing support. The works were delivered with clean joint detailing and durable exterior finishes.',
    mainImage: '/assets/project-shopping-centre-fc-install-2.jpg',
    gallery: [
      '/assets/project-shopping-centre-fc-install-1.jpg',
      '/assets/project-shopping-centre-fc-install-3.jpg',
      '/assets/project-shopping-centre-fc-install-4.jpg',
      '/assets/project-shopping-centre-fc-install-5.jpg',
    ],
    location: 'Brisbane, QLD',
    date: '2024',
    scope: 'FC Cladding, External Wall Sheeting, Roofline Linings, Service Coordination, Finishing Support',
    type: 'External Cladding',
    size: 'Shopping Centre FC Install',
  }),
};

export default function ProjectDetailPage({ slug = 'noosa-civic-shopping-centre' }) {
  const project = projectDetails[slug] ?? projectDetails['noosa-civic-shopping-centre'];

  return (
    <>
      <section className={styles.banner} style={{ '--project-hero-image': `url("${project.heroImage}")` }}>
        <SiteHeader active="Our Projects" compact />
        <div className={styles.bannerInner}>
          <p className={styles.breadcrumb}>
            <a href="/">Home</a>
            <ChevronRight size={13} />
            <a href="/#our-projects">Our Projects</a>
            <ChevronRight size={13} />
            <strong>{project.title}</strong>
          </p>
          <h1>{project.title}</h1>
          <p className={styles.heroText}>{project.heroText}</p>
        </div>
      </section>

      <section className={styles.overview}>
        <aside className={styles.copy}>
          <p className={styles.kicker}>PROJECT OVERVIEW</p>
          <p className={styles.bodyText}>{project.overview}</p>
          <div className={styles.detailList}>
            {project.details.map(({ icon: Icon, label, value }) => (
              <article className={styles.detailItem} key={label}>
                <span><Icon size={26} /></span>
                <div>
                  <h2>{label}</h2>
                  <p>{value}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
        <img className={styles.mainImage} src={project.mainImage} alt={`${project.title} main view`} />
      </section>

      <section className={styles.gallery} aria-label={`${project.title} gallery`}>
        {project.gallery.map((image, index) => (
          <img src={image} alt={`${project.title} gallery ${index + 1}`} key={`${image}-${index}`} loading="lazy" />
        ))}
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
