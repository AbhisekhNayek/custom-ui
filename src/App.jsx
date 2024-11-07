import './App.css'
import BlogSection from './components/blog_section/BlogSection'
import FaqsSections from './components/faqs_section/FaqsSections'
import Feature2Section from './components/feature_2_section/Feature2Section'
import FeatureSection from './components/features_section/FeatureSection'
import Footer from './components/footer_section/Footer'
import HeroSection from './components/hero_section/HeroSection'
import SocialProofSection from './components/social_proof_section/SocialProofSection'
import TestimonialSection from './components/testimonial_section/TestimonialSection'
import Divider from './components/utilityComponents/Divider'
import FreeTrial from './components/faqs_section/FreeTrial'

function App() {
 

  return (
   <div className='overflow-x-hidden w-[100vw]'>
    <HeroSection />
    <SocialProofSection />
    <FeatureSection/>
    <TestimonialSection />
    <Feature2Section />
    <Divider />
    <FaqsSections/>
    <Divider />
    <BlogSection />
    <Divider />
    <FreeTrial/>
    <Footer />

   </div>
  )
}

export default App
