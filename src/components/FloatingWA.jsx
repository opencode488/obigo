import { brand } from "../data/brand";

function FloatingWA() {
  return (
    <a
      href={brand.whatsappLink("Halo UbiGo, saya mau tanya produk.")}
      target="_blank"
      rel="noreferrer"
      className="floating-wa"
      aria-label="Chat UbiGo via WhatsApp"
    >
      WA
    </a>
  );
}

export default FloatingWA;
