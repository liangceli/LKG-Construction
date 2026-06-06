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
    location: 'Noosa Civic',
    date: '2026',
    scope: 'Plastering, Ceilings, Bulkheads, Setting, Patching, Finishing',
    type: 'Commercial',
    size: 'Shopping Centre',
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
    location: 'Bethania',
    date: '2024',
    scope: 'Steel Framing, Partitions, Ceilings, Plasterboard, Setting, Sanding',
    type: 'Commercial',
    size: 'Shopping Centre',
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
    location: 'Chermside',
    date: '2025',
    scope: 'Plastering, Ceilings, Partitions, Patching, Fit-Out Works',
    type: 'Commercial',
    size: 'Shopping Centre',
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
    location: 'Gold Coast',
    date: '2024',
    scope: 'Framing, Plasterboard Installation, Setting, Sanding',
    type: 'Commercial',
    size: 'Vets',
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
    location: 'Rockhampton',
    date: '2025',
    scope: 'Plasterboard Installation, Setting, Sanding',
    type: 'Renovation',
    size: 'Railway Company',
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
    location: 'Carbrook',
    date: '2025',
    scope: 'Framing, Plasterboard Installation, Setting, Sanding',
    type: 'Renovation',
    size: 'Calvary Christian College',
  }),
  'kings-christian-college': makeProject({
    title: "King's Christian College",
    heroText: 'Education fit-out works delivered with practical ceiling, wall lining and service coordination.',
    heroImage: '/assets/project-kings-christian-college-1.jpg',
    overview: 'For this school project, we successfully completed the plasterboard installation and finishing works, delivering the project on schedule. The scope included custom curved perforated plasterboard features, which were installed and finished to a high standard while meeting all project deadlines.',
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
    location: 'Pimpama',
    date: '2025',
    scope: 'Plasterboard Installation, Curved Perforated Features, Setting, Finishing',
    type: 'Education',
    size: "King's Christian College",
  }),
  'griffith-university-brisbane-south-nathan-campus-n39': makeProject({
    title: 'Griffith University, Brisbane South (Nathan) Campus N39',
    heroText: 'Education refurbishment works delivered for Griffith University at the Nathan Campus N39 building.',
    heroImage: '/assets/project-griffith-university-n39-1.jpg',
    overview: 'We completed the plasterboard installation, setting, and finishing works for the refurbishment of Griffith University student accommodation. The project was delivered on time, with all works completed to a high standard of quality and craftsmanship.',
    mainImage: '/assets/project-griffith-university-n39-2.jpg',
    gallery: [
      '/assets/project-griffith-university-n39-1.jpg',
      '/assets/project-griffith-university-n39-3.png',
      '/assets/project-griffith-university-n39-4.png',
      '/assets/project-griffith-university-n39-5.png',
    ],
    location: 'Brisbane South (Nathan)',
    date: '2026',
    scope: 'Plasterboard Installation, Setting, Finishing',
    type: 'Education',
    size: 'Griffith University',
  }),
  'springfield-lakes-state-school': makeProject({
    title: 'Springfield Lakes State School',
    heroText: 'Education refurbishment works delivered for a state school learning environment.',
    heroImage: '/assets/project-springfield-lakes-state-school-1.jpg',
    overview: 'We were engaged to undertake the plasterboard installation, setting, and finishing works for Springfield Lakes State School. Our team delivered the project on time, maintaining high standards of workmanship and ensuring all wall and ceiling systems met project specifications.',
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
    location: 'Springfield Lakes',
    date: '2025',
    scope: 'Plasterboard Installation, Wall Systems, Ceiling Systems, Setting, Finishing',
    type: 'Education',
    size: 'Springfield Lakes State School',
  }),
  'all-hallows-school': makeProject({
    title: "All Hallows' School",
    heroText: 'Education fit-out and refurbishment works delivered with detailed ceiling and wall lining coordination.',
    heroImage: '/assets/project-all-hallows-school-1.jpg',
    overview: 'This school project involved the installation and finishing of plasterboard systems, including complex curved perforated ceiling and wall features. Our team delivered all works on time, maintaining a high level of craftsmanship and quality throughout the project.',
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
    location: '547 Ann St, Brisbane City QLD 4000',
    date: '2026',
    scope: 'Plasterboard Systems, Curved Perforated Ceilings, Wall Features, Finishing',
    type: 'Education',
    size: "All Hallows' School",
  }),
  'seasons-sinnamon-park': makeProject({
    title: 'Seasons Sinnamon Park',
    heroText: 'Medical centre framing and lining works delivered with careful service and access coordination.',
    heroImage: '/assets/project-seasons-sinnamon-park-1.jpg',
    overview: 'We deliver clean, precise, and hygienic finishes for medical centres, clinics, and healthcare spaces with minimal disruption.',
    mainImage: '/assets/project-seasons-sinnamon-park-2.jpg',
    gallery: [
      '/assets/project-seasons-sinnamon-park-1.jpg',
      '/assets/project-seasons-sinnamon-park-3.jpg',
      '/assets/project-seasons-sinnamon-park-4.jpg',
    ],
    location: 'Sinnamon Park',
    date: '2024',
    scope: 'Clean Finishes, Precise Detailing, Healthcare Fit-Out Works',
    type: 'Medical Centre',
    size: 'Seasons Sinnamon Park',
  }),
  'new-build-shopping-centre-at-graf-drive': makeProject({
    title: 'New Build Shopping Centre at Graf Drive',
    heroText: 'External cladding and soffit lining works delivered for a new shopping centre build.',
    heroImage: '/assets/project-graf-drive-shopping-centre-1.jpg',
    overview: 'We were engaged to undertake the plasterboard installation, setting, and finishing works for a new shopping centre development. The scope included both external and internal wall linings. Through careful planning and experienced project delivery, our team completed the works on schedule while maintaining the highest standards of quality and workmanship.',
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
    location: 'Graf Drive',
    date: '2026',
    scope: 'Plasterboard Installation, External Linings, Internal Linings, Setting, Finishing',
    type: 'External Cladding',
    size: 'New Build Shopping Centre',
  }),
  'shopping-centre-fc-install': makeProject({
    title: 'Shopping Centre FC Install',
    heroText: 'FC cladding installation works delivered for a shopping centre external facade and roofline areas.',
    heroImage: '/assets/project-shopping-centre-fc-install-1.jpg',
    overview: 'We completed the external wall sheeting works as part of the refurbishment of an existing shopping centre. The project involved upgrading facade elements while maintaining high standards of workmanship, safety, and quality. Our team delivered the works on schedule, ensuring the refreshed exterior met the project design and performance requirements.',
    mainImage: '/assets/project-shopping-centre-fc-install-2.jpg',
    gallery: [
      '/assets/project-shopping-centre-fc-install-1.jpg',
      '/assets/project-shopping-centre-fc-install-3.jpg',
      '/assets/project-shopping-centre-fc-install-4.jpg',
      '/assets/project-shopping-centre-fc-install-5.jpg',
    ],
    location: 'Gold Coast',
    date: '2024',
    scope: 'External Wall Sheeting, Facade Upgrades, FC Installation, Finishing',
    type: 'External Cladding',
    size: 'Shopping Centre',
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
