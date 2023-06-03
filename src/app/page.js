"use client";
import  Contact  from '@/components/Contact';
import  Service  from '@/components/Service';
import  Hero  from '@/components/Hero';
import  Information  from '@/components/Information';
import  Solution  from '@/components/Solution';
import  Advantages  from '@/components/Advantages';

export default function Home() {

  return (
    <main>
      <Hero/>
      <Information/>
      <Solution/>
      <Advantages/>
      <Service/>
      <Contact/> 
    </main>
  )
}