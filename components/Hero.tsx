import React from "react";
import { Spotlight } from "./ui/Spotlight";
import {TextGenerateEffect} from './ui/text-generate-effect';
import { MagicButton } from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
   
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
            fill="red"
          />
          <Spotlight
            className="h-screen w-[50vw] top-10 left-3/4"
            fill="green"
          />
          <Spotlight className="left-80 top-28 h-screen w-[50vw]" fill="blue" />
        </div>
      
   
    <div className=" absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-orange-500/[0.15] bg-grid-black/[0.1] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div> 
      <div className="relative flex justify-center my-20">
        <div className="max-w-[89vw] h-screen flex justify-center flex-col items-center p">
         
          <h2 className = "uppercase tracking-widest text-xs text-center md:max-w-2xl lg:max-w-[60vw]  text-blue-100 max-w-80"> Dynamic web magic with Next.js</h2>
          
         
      <TextGenerateEffect duration={2} filter={false} title={"Transforming Concepts into Seamless Experiences"} className="text-center text-[40px] sm:text-sm md:text-5xl lg:text-6xl"/>
      <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-xl">
        
        Hi, I&apos;m Zenith, a Next.js Developer based in Sri Lanka.</p>
      
      <MagicButton title ="Show my work" icon={""} otherClasses="" position="" handleClick={()=>{}}></MagicButton>
        </div>
       
       
      </div>
    
      
       
    </div>
  );
};

export default Hero;
