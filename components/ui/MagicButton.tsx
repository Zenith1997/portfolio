"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/lib/utils";


export const MagicButton= ({
 title ,icon,position,handleClick,otherClasses
}: {
  title:string,icon:React.ReactNode,position:string,handleClick?:()=>void,otherClasses?:string

}) => {
  return (
    <div
     
     
    >
     <button className=" w-full relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] ">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className={`flex-row flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 
    ${otherClasses}`}>
    {position==='left'&&icon}
  {title}
  {position==='right'&&icon}
  </span>
</button>
      
    </div>
  );
};
