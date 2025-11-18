import HeroSection from '@/components/elements/hero-section';
import  NavBar  from '@/components/elements/NavBar';

export default function Home() {
  return (
    <div className='flex justify-center'>
      <div> <HeroSection /> </div>
      <div> <NavBar /> </div>
    </div>
    
  );
}
