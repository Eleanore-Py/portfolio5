import React from 'react';

export default function ClientsSection() {
  const clients = [
    {
      name: "BAGEL CORNER",
      services: [
        "Platforma merek",
        "Strategi konten dan platform kreatif"
      ]
    },
    {
      name: "SMOTEO",
      services: [
        "Merek terhubung dan dunia kreatifnya"
      ]
    },
    {
      name: "NID",
      services: [
        "Merek terhubung dan dunia kreatifnya",
        "Strategi konten dan platform kreatif"
      ]
    },
    {
      name: "ALYSA",
      services: [
        "Merek terhubung dan dunia kreatifnya"
      ]
    },
    {
      name: "HORMONES",
      services: [
        "Merek terhubung dan dunia kreatifnya"
      ],
      fullWidth: true
    }
  ];

  return (
    <section id="clients" className="px-10 py-20 bg-neutral-950 max-sm:px-4 max-sm:py-10">
      <h2 className="mb-10 text-sm font-bold tracking-wider text-white">
        Klien Kami
      </h2>
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        {clients.map((client, index) => (
          <article
            key={index}
            className={`p-8 border border-white/20 max-sm:p-5 ${
              client.fullWidth ? 'col-span-2 max-sm:col-span-1' : ''
            }`}
          >
            <h3 className="mb-2 text-sm font-bold tracking-wider text-red-500 uppercase">
              {client.name}
            </h3>
            {client.services.map((service, serviceIndex) => (
              <p key={serviceIndex} className="text-xs leading-relaxed text-white opacity-60">
                {service}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
};
