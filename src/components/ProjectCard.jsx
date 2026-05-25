import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ imageSrc, title, tags, bgColor }) {
  return (
    <article className={`overflow-hidden relative ${bgColor}`}>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[300px] object-cover max-sm:h-[220px]"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex gap-2 items-center mb-2">
          <div className="text-xs font-medium text-white opacity-60">↑</div>
          <h3 className="text-xs font-bold tracking-wider text-white uppercase">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium tracking-wider text-white uppercase border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default ProjectCard;
