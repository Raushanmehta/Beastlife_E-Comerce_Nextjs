// components/ProductSlider.js
import { useState } from 'react';

const products = [
  {
    id: 1,
    title: 'Product 1',
    price: '$10',
    offer: '10% Off',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Product 2',
    price: '$20',
    offer: '20% Off',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Product 3',
    price: '$30',
    offer: '30% Off',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Product 4',
    price: '$40',
    offer: '40% Off',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Product 5',
    price: '$50',
    offer: '50% Off',
    image: 'https://via.placeholder.com/150',
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={prevSlide} className="p-2 bg-gray-200 rounded-l">
        Previous
      </button>

      <div className="flex overflow-hidden">
        <div className="flex space-x-4">
          {products.slice(currentIndex, currentIndex + 1).map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <img src={product.image} alt={product.title} className="mb-2 w-full h-32 object-cover" />
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
              <p className="text-red-500">{product.offer}</p>
              <button className="mt-2 p-2 bg-blue-500 text-white rounded">Buy Now</button>
            </div>
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className="p-2 bg-gray-200 rounded-r">
        Next
      </button>
    </div>
  );
};

export default ProductSlider;
