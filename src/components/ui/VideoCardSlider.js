"use client";
import React, { useState } from 'react';

const VideoCardSlider = ({ product }) => {
    if (!product) {
        return <p className='text-center text-gray-500'>No product available.</p>;
    }

    const { videoUrl } = product;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoadedData = () => setIsLoading(false);
    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
    };

    return (
        <div className='bg-white shadow-lg rounded-lg overflow-hidden mt-10'>
            <div className='relative'>
                {isLoading && <p className='text-center'>Loading video...</p>}
                {hasError && <p className='text-center text-red-500'>Failed to load video.</p>}
                <video
                    src={videoUrl}
                    autoPlay
                    controls // Optional: keep if you want user controls
                    className="w-full h-auto"
                    onLoadedData={handleLoadedData}
                    onError={handleError}
                    style={{ display: isLoading || hasError ? 'none' : 'block' }}
                />
            </div>
        </div>
    );
};

export default VideoCardSlider;
