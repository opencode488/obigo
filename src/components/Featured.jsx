import { products } from "../data/products";
import { brand } from "../data/brand";

function Featured() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="featured" aria-labelledby="featured-title">
      <div className="section-heading">
        <span className="eyebrow">Paling dicari</span>
        <h2 id="featured-title">Menu yang membuat UbiGo mudah diingat.</h2>
        <p>
          Produk unggulan yang kuat untuk dijadikan spotlight, baik untuk
          pelanggan lokal maupun wisatawan yang mencari oleh-oleh khas.
        </p>
      </div>

      <div className="featured-grid">
        {featuredProducts.map((item) => (
          <article className="featured-card" key={item.id}>
            <img src={item.image} alt={item.name} className="featured-image" />
            <div className="featured-card-body">
              <span className="tag">{item.badge}</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="featured-bottom">
                <strong>Rp {item.price}</strong>
                <a
                  href={brand.whatsappLink(`Saya mau order ${item.name}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="order-btn"
                >
                  Pesan
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Featured;
