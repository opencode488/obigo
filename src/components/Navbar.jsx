import { useState } from "react";
import { brand } from "../data/brand";

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Produk" },
  { href: "#about", label: "Tentang" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigasi utama">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">U</span>
          <span>
            <strong>{brand.name}</strong>
            <small>Oleh-oleh Karanganyar</small>
          </span>
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="nav-cta"
            href={brand.whatsappLink("Halo UbiGo, saya mau tanya stok produk hari ini.")}
            target="_blank"
            rel="noreferrer"
          >
            Pesan
          </a>
          <div className="cart" aria-label={`${cartCount} produk di keranjang`}>
            {cartCount}
          </div>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-label="Buka menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
