import React from 'react';

export default function MethodologySection() {
  return (
    <section id="methodology" className="overflow-hidden relative px-10 py-24 bg-neutral-950 max-sm:px-4 max-sm:py-16">
      <div className="flex absolute inset-0 justify-center items-center opacity-5">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"600\" height=\"400\" viewBox=\"0 0 600 400\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 200 L200 100 L300 200 L400 100 L500 200\" stroke=\"#ffffff\" stroke-width=\"1\" fill=\"none\"></path><path d=\"M50 300 L150 200 L250 300 L350 200 L450 300 L550 200\" stroke=\"#ffffff\" stroke-width=\"1\" fill=\"none\"></path></svg>",
            }}
          />
        </div>
      </div>
      <div className="mb-16 text-center">
        <h2 className="text-6xl font-black leading-none text-white max-md:text-4xl max-sm:text-3xl">
          METODOLOGI
        </h2>
        <h2 className="text-6xl font-black leading-none text-white max-md:text-4xl max-sm:text-3xl">
          HYPEREALIST
        </h2>
        <div className="flex flex-wrap gap-2 justify-center items-center text-6xl font-black leading-none text-white max-md:text-4xl max-sm:text-3xl">
          MEMAHAMI
          <div className="text-3xl font-black text-lime-400 rounded-full border-2 border-lime-400 h-[50px] w-[50px] max-sm:w-9 max-sm:h-9 max-sm:text-xl flex items-center justify-center">
            O
          </div>
          D
          <div className="text-3xl font-black text-lime-400 rounded-full border-2 border-lime-400 h-[50px] w-[50px] max-sm:w-9 max-sm:h-9 max-sm:text-xl flex items-center justify-center">
            O
          </div>
          A
        </div>
        <h2 className="text-6xl font-black leading-none text-white max-md:text-4xl max-sm:text-3xl">
          HYPEREALIST
        </h2>
      </div>
      <div className="flex gap-16 mx-auto max-w-[800px] max-md:flex-col max-md:gap-8">
        <div className="flex-1">
          <div className="mb-1 text-sm font-bold text-white">
            hyper
            <div className="text-xs text-white opacity-60">
              (prf.) [hiper]
            </div>
          </div>
          <p className="mb-4 text-xs text-white opacity-60">
            Prefiks yang menandakan intensitas atau kelebihan
          </p>
          <div className="mb-1 text-xs font-semibold tracking-wider text-lime-400 uppercase">
            MENUNJUKKAN INTENSITAS
            <br />
            YANG LEBIH DARI BIASA
          </div>
          <div className="mt-2 h-0.5 bg-lime-400 w-[60px]" />
        </div>
        <div className="flex-1">
          <div className="mb-1 text-sm font-bold text-white">
            realist
            <div className="text-xs text-white opacity-60">
              (adj.) [realist]
            </div>
          </div>
          <p className="mb-4 text-xs text-white opacity-60">
            Menunjukkan kesadaran terhadap kenyataan dan pendekatan praktis
          </p>
          <div className="mb-1 text-xs font-semibold tracking-wider text-lime-400 uppercase">
            MEMILIKI SENSE AKAN REALITAS,
            <br />
            SIKAP PRAKTIS
          </div>
          <div className="mt-2 h-0.5 bg-lime-400 w-[60px]" />
        </div>
      </div>
    </section>
  );
};
