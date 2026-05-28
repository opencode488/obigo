import { brand } from "../data/brand";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-main">
        <div>
          <span className="eyebrow">Kontak</span>
          <h2>{brand.name}</h2>
          <p>{brand.tagline}</p>
        </div>

        <div className="footer-links">
          <a
            href={brand.whatsappLink("Halo UbiGo, saya mau order produk.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a href={`https://instagram.com/${brand.instagram}`} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={`https://facebook.com/${brand.facebook}`} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={brand.mapsUrl} target="_blank" rel="noreferrer">
            Maps
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{brand.address}</span>
        <span>Copyright 2026 UbiGo Karanganyar</span>
      </div>
    </footer>
  );
}

export default Footer;
