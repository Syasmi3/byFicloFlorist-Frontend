const images = import.meta.glob('../assets/our-katalog/*.jpg', {
  eager: true,
  import: 'default',
})

const imageOf = (fileName) => images[`../assets/our-katalog/${fileName}.jpg`]

export const CATALOG_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'hand-bouquet', label: 'Hand Bouquet' },
  { key: 'bloom-box', label: 'Bloom Box' },
  { key: 'vase-arrangement', label: 'Vase Arrangement' },
]

// DATA SEMENTARA: bahan, kategori, dan harga masih tebakan dari foto.
// Wajib dicek dengan admin by.Ficlo. Terjemahan Indonesia adalah draf.
const rawProducts = [
  {
    file: 'Artificial Flowers',
    name: 'Artificial Flowers',
    category: 'hand-bouquet',
    ingredients: "Pink Roses, Baby's Breath, Pink Satin Ribbon",
    price: 350000,
  },
  {
    file: 'Bouquet Coklat',
    name: 'Chocolate Bouquet',
    category: 'hand-bouquet',
    ingredients: 'Assorted Chocolates, Red & Black Wrapping, Satin Ribbon',
    price: 350000,
  },
  {
    file: 'Fresh Flowers',
    name: 'Fresh Flowers',
    category: 'hand-bouquet',
    ingredients: "Orange Gerbera, Red Roses, Baby's Breath",
    price: 350000,
  },
  {
    file: 'Money Bouquet Basic',
    name: 'Money Bouquet Basic',
    category: 'hand-bouquet',
    ingredients: "Paper Money, Baby's Breath, Pink Satin Ribbon",
    price: 350000,
  },
  {
    file: 'Round Artificial Flowers',
    name: 'Round Artificial Flowers',
    category: 'hand-bouquet',
    ingredients: "Pastel Roses, Baby's Breath, Eucalyptus",
    price: 350000,
  },
  {
    file: 'Thumbelina Artificial Flowers',
    name: 'Thumbelina Artificial Flowers',
    category: 'hand-bouquet',
    ingredients: "Sunflowers, Mixed-Color Roses, Baby's Breath",
    price: 350000,
  },
]

export const catalogProducts = rawProducts.map((product, index) => ({
  id: `catalog-${index + 1}`,
  ...product,
  image: imageOf(product.file),
}))