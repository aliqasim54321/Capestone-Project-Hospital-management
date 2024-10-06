import React from 'react';
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/*About Img*/}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img className="h-[520px]" src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    <img className="rounded-[12px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)]" src={aboutCardImg} alt="" />
                </div>
                </div>

                {/*About Content*/}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">About Section</h2>
                <p className="text__para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae molestias illum, praesentium quia ab illo aliquam quibusdam a iure animi dolor laudantium neque sequi excepturi totam nisi amet, nam magni debitis optio rerum quos dolorum odit. Obcaecati, aliquid omnis! Dolore asperiores nulla aliquid saepe quis laudantium officia sint optio repudiandae.</p>

                <p className="text__para mt-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium fuga adipisci, quae quod atque, quidem dolor necessitatibus omnis tempora nemo totam molestiae qui incidunt amet fugit facilis nam? Nesciunt, dicta?</p>
                <Link to='/'><button className="btn">Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
