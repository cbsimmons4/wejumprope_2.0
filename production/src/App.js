import './App.css';
import AppBar from './components/AppBar';
import BackToTopButton from './components/BackToTopButton';
import HeaderSection from './components/Sections/HeaderSection';
import AboutSection from './components/Sections/AboutSection';
import ServicesSection from './components/Sections/ServicesSection';
import VideosSection from './components/Sections/VideoSection';
import ShopSection from './components/Sections/ShopSection';
import ContactSection from './components/Sections/ContactSection';
import FooterSection from './components/Sections/FooterSection'

function App() {
  return (
    <div className="App">
      <AppBar/>
      <HeaderSection/>
      <hr id = 'about-section'/>
      <AboutSection/>
      <hr id = 'services-section'/>
      <ServicesSection/>
      <hr id = 'videos-section'/>
      <VideosSection/>
      <hr id = 'shop-section'/>
      <ShopSection/>
      <hr id = 'contact-section'/> 
      <ContactSection/>
      <FooterSection/>
      <BackToTopButton/>
    </div>
  );
}

export default App;
