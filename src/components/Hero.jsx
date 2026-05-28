import bollenImage from "../assets/gofood/ubigo-ubi-ungu-bligo.jpg";
import storeImage from "../assets/ubigo-store.jpg";
import { brand } from "../data/brand";

function Hero({ search, setSearch }) {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <span className="eyebrow">Signature: Ubigo Bollen</span>
        <h1>Oleh-oleh khas Karanganyar yang siap dibawa pulang.</h1>
        <p>
          UbiGo mengangkat ubi ungu dan bligo lokal menjadi bollen premium,
          snack, dan frozen food untuk buah tangan keluarga, tamu, atau rekan kerja.
        </p>

        <div className="hero-actions">
          <a href="#products" className="primary-btn">
            Lihat Produk
          </a>
          <a
            href={brand.whatsappLink("Halo UbiGo, saya mau order Bollen Ubigo.")}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Order WhatsApp
          </a>
        </div>

        <label className="search-wrap">
          <span>Cari produk</span>
          <input
            type="text"
            placeholder="Contoh: bollen, frozen, snack"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="search"
          />
        </label>

        <div className="hero-proof" aria-label="Keunggulan toko">
          <div>
            <strong>09.00</strong>
            <span>Buka setiap hari</span>
          </div>
          <div>
            <strong>UMKM</strong>
            <span>Produk lokal</span>
          </div>
          <div>
            <strong>Jl. Lawu</strong>
            <span>Karanganyar</span>
          </div>
        </div>
      </div>

      <div className="hero-media" aria-label="Foto produk dan toko UbiGo">
        <img src={bollenImage} alt="Bollen Ubigo dengan isian ubi ungu" />
        <div className="store-card">
          <img src={storeImage} alt="Toko UbiGo Karanganyar" />
          <div>
            <strong>Tersedia langsung di toko</strong>
            <span>{brand.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
