export const brand = {
  name: "UbiGo Karanganyar",
  tagline: "Oleh-oleh khas Karanganyar berbahan hasil bumi lokal.",
  phone: "6281234567890",
  instagram: "ubigokaranganyar",
  facebook: "Ubigokaranganyar",
  address: "Jl. Lawu No.86, Popongan, Kec. Karanganyar, Kabupaten Karanganyar",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl.%20Lawu%20No.86%20Popongan%20Karanganyar",
  hours: {
    weekdays: "Senin-Jumat, 09.00-19.00",
    weekend: "Sabtu-Minggu, 09.00-22.00",
  },
  facilities: ["Parkir", "Toilet", "Mushola"],
  whatsappLink: (text = "") =>
    `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`,
};
