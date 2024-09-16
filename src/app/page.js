import ProductSlider from '@/components/ProductSlider';
import Carousel from '../components/Carousel';
import { images } from '@/constants';

export default function Home() {
  return (
    <div>     
      <Carousel images={images} />
      <ProductSlider/>
    </div>
  );
}
