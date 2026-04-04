import Image from "next/image";
const Hero = () => {
  return(
    <section className="w-full min-h-screen flex items-center justify-center bg-background px-6 sm:px-4">
        <div className="max-w-6xl w-full text-center">
          {/* Top Badge */}
          <p className="inline-block bg-light-bg font-bold text-gray font-big px-4 rounded-full text-sm py-2 mb-16">
            Hi, I&apos;m Adnan Khan
          </p>

          {/* Big Heading Wrapper */}
          <h1 className="flex items-center justify-center gap-4 flex-wrap text-5xl md:text-8xl font-extrabold uppercase font-big text-foreground tracking-tight ">
            <span>Full Stack</span>
            {/* Avatar inside the H1 */}
            <span className="w-20 h-20 md:w-28 md:h-28 relative inline-block">
              <Image
              src="https://i.pravatar.cc/300"
              alt="avatar"
              fill
              className="rounded-full object-cover"/>
            </span>
            <span>Developer</span>
          </h1>

         {/* CTA Button */}
        <div className="flex justify-center mt-10 sm-mt-5">
         {/* Button */}
                  <button className="rounded-full bg-accent px-6 py-2.5 font-semibold text-foreground flex items-center justify-center gap-3 cursor-pointer transition-all duration-300
                  shadow-[0_10px_25px_-6px_var(--color-accent)]/60
                  hover:shadow-[0px_12px_20px_-6px_var(--color-assent)]/40">
                    Book a Call
                    <span className="h-2.5 w-2.5 rounded-full bg-foreground shadow-inner"/>
                  </button>
        </div>

        </div>
    </section>
  )
}

export default Hero;