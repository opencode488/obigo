import { brand } from "../data/brand";

export default function ProductGrid({ products, addToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h3>Produk tidak ditemukan</h3>
        <p>Coba kata kunci lain atau pilih kategori Semua.</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {products.map((item) => (
        <article className="card" key={item.id}>
          <div className="card-media">
            <img src={item.image} alt={item.name} className="card-image" />
            <span>{item.badge}</span>
          </div>

          <div className="card-content">
            <span className="tag">{item.category}</span>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>

          <div className="card-bottom">
            <strong>Rp {item.price}</strong>
            <div className="card-actions">
              <button className="ghost-btn" type="button" onClick={() => addToCart(item)}>
                + Keranjang
              </button>
              <a
                href={brand.whatsappLink(`Saya mau order ${item.name}`)}
                target="_blank"
                rel="noreferrer"
                className="order-btn"
                aria-label={`Order ${item.name} via WhatsApp`}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
