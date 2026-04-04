'use client';
import Link from "next/link";
import {motion, Variants} from 'framer-motion'

import {siteConfig} from "@/config/site"
const {navItems} = siteConfig;

const CircularMenu = ()=>{


 // Animation Variants
 const letterVariants: Variants = {
    initial: {
      y: 0,
      color: "var(--foreground)", // Initial text color
      opacity: 1
    }, 
    hover: {
    
      // 1 Randomize Y postion for a "jittery" feel
      y: [0, -5, 2, -8, 0],
      // 2 Add a color "flash"
      color: [
        "var(--primary)",
        "var(--accent)",
        "var(--secondary)",
        "var(--primary)"
      ],
      // 3 Randomly flicker opacity
      opacity: [1, 0.5, 1, 0.8, 1],
      transition: {
        duration: 0.2, //very fast total duration
        ease: "easeInOut",
      },
    },
 };

 const containerVariants = {
  hover: {
    transition: {
      // 4 Resuse or randomize stagger to break the "clean" wave
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
 };

  return(
    <div className="relative flex items-center justify-center transition-all duration-300"
         style={{
        // This replaces: const containerSize = radius * 2.5;
        width: "calc(var(--radius) * 2.5)",
        height: "calc(var(--radius) * 2.5)"
      }}
          >
        {/* Centered Logo - Scaled for mobile */}
        <div className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 text-xs sm:text-base sm:w-14 sm:h-14">
          Logo
        </div>

        {/* Spinning border */}
        <div className="absolute rounded-full border-2 border-dashed border-primary animate-spin-slow"  
             style={{
          
          width: "calc(var(--radius) - 10px)",
          height: "calc(var(--radius) - 10px)"
        }}
            ></div>

            {/* Nav Links Text */}
          {
            navItems.map((link,index) => {
            // 1. Calculate the angle in Radians (Safe to do in JS)
            // This value is the same regardless of screen size.
            const angle = (index / (navItems.length - 1)) * Math.PI;

                return (
                 <Link 
                  key={index}
                  href={link.href}
                  className="absolute top-1/2 left-1/2 text-[18px] font-medium font-big text-foreground transition-all sm:text-sm"
                  style={{
                    // 2. Use CSS Trigonometry
                    // We negate x ( - cos) because Math.PI starts from the right (0°) 
                    // and moves left. To arc "over the top", we use these calc rules:
                    transform: `translate(
                      calc(-50% + (var(--radius) * ${-Math.cos(angle)})), 
                      calc(50% + (var(--radius) * ${Math.sin(angle)}))
                    )`,
                    whiteSpace: "nowrap",
                  } as React.CSSProperties}
                >
                    <motion.span
                        initial="initial"
                        whileHover="hover"
                        variants={containerVariants}
                        className="flex cursor-pointer"
                      >
                    {link.label.split("").map((char, i) => (
                      <motion.span 
                        key={i} 
                        variants={letterVariants}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>

                  </Link>  
                )
            })
          }

    </div>
  );
};
export default CircularMenu;