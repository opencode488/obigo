function ProductSection({ title, items, search }) {
  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="product-section">

      <h2 className="section-title">{title}</h2>

      {filtered.length === 0 ? (
        <p className="empty-state">
          Produk tidak ditemukan 😴
        </p>
      ) : (
        <div className="product-grid">

          {filtered.map((item) => (
            <div className="card" key={item.id || item.name}>

              <h3>{item.name}</h3>

              {item.desc && (
                <p className="desc">{item.desc}</p>
              )}

              <div className="bottom">

                <span className="price">
                  Rp {item.price}
                </span>

                <a
                  href={`https://wa.me/6281234567890?text=Saya%20mau%20order%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="order-btn"
                >
                  Order
                </a>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default ProductSection;