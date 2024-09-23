import ProductSlider from '@/components/ProductSlider';
import Carousel from '../components/Carousel';
import { images, newLaunchData } from '@/constants';
import NewLaunch from '@/components/NewLaunch';
import LearningFlex from '@/components/LearningFlex';


export default function Home() {
  return (
    <div>     
      <Carousel images={images} />
      <ProductSlider/>
      <NewLaunch product={newLaunchData}/>
      <LearningFlex/>
     
    </div>
  );
}
