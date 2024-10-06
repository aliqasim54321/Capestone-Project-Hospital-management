import React from "react";
import { motion } from "framer-motion";
import heroImg01 from '../assets/images/hero-img01.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import faqImg from "../assets/images/faq-img.png";
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'; 
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
   <>
  {/*Hero Section Start */}
  
  <section className="hero__section pt-[60px] 2xl:h-[800px]">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

        {/*Hero Content*/}
        <div>
          <div className="lg:w-[570px]">
          <motion.h1
      className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]" initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 50 }}
    > Hero Main Title
    </motion.h1>
            <motion.p className="text__para" initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 25 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Saepe quos culpa dignissimos cum. Tenetur reprehenderit inventore dolor,
               fugit quasi at recusandae est quisquam nulla fugiat, aut odit praesentium 
               magni mollitia.</motion.p>

               <motion.button initial={{ x: "35vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 15 }} className="btn">Request an Appointment</motion.button>
          </div>

          {/*Hero Counter*/}
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            <motion.div initial={{ x: "-35vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 35 }}>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                12
              </h2>
              <span className="w-[100px] h-2 bg-[#1F2B6C] rounded-full block mt-[-14px]"></span>
              <p className="text__para">Data</p>
            </motion.div>

            <motion.div initial={{ x: "-35vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 25 }}>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                11
              </h2>
              <span className="w-[100px] h-2 bg-[#1F2B6C] rounded-full block mt-[-14px]"></span>
              <p className="text__para">Data</p>
            </motion.div>

            <motion.div initial={{ x: "-35vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 20 }}>
              <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                96%
              </h2>
              <span className="w-[100px] h-2 bg-[#1F2B6C] rounded-full block mt-[-14px]"></span>
              <p className="text__para">Data</p>
            </motion.div>

          </div>
        </div>
        {/*Hero Content*/}

        <div className="flex justify-end">
          <motion.div initial={{ x: "20vw" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 35 }}>
            <img className="w-[591px]" src={heroImg01} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  {/*Hero Section end */}

  <section>
    <div className="container">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="heading text-center">Section 2</h2>
        <p className="text__para text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center">
          <img className="h-[150px]" src={icon01} alt=""/>
        </div>

        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Call to action</h2>
          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, dolores.
        </p>

        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
        <BsArrowRight className="group-hover:text-white w-6 h-5"/>
        </Link>

        </div>
      </div>
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center">
          <img className="h-[150px]" src={icon02} alt=""/>
        </div>

        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Call to Action</h2>
          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
          lorem10
        </p>

        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
        <BsArrowRight className="group-hover:text-white w-6 h-5"/>
        </Link>

        </div>
      </div>
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center">
          <img className="h-[150px]" src={icon03} alt=""/>
        </div>

        <div className="mt-[30px]">
          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Call To Action</h2>
          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iusto?
        </p>

        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
        <BsArrowRight className="group-hover:text-white w-6 h-5"/>
        </Link>

        </div>
      </div>
      </div>
    </div>
  </section>
  
    <About />

    {/* Services Section */}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Services Section</h2>
          <p className="text__para text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet.
          </p>
        </div>

        <ServiceList />
      </div>
    </section>
    {/* Services Section end */}

    {/* feature section */}
<section>
  <div className="container">
    <div className="flex items-center justify-between flex-col lg:flex-row">
      {/* feature content */}
      <div className="xl:w-[670px]">
        <h2 className="heading">
          Features Section <br /> Breakline.
        </h2>
        <ul className="pl-4">
          <li className="text__para">
            1. Lorem, ipsum dolor.
          </li>
          <li className="text__para">
            2. Lorem ipsum dolor sit amet.
          </li>
          <li className="text__para">
            3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque reprehenderit laborum excepturi.
          </li>
        </ul>
        <Link to='/'><button className="btn">Learn More</button></Link>
      </div>

      {/*  feature img  */}
      <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
      <img src={featureImg} className="w-[600px] rounded-[30px]" alt="" />
      
      <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px] lg:gap-3">
            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
              Tue, 24
            </p>
            <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
              10:00AM
              </p>
          </div>
          <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
            <img src={videoIcon} alt="" />
          </span>
        </div>

        <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
          Consultation
        </div>

        <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
          <img src={avatarIcon} alt="" />
          <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Wayne Collins</h4>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
{/* feature section end */}
{/* Our Great Doctors */}
<section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center">Doctors Section</h2>
      <p className="text__para text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatum!.
      </p>
    </div>

    <DoctorList />
  </div>
</section>
{/* Our Great Doctors End*/}

{/* FAQ */}
<section>
  <div className="container">
    <div className="flex justify-between gap-[50px] lg:gap-0">
      <div className="w-2/3 hidden md:block">
        <img className="mt-[125px] rounded-[24px]"src={faqImg} alt="" />
      </div>

      <div className="w-full md:w-1/2">
      <h2 className="heading">FAQ Section</h2>

      <FaqList />
      </div>
    </div>
  </div>
</section>

{/* FAQ end */}

{/* Testimonial */}
<section>
  <div className="container">
  <div className="xl:w-[470px] mx-auto">
    <h2 className="heading text-center">Testimonials Section</h2>
    <p className="text__para text-center">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, eos?
    </p>
  </div>

  <Testimonial />
  </div>
</section>
{/* Testimonial End */}
  </>
  );
};

export default Home;