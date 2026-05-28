function CategoryFilter({ categories, selected, setSelected }) {
  return (
    <div className="filter-wrap" aria-label="Filter kategori produk">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={selected === category ? "pill active" : "pill"}
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
