import Hero from '../components/awezome/Hero';
import Header from '../components/awezome/Header';
import Tabs from '../components/awezome/Tabs';
import Footer from '../components/awezome/Footer';
export default function Awezome() {
  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Header />
      <Hero />
      <Tabs />
      <Footer />
    </div>
  );
}
