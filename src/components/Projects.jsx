import React from 'react'

import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-30 px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-white mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1a1a1a] p-5 rounded shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-2xl"
            />
            <h3 className="text-xl text-white mt-4">{project.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-4 mx-16 text-center text-indigo-400  transition-colors duration-300 px-3 py-2 border border-indigo-400 rounded-4xl hover:bg-indigo-600 hover:text-white"
            >
              View Case Study
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
