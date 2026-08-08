import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Memberships from './components/Memberships';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onJoinClick={openModal} />
      <main>
        <Hero onJoinClick={openModal} />
        <Features />
        <Programs />
        <Memberships onJoinClick={openModal} />
        <Testimonials />
        <Gallery />
        <FinalCTA onJoinClick={openModal} />
      </main>
      <Footer />
      <JoinModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
