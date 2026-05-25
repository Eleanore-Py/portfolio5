import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-5 max-sm:px-4">
      <div className="text-lg font-extrabold tracking-widest text-lime-400 uppercase">
        Hyperealist
      </div>
      <nav className="flex gap-10 items-center max-md:hidden">
        <a href="#work" className="text-xs font-medium tracking-wider text-white uppercase opacity-60">
          Karya
        </a>
        <a href="#about" className="text-xs font-medium tracking-wider text-white uppercase opacity-60">
          Tentang
        </a>
      </nav>
      <nav className="flex gap-10 items-center max-md:hidden">
        <a href="#work" className="text-xs font-medium tracking-wider text-white uppercase opacity-60">
          Proyek
        </a>
        <a href="#contact" className="text-xs font-medium tracking-wider text-white uppercase opacity-60">
          Kontak
        </a>
      </nav>
      <button className="flex justify-center items-center w-9 h-9 rounded-full border border-lime-400 border-solid cursor-pointer">
        <i className="ti ti-menu-2 text-base text-lime-400" />
      </button>
    </header>
  );
};
