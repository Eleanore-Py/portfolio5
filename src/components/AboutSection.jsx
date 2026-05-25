import React from 'react';

export default function AboutSection() {
  const leftPoints = [
    "Mengubah bisnis menjadi cerita yang menarik dan menghubungkan",
    "Memikirkan secara mendalam citra merek Anda",
    "Mengumpulkan talenta Anda dengan sangat kreatif"
  ];

  const rightPoints = [
    "Membantu Anda memperjelas tujuan dan ambisi",
    "Bekerja bersama untuk merumuskan strategi jangka panjang"
  ];

  const leftServices = [
    "Platforma merek",
    "Penceritaan merek",
    "Identitas visual",
    "Komunikasi",
    "Peluncuran kampanye"
  ];

  const centerServices = [
    "Strategi konten",
    "Penamaan dan materi (website, video, media sosial)"
  ];

  return (
    <section id="about" className="px-10 py-20 bg-neutral-950 max-sm:px-4 max-sm:py-10">
      <div className="mb-2 text-xs font-medium tracking-widest text-white uppercase opacity-60">
        Tentang Kami
      </div>
      <h2 className="mb-1 text-5xl font-black leading-none text-red-500 max-md:text-4xl max-sm:text-3xl">
        KAMI ADALAH
      </h2>
      <h2 className="mb-4 text-5xl font-black leading-none text-white max-md:text-4xl max-sm:text-3xl">
        HYPEREALIST
      </h2>
      <div className="px-3 py-1.5 mb-10 text-xs font-bold tracking-widest text-white uppercase bg-red-500">
        KAMI INGIN
      </div>
      <div className="flex gap-16 max-md:flex-col max-md:gap-8">
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {leftPoints.map((point, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="mt-0.5 text-xs text-lime-400">→</div>
                <p className="text-xs leading-relaxed text-white opacity-80">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {rightPoints.map((point, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="mt-0.5 text-xs text-lime-400">→</div>
                <p className="text-xs leading-relaxed text-white opacity-80">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full border border-white/20" />
            <div className="w-2 h-2 rounded-full border border-white/20" />
            <div className="w-2 h-2 rounded-full border border-white/20" />
            <div className="w-2 h-2 rounded-full border border-white/20" />
          </div>
        </div>
      </div>
      <div className="mt-16 max-sm:mt-10">
        <h3 className="mb-6 text-sm font-bold tracking-widest text-red-500 uppercase">
          BIDANG KERJA
        </h3>
        <div className="grid grid-cols-3 max-sm:grid-cols-1">
          <div className="flex flex-col gap-2 pr-8 border-r border-white/20 max-sm:pb-4 max-sm:mb-4 max-sm:border-r-0 max-sm:border-b">
            {leftServices.map((service, index) => (
              <div key={index} className="text-xs font-semibold text-white opacity-80">
                {service}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 px-8 border-r border-white/20 max-sm:pb-4 max-sm:mb-4 max-sm:border-r-0 max-sm:border-b max-sm:px-0">
            {centerServices.map((service, index) => (
              <div key={index} className="text-xs font-semibold text-white opacity-80">
                {service}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 pl-8 max-sm:pl-0">
            <div className="flex justify-end items-center mt-auto max-sm:justify-start">
              <button className="px-3.5 py-2 text-xs font-semibold tracking-wider text-white uppercase border border-white/20 cursor-pointer">
                LIHAT METODOLOGI KAMI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
