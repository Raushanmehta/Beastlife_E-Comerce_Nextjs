import React from 'react';

const Rating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className="flex justify-center">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < filledStars ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          className={`w-5 h-5 ${index < filledStars ? 'text-yellow-500' : 'text-gray-400'}`}>
          <path d="M12 .587l3.668 7.431 8.26 1.203-5.979 5.121 1.416 8.246L12 18.897l-7.365 3.868 
          1.416-8.246-5.979-5.121 8.26-1.203L12 .587z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
