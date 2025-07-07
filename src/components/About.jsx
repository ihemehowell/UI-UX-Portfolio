import React from 'react'


const About = () => {
  return (
    <section className="py-20 px-8 max-w-4xl mx-auto text-center">
      <div className="bgImg1 opacity-90 ">
      <h2 className="text-4xl font-semibold text-white mb-6">About Me</h2>
      <p className="text-gray-400 text-lg">
        I'm a UI/UX designer with a passion for creating user-centered digital experiences. I enjoy transforming complex problems into simple, intuitive solutions.
      </p>
      <div className="flex justify-center gap-20 mt-6">
        <img src="/assets/figma.svg" alt="Figma" className="h-10" />
        <img src="/assets/xd.svg" alt="Adobe XD" className="h-10" />
        <img src="/assets/webflow.svg" alt="Webflow" className="h-10" />
        <img src="/assets/notion.svg" alt="Notion" className="h-12 " />
      </div>
      <a
        href="https://drive.google.com/file/d/1KU2lCFxPK5JcOI5TbgJlyyWWx0kO2M_Q/view?usp=drivesdk"
        className="inline-block mt-10 border border-indigo-600 transition-all duration-500  text-white px-6 py-3 rounded-4xl hover:bg-indigo-700 "
      >
        Download Resume
      </a>
      </div>
    </section>
  );
};

export default About;
// This component displays an "About Me" section with a brief description and icons for design tools