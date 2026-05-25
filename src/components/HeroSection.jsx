import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="flex relative flex-col justify-center items-center py-20 max-sm:py-10">
      <div className="absolute top-5 left-2/4 -translate-x-2/4">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z\" fill=\"#c8f135\"></path></svg>",
            }}
          />
        </div>
      </div>
      <h1
        className="text-9xl font-black tracking-normal leading-none text-center text-red-500 max-md:text-7xl max-sm:text-5xl"
        style={{ color: '#ef4444' }}
      >
        UNGKAPKAN
      </h1>
      <h1 className="text-9xl font-black tracking-normal leading-none text-center text-white max-md:text-7xl max-sm:text-5xl">
        YANG TERBAIK
      </h1>
      <div className="flex gap-3 items-center mt-5">
        <div
          className="px-2.5 py-1 text-xs font-bold tracking-widest uppercase bg-red-500 text-white"
          style={{ backgroundColor: '#ef4444' }}
        >
          HYPEREALIST
        </div>
        <p className="text-xs leading-snug text-white opacity-70 max-w-[240px]">
          Agensi spesialis strategi merek dan konten untuk pengalaman yang berani.
        </p>
      </div>
    </section>
  );
};
