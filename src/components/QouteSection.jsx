import React from 'react';

export default function QuoteSection() {
  return (
    <section className="overflow-hidden relative bg-neutral-950">
      <img
        src="./5.jpg"
        alt=""
        className="w-full h-[400px] object-cover max-sm:h-[280px]"
      />
      <div className="flex absolute inset-0 flex-col justify-center px-16 max-sm:px-6">
        <blockquote className="text-3xl font-black leading-tight text-lime-400 max-w-[500px] max-md:text-xl max-sm:text-base max-sm:max-w-[280px]">
          "Orang akan lupa apa yang Anda katakan, akan lupa apa yang Anda lakukan,
          tetapi tidak akan pernah lupa bagaimana Anda membuat mereka merasa."
        </blockquote>
        <div className="mt-5">
          <cite className="px-2.5 py-1 text-xs font-bold tracking-wider uppercase bg-lime-400 text-neutral-950 not-italic">
            MAYA ANGELOU
          </cite>
        </div>
      </div>
    </section>
  );
};
