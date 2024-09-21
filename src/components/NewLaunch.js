import React from "react";
import Image from "next/image";

const NewLaunch = () => {
  return (
    <div className="bg-[url('/assets/kesarpstabg.jpg')] py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-2 px-4 md:px-24 py-14 ">
        <div className="flex-1 mb-6 md:mb-0 " >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-amber-700">New Launch Alert</h1>
          <p className="text-lg font-semibold mb-2 mt-4">BeastLife Pro Whey With Real Pista Flakes</p>
          <p className="mb-4">
            Taste your Tradition with the timeless <strong>KESAR PISTA</strong> Pro Whey with real Pista Flakes! Gains have never tasted this good!
          </p>
          <h4 className="text-2xl font-semibold mb-2">Just Dropped</h4>
          <div className="flex flex-col md:flex-row border-black border-2 rounded-lg overflow-hidden">
  <div className="flex-none w-full md:w-60 h-60 rounded-lg">
    <Image
      src="/assets/kesarpista.jpg"
      height={250}
      width={250}
      alt="kesharpista"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="flex flex-col justify-between bg-white text-center  w-full md:w-60">
    <div>
      <div className="bg-gradient-to-r text-xl to-pink-500 via-purple-500 from-indigo-500 text-white p-2 rounded ">
        <span>Real Pista Flakes</span>
      </div>
      <h2 className="text-lg font-semibold">
        Pro Concentrate Whey Protein with Ultrasorb Tech | 924gm | Kesar Pista
      </h2>
    </div> 
    <div>
      <p className="text-xl font-bold p-2">Price</p>
      <button className="bg-black w-full text-white rounded hover:bg-blue-600 text-xl transition duration-300 p-2">
        Shop Now
      </button>
    </div>
  </div>
</div>

        </div>
        <div className="flex-1 flex justify-end ">
          <iframe
            className="object-cover w-full max-w-md aspect-square rounded-lg"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Product Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NewLaunch;
