import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LandingSection from './section/landingSection.tsx';

export default function App() {
  //const box = useRef<HTMLDivElement>(null);

 // useEffect(() => {
 //   const tween = gsap.to(box.current, { rotation: 27, x: 100, duration: 1 });
 //   return () => { tween.revert(); };
 // }, []);

  return (
    <div className='bg-black-custom'>
      <LandingSection />
    </div>
  )
}
