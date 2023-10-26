import Hero from '../components/app/main-content/Hero';
import Navbar from '../components/app/navigation/Navbar';
import Information from '../components/app/main-content/Information';
import Card from '../components/app/main-content/Card';

export default function Content() {
  return (
    <>
      <div className='mx-8 font-mono'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Information></Information>
        <Card></Card>
      </div>
    </>
  );
}
