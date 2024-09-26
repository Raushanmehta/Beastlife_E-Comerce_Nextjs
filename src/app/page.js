import ProductSlider from '@/components/ProductSlider';
import Carousel from '../components/Carousel';
import { images, newLaunchData } from '@/constants';
import NewLaunch from '@/components/NewLaunch';
import LearningFlex from '@/components/LearningFlex';
import ComboProduct from '@/components/ComboProduct';




export default function Home() {
  return (
    <div>     
      <Carousel images={images} />
      <ProductSlider/>
      <NewLaunch product={newLaunchData}/>
      <LearningFlex/>
      <ComboProduct/>
     
    </div>
  );
}
