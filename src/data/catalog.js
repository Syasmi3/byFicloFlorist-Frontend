
const images = import.meta.glob('../assets/our-katalog/*.jpg', {
  eager: true,
  import: 'default',
})

const imageOf = (fileName) => images[`../assets/our-katalog/${fileName}.jpg`]

export const CATALOG_CATEGORIES = [
  'Semua',
  'Hand Bouquet',
  'Bloom Box',
  'Vase Arrangement',
]

const rawProducts = [
  {
    name: 'Artificial Flowers',
    category: 'Hand Bouquet',
    ingredients: "Mawar Pink, Baby's Breath, Pita Satin Pink",
    price: 350000,
  },
  {
    name: 'Bouquet Coklat',
    category: 'Hand Bouquet',
    ingredients: 'Aneka Coklat, Wrapping Merah Hitam, Pita Satin',
    price: 350000,
  },
  {
    name: 'Fresh Flowers',
    category: 'Hand Bouquet',
    ingredients: "Gerbera Oranye, Mawar Merah, Baby's Breath",
    price: 350000,
  },
  {
    name: 'Money Bouquet Basic',
    category: 'Hand Bouquet',
    ingredients: "Uang Kertas, Baby's Breath, Pita Satin Pink",
    price: 350000,
  },
  {
    name: 'Round Artificial Flowers',
    category: 'Hand Bouquet',
    ingredients: "Mawar Pastel, Baby's Breath, Eucalyptus",
    price: 350000,
  },
  {
    name: 'Thumbelina Artificial Flowers',
    category: 'Hand Bouquet',
    ingredients: "Bunga Matahari, Mawar Mix Warna, Baby's Breath",
    price: 350000,
  },
]

export const catalogProducts = rawProducts.map((product, index) => ({
  id: `catalog-${index + 1}`,
  ...product,
  image: imageOf(product.name),
}))
