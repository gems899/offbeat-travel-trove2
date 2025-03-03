
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StateGrid from '@/components/StateGrid';
import Exploration from '@/components/Exploration';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Add keyboard navigation for gallery
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const closeButtons = document.querySelectorAll('[aria-label="Close"]');
        if (closeButtons.length > 0) {
          (closeButtons[0] as HTMLButtonElement).click();
        }
      }
      
      if (e.key === 'ArrowRight') {
        const nextButtons = document.querySelectorAll('[aria-label="Next"]');
        if (nextButtons.length > 0) {
          (nextButtons[0] as HTMLButtonElement).click();
        }
      }
      
      if (e.key === 'ArrowLeft') {
        const prevButtons = document.querySelectorAll('[aria-label="Previous"]');
        if (prevButtons.length > 0) {
          (prevButtons[0] as HTMLButtonElement).click();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-900 dark:from-gray-900 dark:to-black dark:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StateGrid />
        <Exploration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
