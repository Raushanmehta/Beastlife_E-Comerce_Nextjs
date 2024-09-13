import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook,FaInstagram,FaWhatsapp,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white pt-8 md:pt-12 relative">
        <div className="px-8 md:px-24 ">
          <div className="flex flex-col  md:items-start">
            <Image src="/assets/beastlife-whitelogo.png"height={130}width={130} alt="logo" className="mb-4" />
            <p className=" md:text-left mb-4 md:mt-2 text-base  md:text-xl">
              Your one-stop solution for all your supplement needs! Game-changing
              products that are geared to unlock your #BeastMode and drive
              top-tier performance for all your hustle days. Explore our epic
              lineup of fuel that's genius-built, expert-tested, and
              beast-approved!
            </p>
            <p className=" md:text-left text-base md:text-xl">Go, hustle!</p>
          </div>

          <div className="flex flex-wrap mt-6 ">
          <div className="w-full lg:w-1/5 sm:w-1/2 lg-p-4 mt-6">
                <h2 className="text-2xl text-[#BDDD01] md:text-white">For Products</h2>
                <div className="footer_menu mt-4">
                  <ul className="list-none mt-2 text-neutral-400">
                  <Link className='mt-1 hover:text-[#BDDD01]' href={""}>About us</Link> <br />
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Beast Cash</Link> <br />
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Refer & Earn</Link> <br />
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Contact Us</Link> <br />
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Privacy Policy</Link><br/>
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Return & Shipping Policy</Link><br/>
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Payment Policy</Link><br/>
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Tearm and Conditions</Link><br/>
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>FAQs</Link><br/>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/4 sm:w-1/2 lg-p-4 mt-6">
                <h2 className="text-2xl text-[#BDDD01] md:text-white">Products</h2>
                <div className="footer_menu mt-4">
                  <ul className="list-none mt-2 text-neutral-400">
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Protein</Link> <br />
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Creatine</Link> <br />
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>BCAA</Link> <br />
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Beastlife T-Shirt</Link><br/>
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Sipper</Link><br/>
                    <Link className='mt-1 hover:text-[#BDDD01]' href={""}>Shaker</Link><br/>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/4 sm:w-1/2  lg-p-4 mt-6">
                <h2 className="text-2xltext-[#BDDD01] md:text-white">Explore</h2>
                <div className="footer_menu mt-4">
                  <ul className="list-none mt-2 text-neutral-400">
                    <Link className='mt-1 hover:text-[#BDDD01]' href={"/about"}>Blogs</Link><br/>
                    <Link className='mt-1 hover:text-[#BDDD01]' href={"/blog"}>Lab Reports</Link><br/>
                    <Link className='mt-1 hover:text-[#BDDD01]' href={"/project"}>Trace Order</Link><br/>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/4 sm:w-1/2  lg-p-4 mt-6">
                <h2 className="text-2xl text-[#BDDD01] md:text-white">Contact With Us</h2>
                <div className="flex gap-4 text-3xl mt-6 ">
                  <Link className='mt-1 hover:text-[#417ff3]' href={"/"}><FaFacebook /></Link>
                  <Link className='mt-1 hover:text-[#f4a845]' href={"/"}><FaInstagram /></Link>
                  <Link className='mt-1 hover:text-[#91e642]' href={"/"}><FaWhatsapp /></Link>
                  <Link className='mt-1 hover:text-[#fb4747]' href={"/"}><FaYoutube /></Link>
                </div>
                
              </div>              
            </div>       
        </div>
        <div className=" absolute text-[#BDDD01] right-0 mt-[-280px]">
              <Image src="/assets/footer-panther.svg"height={350} width={350}alt="sheru"/>
              </div>
        <p className="text-center items-center copyright py-5">Copyright © 2024 BeastLife. All Rights Reserved.</p>   
      </footer>
    </div>
  );
};

export default Footer;