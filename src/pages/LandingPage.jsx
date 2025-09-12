import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Agenda from '../components/Agenda';
import EventDetails from '../components/EventDetails';
import Bonuses from '../components/Bonuses';
import Educators from '../components/Educators';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Courses from '../components/Courses';
import BenefitsSection from '../components/Benefits';
import Gallery from '../components/Gallery';
import Stories from '../components/Stories';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-primary-dark">
      <Navbar />
      <Hero />
      <About />
      {/* <Agenda /> */}
      {/* <EventDetails /> */}
      <Courses/>
      <BenefitsSection/>
      {/* <Bonuses /> */}
      <Stories/>
      <Educators />
      <Gallery/>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
