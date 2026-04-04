"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-6xl w-full text-center">

        {/* Top Badge */}
        <p className="inline-block bg-light-bg font-bold text-black font-big px-4 py-2.5 rounded-full text-sm mb-6">
          Hi, I&apos;m Your Name
        </p>

        {/* Big Heading */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <h1 className="text-5xl uppercase font-big text-black md:text-8xl font-extrabold tracking-tight">
            Full Stack
          </h1>

          {/* Placeholder Image */}
          <div className="w-20 h-20 md:w-28 md:h-28 relative">
            <Image
              src="https://i.pravatar.cc/300"
              alt="avatar"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl uppercase font-big text-black md:text-8xl font-extrabold tracking-tight">
            Developer
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
          I design fast, user-friendly websites for founders and freelancers
          looking to attract dream clients.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-primary shadow-[0_8px_20px_-6px_var(--color-brand-cyan)]/50 
  hover:shadow-[0_12px_25px_-4px_var(--color-brand-cyan)]/70 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition">
            I Want to Chat
          </button>
        </div>
      </div>
    </section>
  );
}