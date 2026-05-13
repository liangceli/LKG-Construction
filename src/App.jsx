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

const pageTitles = {
  '/': 'LKG Construction - Home',
  '/services': 'LKG Construction - Our Services',
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
  document.title = service ? `LKG Construction - ${service.title}` : pageTitles[path] ?? 'LKG Construction - Home';

  return (
    <main>
      {path === '/about-us' && <AboutPage />}
      {path === '/services' && <ServicesPage />}
      {service && <ServiceDetailPage slug={serviceSlug} />}
      {path === '/contact-us' && <ContactPage />}
      {path !== '/about-us' && path !== '/services' && !service && path !== '/contact-us' && <HomePage />}
    </main>
  );
}
