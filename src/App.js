import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Impact from './components/Impact';
import VisionMission from './components/VisionMission';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import RefundPolicy from './components/RefundPolicy';
import ShippingPolicy from './components/ShippingPolicy';

function App() {
  const [page, setPage] = useState('home');
  const [donateOpen, setDonateOpen] = useState(false);
  const [preselectProject, setPreselectProject] = useState(null);

  const navigate = (id) => {
    setPage(id); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDonate = (projectId = null) => {
    setPreselectProject(projectId);
    setDonateOpen(true);
  };

  useEffect(() => {
    if (donateOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [donateOpen]);

  let content;
  switch (page) {
    case 'about':
      content = <About />;
      break;
    case 'projects':
      content = <Projects onDonateProject={(id) => openDonate(id)} />;
      break;
    case 'impact':
      content = <Impact />;
      break;
    case 'vision':
      content = <VisionMission />;
      break;
    case 'volunteer':
      content = <Volunteer />;
      break;
    case 'privacy':
      content = <PrivacyPolicy />;
      break;
    case 'terms':
      content = <TermsAndConditions />;
      break;
    case 'refund':
      content = <RefundPolicy />;
      break;
    case 'shipping':
      content = <ShippingPolicy />;
      break;
    case 'contact':
      content = <Contact />;
      break;
    case 'home':
    default:
      content = (
        <Home
          onNavigate={navigate}
          onDonate={() => openDonate()}
          onVolunteer={() => navigate('volunteer')}
        />
      );
  }

  return (
    <div className="app">
      <Navbar
        current={page}
        onNavigate={navigate}
        onDonate={() => openDonate()}
      />
      <main>{content}</main>
      <Footer onNavigate={navigate} onDonate={() => openDonate()} />
      <DonateModal
        open={donateOpen}
        onClose={() => setDonateOpen(false)}
        preselect={preselectProject}
      />
    </div>
  );
}

export default App;
