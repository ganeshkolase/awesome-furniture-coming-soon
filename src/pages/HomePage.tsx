import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ImageCarousel } from '../components/ImageCarousel';
import { EmailSignup } from '../components/EmailSignup';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ImageCarousel />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  );
};