import HeadlineCards from '@/components/HeadlineCards';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Food from '@/components/Food';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  );
}
