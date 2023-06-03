"use client";
import  Contact  from '@/components/Contact';
import  Service  from '@/components/Service';
import  Hero  from '@/components/Hero';

export default function Home() {
  
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Hero/>
      <Service/>
      <Contact/> 
    </main>
  )
}