import { FaFacebook,FaGithub, FaTwitter, FaLinkedin , FaInstagram } from "react-icons/fa";
import CircularMenu from "./CircularMenu";
import ThemeToggle from "./ThemeButton";

const Navbar = ()=>{
  return(
    <nav className="w-full bg-background">
      {/* Flex Outer Container */}
        <div className="container mx-auto px-4 relative h-20 overflow-visible flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-4">
              {/* Button */}
                  <button className="hidden rounded-full bg-accent px-6 py-2 font-semibold text-foreground md:flex items-center gap-3 cursor-pointer transition-all duration-300
                  shadow-[0_10px_25px_-6px_var(--color-accent)]/60
                  hover:shadow-[0px_12px_20px_-6px_var(--color-assent)]/40">
                    Book a Call
                    <span className="h-2.5 w-2.5 rounded-full bg-foreground shadow-inner"/>
                  </button>

                  {/* Social Icons */}
                  <div className="hidden gap-4 items-center md:flex">
                        <FaFacebook className="text-gray size-6 cursor-pointer transition hover:text-primary"/>
                        <FaTwitter className="text-gray size-6 cursor-pointer transition hover:text-primary"/>
                        <FaLinkedin className="text-gray size-6 cursor-pointer transition hover:text-primary"/>
                        <FaInstagram className="text-gray size-6 cursor-pointer transition hover:text-primary"/>
                        <FaGithub className="text-gray size-6 cursor-pointer transition hover:text-primary"/>
                  </div>
            </div>

          {/* Center Absolute centered menu */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircularMenu />
          </div>
                    
           {/* Right Toggle Button */}
           <div><ThemeToggle/></div>
        </div>
    </nav>
  )
};

export default Navbar;