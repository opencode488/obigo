import storeImage from "../assets/ubigo-store.jpg";
import { brand } from "../data/brand";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-media">
        <img src={storeImage} alt="Fasad toko UbiGo Karanganyar" />
      </div>

      <div className="about-copy">
        <span className="eyebrow">Tentang UbiGo</span>
        <h2>Bollen ubi ungu sebagai wajah baru oleh-oleh Karanganyar.</h2>
        <p>
          UbiGo menyediakan Bollen Ubi Ungu dan Bligo sebagai produk unggulan,
          sekaligus menghadirkan pilihan oleh-oleh produksi UMKM Karanganyar
          agar potensi lokal ikut tumbuh bersama.
        </p>

        <div className="info-list">
          <div>
            <span>Alamat</span>
            <strong>{brand.address}</strong>
          </div>
          <div>
            <span>Jam Operasional</span>
            <strong>{brand.hours.weekdays}</strong>
            <strong>{brand.hours.weekend}</strong>
          </div>
          <div>
            <span>Fasilitas</span>
            <strong>{brand.facilities.join(", ")}</strong>
          </div>
        </div>

        <div className="about-actions">
          <a href={brand.mapsUrl} target="_blank" rel="noreferrer" className="secondary-btn">
            Buka Maps
          </a>
          <a
            href={`https://instagram.com/${brand.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            @{brand.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
