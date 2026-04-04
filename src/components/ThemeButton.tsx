"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi";

const subscribe  = () => { return () => {} };

const ThemeToggle = ()=>{
  const isServer = useSyncExternalStore(subscribe, () => false, () => true);
  const { theme, setTheme }  = useTheme();
  
  if(isServer) return null;
  const isDark = theme === "dark";
  return(
    <button 
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-cyan-50 bg-background  transition-colors focus:outline-none dark:bg-background" aria-label="Toggle Theme">
        {/* The Sliding Circle thumb */}
        <div className={`${isDark ? "translate-x-7" : "translate-x-1"}
                        flex h-6 w-6 transform items-center justify-center rounded-full bg-background shadow-md transition-transform duration-300 ease-in-out`}>
            {
              isDark ? (
                <HiSun className="h-4 w-4 text-primary"/>
              ): (
                <HiMoon className="h-4 w-4 text-primary"/>
              )
            }
        </div>
    </button>
  )
}

export default ThemeToggle;