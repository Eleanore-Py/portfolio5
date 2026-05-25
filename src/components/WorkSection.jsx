import React from 'react';
import ProjectCard from './ProjectCard';

export default function WorkSection() {
  const projects = [
    {
      imageSrc: "./1.png",
      title: "SACRÉ ARMAND",
      tags: ["STRATÉGIE", "BRAND IDENTITY", "BRAND CONTENT"],
      bgColor: "bg-zinc-900"
    },
    {
      imageSrc: "./2.png",
      title: "SMOTEO",
      tags: ["STRATÉGIE", "BRAND IDENTITY", "BRAND CONTENT"],
      bgColor: "bg-blue-950"
    },
    {
      imageSrc: "./3.png",
      title: "NID",
      tags: ["STRATÉGIE", "BRAND IDENTITY", "BRAND CONTENT"],
      bgColor: "bg-stone-900"
    },
    {
      imageSrc: "./4.png",
      title: "YOKITUP",
      tags: ["STRATÉGIE", "BRAND IDENTITY", "BRAND CONTENT", "BRAND CONTENT", "BRAND CONTENT"],
      bgColor: "bg-stone-900"
    }
  ];

  return (
    <section id="work" className="px-10 py-16 bg-neutral-950 max-sm:px-4 max-sm:py-10">
      <div className="flex justify-between items-start mb-10 max-sm:flex-col max-sm:gap-5">
        <div>
          <div className="mb-2 text-xs font-medium tracking-widest text-white uppercase opacity-60">
            Karya
          </div>
          <h2 className="text-5xl font-black leading-none text-white max-md:text-4xl max-sm:text-3xl">
            CREATING
            <br />
            LOVE BRANDS
          </h2>
        </div>
        <a href="#contact" className="flex gap-2 items-center px-4 py-2.5 border border-white/20 cursor-pointer">
          <span className="text-xs font-semibold tracking-wider text-white uppercase">
              KONTAK KAMI
            </span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            tags={project.tags}
            bgColor={project.bgColor}
          />
        ))}
      </div>
    </section>
  );
};
