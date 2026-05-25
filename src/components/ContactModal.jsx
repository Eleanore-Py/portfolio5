import React, { useState } from 'react';

export default function ContactModal({ open, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Pesan dari ${name || 'Pengunjung'}`;
    const body = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
    // fallback: open mail client
    window.location.href = `mailto:hello@hyperealist.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-neutral-900 p-6 rounded w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Kontak Kami</h3>
          <button onClick={onClose} className="text-sm text-white/70">Tutup</button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="bg-neutral-800 border border-white/10 px-3 py-2 text-sm text-white"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-neutral-800 border border-white/10 px-3 py-2 text-sm text-white"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="bg-neutral-800 border border-white/10 px-3 py-2 text-sm text-white h-32"
            placeholder="Pesan"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex gap-2 justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-white/20">
              Batal
            </button>
            <button type="submit" className="px-4 py-2 bg-lime-400 text-neutral-950 font-semibold">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
