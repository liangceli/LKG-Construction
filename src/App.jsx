import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SuppliersSection from './components/SuppliersSection.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ServiceDetailPage, { serviceDetails } from './pages/ServiceDetailPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ProjectDetailPage, { projectDetails } from './pages/ProjectDetailPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

const pageTitles = {
  '/': 'LKG Construction - Home',
  '/services': 'LKG Construction - Our Services',
  '/projects': 'LKG Construction - Our Projects',
  '/about-us': 'LKG Construction - About Us',
  '/contact-us': 'LKG Construction - Contact Us',
};

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SuppliersSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const serviceSlug = path.startsWith('/services/') ? path.replace('/services/', '') : '';
  const service = serviceDetails[serviceSlug];
  const projectSlug = path.startsWith('/projects/') ? path.replace('/projects/', '') : '';
  const project = projectDetails[projectSlug];
  document.title = service
    ? `LKG Construction - ${service.title}`
    : project
      ? `LKG Construction - ${project.title}`
      : pageTitles[path] ?? 'LKG Construction - Home';

  return (
    <main>
      {path === '/about-us' && <AboutPage />}
      {path === '/services' && <ServicesPage />}
      {path === '/projects' && <ProjectsPage />}
      {service && <ServiceDetailPage slug={serviceSlug} />}
      {project && <ProjectDetailPage slug={projectSlug} />}
      {path === '/contact-us' && <ContactPage />}
      {path !== '/about-us' && path !== '/services' && path !== '/projects' && !service && !project && path !== '/contact-us' && <HomePage />}
    </main>
  );
}
