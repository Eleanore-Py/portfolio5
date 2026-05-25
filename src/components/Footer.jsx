import React from 'react';

export default function Footer({ onContactClick }) {
  const services = [

  // add contact id to footer for anchor link

    "Platforma merek",
    "Strategi konten",
    "Identitas visual",
    "Komunikasi",
    "Peluncuran kampanye"
  ];

  const navigation = [
    "PROYEK",
    "KONSEP",
    "AGENSI",
    "LAYANAN",
    "KONTAK"
  ];

  const socialIcons = [
    "ti-brand-instagram",
    "ti-brand-facebook",
    "ti-brand-linkedin",
    "ti-brand-pinterest",
    "ti-brand-spotify",
    "ti-brand-tiktok"
  ];

  return (
    <footer id="contact" className="bg-neutral-950">
      <div className="relative px-10 py-16 max-sm:px-4 max-sm:py-10">
        <div className="flex flex-col gap-10 max-sm:gap-6">
          <div className="max-w-2xl">
            <span
            className="text-xs font-bold tracking-[0.4em] text-red-500 uppercase"
            style={{ color: '#ef4444' }}
          >Kontak</span>
            <h2 className="mt-6 text-5xl font-black leading-tight text-white max-md:text-4xl max-sm:text-3xl">
              Mari ciptakan pengalaman visual dan cerita brand yang berkesan.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/70">
              Isi formulir kontak untuk berbicara dengan tim kreatif kami, atau klik tombol di bawah untuk langsung mengirim pesan.
            </p>
          </div>
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-red-500 bg-red-500 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-red-600"
            style={{ backgroundColor: '#ef4444', borderColor: '#ef4444' }}
          >
            Hubungi Tim Kami
          </button>
        </div>
      </div>
      <div className="p-10 border-t border-white/20 max-sm:px-4 max-sm:py-6">
        <div className="flex justify-between items-center mb-10 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <nav className="flex gap-10 max-sm:flex-wrap max-sm:gap-4">
            {services.map((service, index) => (
              <div key={index} className="text-xs tracking-wider text-white uppercase opacity-60">
                {service}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <nav className="flex gap-8 max-sm:flex-wrap max-sm:gap-4">
            {navigation.map((item, index) => (
              <div key={index} className="text-xs tracking-wider text-white uppercase opacity-60">
                {item}
              </div>
            ))}
          </nav>
          <div className="flex gap-5">
            {socialIcons.map((icon, index) => (
              <button
                key={index}
                className="flex justify-center items-center w-8 h-8 rounded-full border border-white/20 cursor-pointer"
              >
                <i className={`ti ${icon} text-sm text-white opacity-60`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
