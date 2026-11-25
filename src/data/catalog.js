const images = import.meta.glob('../assets/our-katalog/*.jpg', {
  eager: true,
  import: 'default',
})

const imageOf = (fileName) => images[`../assets/our-katalog/${fileName}.jpg`]

export const CATALOG_CATEGORIES = [
  { key: 'all', label: { en: 'All', id: 'Semua' } },
  { key: 'hand-bouquet', label: { en: 'Hand Bouquet', id: 'Hand Bouquet' } },
  { key: 'bloom-box', label: { en: 'Bloom Box', id: 'Bloom Box' } },
  { key: 'vase-arrangement', label: { en: 'Vase Arrangement', id: 'Rangkaian Vas' } },
]

// DATA SEMENTARA: bahan, kategori, dan harga masih tebakan dari foto.
// Wajib dicek dengan admin by.Ficlo. Terjemahan Indonesia adalah draf.
const rawProducts = [
  {
    file: 'Artificial Flowers',
    name: { en: 'Artificial Flowers', id: 'Bunga Artifisial' },
    category: 'hand-bouquet',
    ingredients: {
      en: "Pink Roses, Baby's Breath, Pink Satin Ribbon",
      id: "Mawar Pink, Baby's Breath, Pita Satin Pink",
    },
    price: 350000,
  },
  {
    file: 'Bouquet Coklat',
    name: { en: 'Chocolate Bouquet', id: 'Buket Cokelat' },
    category: 'hand-bouquet',
    ingredients: {
      en: 'Assorted Chocolates, Red & Black Wrapping, Satin Ribbon',
      id: 'Aneka Cokelat, Wrapping Merah Hitam, Pita Satin',
    },
    price: 350000,
  },
  {
    file: 'Fresh Flowers',
    name: { en: 'Fresh Flowers', id: 'Bunga Segar' },
    category: 'hand-bouquet',
    ingredients: {
      en: "Orange Gerbera, Red Roses, Baby's Breath",
      id: "Gerbera Oranye, Mawar Merah, Baby's Breath",
    },
    price: 350000,
  },
  {
    file: 'Money Bouquet Basic',
    name: { en: 'Money Bouquet Basic', id: 'Buket Uang Basic' },
    category: 'hand-bouquet',
    ingredients: {
      en: "Paper Money, Baby's Breath, Pink Satin Ribbon",
      id: "Uang Kertas, Baby's Breath, Pita Satin Pink",
    },
    price: 350000,
  },
  {
    file: 'Round Artificial Flowers',
    name: { en: 'Round Artificial Flowers', id: 'Bunga Artifisial Bulat' },
    category: 'hand-bouquet',
    ingredients: {
      en: "Pastel Roses, Baby's Breath, Eucalyptus",
      id: "Mawar Pastel, Baby's Breath, Eucalyptus",
    },
    price: 350000,
  },
  {
    file: 'Thumbelina Artificial Flowers',
    name: { en: 'Thumbelina Artificial Flowers', id: 'Bunga Artifisial Thumbelina' },
    category: 'hand-bouquet',
    ingredients: {
      en: "Sunflowers, Mixed-Color Roses, Baby's Breath",
      id: "Bunga Matahari, Mawar Mix Warna, Baby's Breath",
    },
    price: 350000,
  },
]

export const catalogProducts = rawProducts.map((product, index) => ({
  id: `catalog-${index + 1}`,
  ...product,
  image: imageOf(product.file),
}))