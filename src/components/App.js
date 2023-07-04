
import { Routes, Route } from "react-router-dom";
import Home from '../routes/Home';
import PortfolioDemoApp from '../routes/PortfolioDemoApp';
import AboutMe from '../routes/AboutMe';
import Mission from '../routes/Mission';
import Vision from '../routes/Vision';
import Services from '../routes/Services';
import SoftwareDevelopmentService from '../routes/SoftwareDevelopmentService';
import BankingApplicationDevelopment from '../routes/BankingApplicationDevelopment';
import DocumentDigitisationService from '../routes/DocumentDigitisationService';
import OtherServiceActivity from '../routes/OtherServiceActivity';
import Layout from './Layout';
import PhotoGallery from '../routes/PhotoGallery';
import Projects from '../routes/Projects';
import Certifications from '../routes/Certifications';
import Video from '../routes/Video';
import Video2 from '../routes/Video2';
import ContactMe from '../routes/ContactMe';


import Blank from '../routes/Blank';
import Started from '../routes/Started';


const App = () => {
  return (
    <>
	
      <Routes>
	  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
		  <Route path="portfolio-demo-app" element={<PortfolioDemoApp />} />
		  <Route path="about-me" element={<AboutMe />} />
		  <Route path="mission" element={<Mission />} />
		  <Route path="vision" element={<Vision />} />
          <Route path="services" element={<Services />} />
		  <Route path="software-development-service" element={<SoftwareDevelopmentService />} />
		  <Route path="banking-application-development" element={<BankingApplicationDevelopment />} />
		  <Route path="document-digitisation-service" element={<DocumentDigitisationService />} />
		  <Route path="other-service-activity" element={<OtherServiceActivity />} />
		  <Route path="photo-gallery" element={<PhotoGallery />} />
		  <Route path="projects" element={<Projects />} />
		  <Route path="certifications" element={<Certifications />} />
		  <Route path="video" element={<Video />} />
		  <Route path="video2" element={<Video2 />} />
		  <Route path="contact" element={<ContactMe />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
