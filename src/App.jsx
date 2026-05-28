import { useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

import { products } from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Semua");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((product) => product.id === item.id);

      if (exists) {
        return prev.map((product) =>
          product.id === item.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const categories = useMemo(() => {
    return [
      "Semua",
      ...Array.from(new Set(products.map((item) => item.category).filter(Boolean))),
    ];
  }, []);

  const filtered = useMemo(() => {
    return products.filter((item) => {
      const query = search.trim().toLowerCase();
      const text = `${item.name} ${item.category} ${item.desc}`.toLowerCase();
      const matchSearch = !query || text.includes(query);
      const matchCategory = selected === "Semua" || item.category === selected;

      return matchSearch && matchCategory;
    });
  }, [search, selected]);

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero search={search} setSearch={setSearch} />
      <Featured />

      <section id="products" className="products-section">
        <div className="section-heading">
          <span className="eyebrow">Katalog UbiGo</span>
          <h2>Pilih oleh-oleh favoritmu</h2>
          <p>
            Semua menu bisa dipesan cepat lewat WhatsApp. Gunakan filter untuk
            menemukan signature bollen, frozen food, snack, dan pelengkapnya.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selected={selected}
          setSelected={setSelected}
        />

        <ProductGrid products={filtered} addToCart={addToCart} />
      </section>

      <About />
      <Footer />
      <FloatingWA />
    </>
  );
}

export default App;
