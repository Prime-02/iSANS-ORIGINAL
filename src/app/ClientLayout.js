'use client'

import Navbar from '@/components/navbar/Navbar';

export default function ClientLayout({ children }) {
  const scrollToSection = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      console.log(`Scrolling to ${section}`);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`${section} not found`);
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      {children}
    </>
  );
}
