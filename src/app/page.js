import ProductSlider from '@/components/ProductSlider';
import Carousel from '../components/Carousel';
import { images } from '@/constants';
import NewLaunch from '@/components/NewLaunch';

export default function Home() {
  return (
    <div>     
      <Carousel images={images} />
      <ProductSlider/>
      <NewLaunch/>
    </div>
  );
}
