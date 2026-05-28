import { brand } from "../data/brand";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Hubungi Kami</h2>

      <p>{brand.tagline}</p>
      <p>{brand.address}</p>

      <a
        href={brand.whatsappLink("Halo, saya mau order produk Ubi Go")}
        target="_blank"
        rel="noreferrer"
        className="wa-btn"
      >
        WhatsApp
      </a>
    </section>
  );
}

export default Contact;