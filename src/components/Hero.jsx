import React from 'react';

const Hero = () => {
  return (
    <section className="bgImg min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-9xl mx-auto" id='home'>
      <div className="text-left space-y-4 max-w-xl">
        <h1 className="text-5xl font-bold text-white">Hi, I'm Iheme Joy</h1>
        <p className="text-gray-400 text-xl">
          I'm a UI/UX designer with a passion for creating user-centered digital experiences.
        </p>
        <a
          href="#projects"
          className="inline-block border border-indigo-600 transition-all duration-500 mt-4 text-white px-6 py-3 rounded-4xl hover:bg-indigo-700"
        >
          View My Work
        </a>
      </div>
      <img
        src="/assets/profile.png"
        alt="Howell"
        className="rounded-b-full px-12 py-8  w-80 object-cover m-7 md:mt-0  md:mb-7"
      />
    </section>
  );
};

export default Hero;
