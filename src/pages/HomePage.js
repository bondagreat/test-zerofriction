import About from '../components/home/About';
import Carousel from '../components/home/Carousel';
import Contact from '../components/home/Contact';
import Header from '../layouts/Header';
import Product from '../components/home/Product';

export default function HomePage() {
  return (
    <div className="w-[1920px] h-[3821px] bg-black">
      <Header />
      <About />
      <Carousel />
      <Product />
      <Contact />
    </div>
  );
}
