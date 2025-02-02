"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  title,
  description,
  className,
  filter = true,
  duration = 0.5,
}: {
  title: string;
  description?: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let titleArray = (title||description).split("");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : .5,
        delay: stagger(0.045),
      }
    );
  }, [scope.current]);

  const rendertitle = () => {
    return (
      <motion.div ref={scope}>
        {titleArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{""}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
      <div className={` bg-gradient-to-br from-purple via-blue-500 bg-clip-text text-transparent dark:from-purple dark:via-green-200 dark:to-white ${className}`}>
      {rendertitle()}
        </div>
      </div>
    </div>
  );
};
