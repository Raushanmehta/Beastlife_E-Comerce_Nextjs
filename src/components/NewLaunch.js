import React from "react";
import Image from "next/image";

const NewLaunch = ({ product }) => {
  return (
    <div className="bg-[url('/assets/kesarpstabg.jpg')] py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 px-4 md:px-24 py-14">
        
        {/* Video Section - Mobile on Top, Right on Medium Screens */}
        <div className="flex-1 mb-6 md:mb-0 md:order-2 flex justify-center">
          <iframe
            className="object-cover w-full max-w-md aspect-video rounded-lg"
            src={product.videoUrl}
            title="Product Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Product Details Section */}
        <div className="flex-1 mb-6 md:mb-0 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-amber-700">New Launch Alert</h1>
          <p className="text-lg font-semibold mb-2 mt-4">{product.title}</p>
          <p className="mb-4">
            Taste your Tradition with the timeless <strong>{product.flavor}</strong> Pro Whey with real Pista Flakes! Gains have never tasted this good!
          </p>
          <h4 className="text-2xl font-semibold mb-2">Just Dropped</h4>
          <div className="flex flex-col md:flex-row rounded-l-none overflow-hidden">
            <div className="flex-none w-full md:w-60 h-60 border-black border-2">
              <Image
                src={product.image}
                height={250}
                width={250}
                alt={product.flavor}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between bg-white text-center rounded-r-none border-black border-2 w-full md:w-60">
              <div>
                <div className="bg-gradient-to-r text-xl to-pink-500 via-purple-500 from-indigo-500 text-white p-2 ">
                  <span>{product.specialFeature}</span>
                </div>
                <h2 className="text-md mt-6 font-semibold items-center ">
                  {product.description} | {product.weight} | {product.flavor}
                </h2>
              </div>
              <div>
                <p className="font-bold p-2">
                  Price: <span className="text-slate-600 line-through">{product.oldPrice}</span> {product.price}
                </p>
                <button className="bg-black w-full text-white hover:bg-[#BDDD01] text-xl transition duration-300 p-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewLaunch;
