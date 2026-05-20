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
    overview: 'We do shopping centre refurbishments and retail fit-outs, including walls, ceilings, bulkheads, patching, setting, and finishing. Our team works fast, clean, and on schedule, with experience working in busy shopping centres and commercial sites.',
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
    type: 'External Cladding',
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
  'commercial-fit-out': makeProject({
    title: 'Commercial Fit-Out',
    heroText: 'A polished commercial fit-out with ceiling systems, partitions and practical interior finishes delivered for a modern workplace.',
    heroImage: '/assets/project-fitout.png',
    overview: 'This commercial fit-out brought together ceiling installation, partition coordination and interior lining works to create a durable, functional and professional workspace. The delivery focused on clean detailing, practical access to services and a finish suited to everyday commercial use.',
    mainImage: '/assets/project-fitout.png',
    gallery: ['/assets/about-interior.png', '/assets/about-finished-fitout.png', '/assets/project-partition.png', '/assets/project-renovation.png', '/assets/about-construction-progress.png'],
    location: 'Sydney, NSW',
    date: 'March 2024',
    scope: 'Ceilings, Partitions, Linings',
    type: 'Commercial Fit-Out',
    size: '1,250m²',
  }),
  'office-fit-out-barangaroo': makeProject({
    title: 'Office Fit-Out - Barangaroo',
    heroText: 'A modern office fit-out featuring suspended ceilings, acoustic solutions and custom finishes to create a functional and professional workspace.',
    heroImage: '/assets/project-fitout.png',
    overview: 'This fit-out project in Barangaroo involved the supply and installation of high-quality suspended ceilings, acoustic treatments, partitions and custom linings. The result is a contemporary workspace designed for comfort, productivity and long-term durability.',
    mainImage: '/assets/about-finished-fitout.png',
    gallery: ['/assets/about-interior.png', '/assets/project-partition.png', '/assets/project-renovation.png', '/assets/about-finished-fitout.png', '/assets/project-fitout.png'],
    location: 'Barangaroo, NSW',
    date: 'March 2024',
    scope: 'Ceilings, Partitions, Linings, Acoustic Solutions',
    type: 'Commercial Office Fit-Out',
    size: '1,250m²',
  }),
  'partition-upgrade': makeProject({
    title: 'Partition Upgrade',
    heroText: 'A clean partition upgrade designed to improve workspace flow, privacy and long-term interior performance.',
    heroImage: '/assets/project-partition.png',
    overview: 'This partition upgrade included metal stud framing, plasterboard linings and detailed coordination around existing services. The finished spaces support better workplace zoning while maintaining a sharp, professional appearance.',
    mainImage: '/assets/project-partition.png',
    gallery: ['/assets/about-partition-framing.png', '/assets/about-finished-fitout.png', '/assets/project-fitout.png', '/assets/about-interior.png', '/assets/project-renovation.png'],
    location: 'Alexandria, NSW',
    date: 'April 2024',
    scope: 'Partitions, Linings, Framing',
    type: 'Commercial Partition Upgrade',
    size: '820m²',
  }),
  'renovation-works': makeProject({
    title: 'Renovation Works',
    heroText: 'A practical renovation package refreshing existing interiors with minimal disruption and reliable finishes.',
    heroImage: '/assets/project-renovation.png',
    overview: 'This renovation project involved reworking existing interior areas, upgrading ceiling and wall finishes, and coordinating new construction elements around an active building environment.',
    mainImage: '/assets/project-renovation.png',
    gallery: ['/assets/about-cta-ceiling-grid.png', '/assets/about-construction-progress.png', '/assets/project-partition.png', '/assets/about-finished-fitout.png', '/assets/project-fitout.png'],
    location: 'Brisbane, QLD',
    date: 'May 2024',
    scope: 'Renovations, Ceilings, Linings',
    type: 'Interior Renovation',
    size: '940m²',
  }),
  'ceiling-installation': makeProject({
    title: 'Ceiling Installation',
    heroText: 'A precise ceiling installation using suspended systems and clean service integration.',
    heroImage: '/assets/about-partition-framing.png',
    overview: 'This ceiling installation focused on a clean suspended ceiling finish, coordinated lighting and service access, and durable materials selected for commercial performance.',
    mainImage: '/assets/about-finished-fitout.png',
    gallery: ['/assets/project-partition.png', '/assets/about-cta-ceiling-grid.png', '/assets/about-interior.png', '/assets/project-fitout.png', '/assets/project-renovation.png'],
    location: 'Parramatta, NSW',
    date: 'June 2024',
    scope: 'Suspended Ceilings, Acoustic Panels',
    type: 'Ceiling Installation',
    size: '1,100m²',
  }),
  'office-refurbishment': makeProject({
    title: 'Office Refurbishment',
    heroText: 'A workplace refurbishment upgrading finishes, layout and ceiling details for a more practical office environment.',
    heroImage: '/assets/project-renovation.png',
    overview: 'This office refurbishment refreshed existing work areas with updated partitions, ceiling finishes and interior linings. The project improved daily usability while keeping the finish consistent and professional.',
    mainImage: '/assets/about-interior.png',
    gallery: ['/assets/project-renovation.png', '/assets/about-finished-fitout.png', '/assets/project-fitout.png', '/assets/project-partition.png', '/assets/about-construction-progress.png'],
    location: 'North Sydney, NSW',
    date: 'July 2024',
    scope: 'Refurbishment, Partitions, Ceilings',
    type: 'Office Refurbishment',
    size: '760m²',
  }),
  'interior-linings': makeProject({
    title: 'Interior Linings',
    heroText: 'Clean interior lining works for walls, columns and detailed commercial surfaces.',
    heroImage: '/assets/project-fitout.png',
    overview: 'This interior linings package delivered smooth wall finishes, careful detailing around openings and consistent surfaces ready for final fit-out works.',
    mainImage: '/assets/project-fitout.png',
    gallery: ['/assets/about-construction-progress.png', '/assets/about-partition-framing.png', '/assets/about-finished-fitout.png', '/assets/project-renovation.png', '/assets/about-interior.png'],
    location: 'Waterloo, NSW',
    date: 'August 2024',
    scope: 'Wall Linings, Shaft Linings, Finishes',
    type: 'Interior Linings',
    size: '680m²',
  }),
  'retail-fit-out': makeProject({
    title: 'Retail Fit-Out',
    heroText: 'A retail fit-out built around clean presentation, practical layout and durable interior systems.',
    heroImage: '/assets/project-renovation.png',
    overview: 'This retail fit-out combined ceiling systems, interior partitions and lining works to create a customer-facing space with a clean, reliable finish.',
    mainImage: '/assets/about-finished-fitout.png',
    gallery: ['/assets/about-interior.png', '/assets/project-fitout.png', '/assets/project-renovation.png', '/assets/project-partition.png', '/assets/about-cta-ceiling-grid.png'],
    location: 'Chadstone, VIC',
    date: 'September 2024',
    scope: 'Fit-Out, Ceilings, Partitions',
    type: 'Retail Fit-Out',
    size: '540m²',
  }),
  'acoustic-ceiling-works': makeProject({
    title: 'Acoustic Ceiling Works',
    heroText: 'Acoustic ceiling works designed to improve comfort, sound control and interior finish quality.',
    heroImage: '/assets/project-partition.png',
    overview: 'This acoustic ceiling package used carefully selected ceiling systems to improve sound absorption while maintaining a clean and contemporary interior look.',
    mainImage: '/assets/about-finished-fitout.png',
    gallery: ['/assets/project-partition.png', '/assets/about-interior.png', '/assets/about-cta-ceiling-grid.png', '/assets/project-fitout.png', '/assets/project-renovation.png'],
    location: 'Macquarie Park, NSW',
    date: 'October 2024',
    scope: 'Acoustic Ceilings, Suspended Systems',
    type: 'Acoustic Ceiling Works',
    size: '900m²',
  }),
  'healthcare-upgrade': makeProject({
    title: 'Healthcare Upgrade',
    heroText: 'A healthcare interior upgrade delivered with clean detailing, safe sequencing and durable construction systems.',
    heroImage: '/assets/project-fitout.png',
    overview: 'This healthcare upgrade included partitions, linings and ceiling works delivered with attention to safety, sequencing and a practical finish for high-use environments.',
    mainImage: '/assets/project-fitout.png',
    gallery: ['/assets/about-finished-fitout.png', '/assets/project-renovation.png', '/assets/project-partition.png', '/assets/about-construction-progress.png', '/assets/about-interior.png'],
    location: 'South Brisbane, QLD',
    date: 'November 2024',
    scope: 'Partitions, Linings, Ceilings',
    type: 'Healthcare Upgrade',
    size: '720m²',
  }),
};

export default function ProjectDetailPage({ slug = 'office-fit-out-barangaroo' }) {
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
          <img src={image} alt={`${project.title} gallery ${index + 1}`} key={`${image}-${index}`} />
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
