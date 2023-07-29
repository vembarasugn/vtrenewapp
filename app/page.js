import Image from 'next/image';
import Landingpage from '../components/Landingpage';
import Ourservices from '@/app/ourservices/page';
import Feature from './feature/page';
import Contact from './contact/page';
import About from './about/page';

function Home() {
  return (   
  <div className="bg-white-300">
     <Landingpage/>
     <About/>
     <Ourservices/>
     <Feature/>
     <Contact/>
  </div>
   )
  };
  
export default Home;
  
