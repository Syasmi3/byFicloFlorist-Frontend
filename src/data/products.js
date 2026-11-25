const images = import.meta.glob(
  '../assets/best-seller/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
)

const imageByCode = Object.fromEntries(
  Object.entries(images).map(([path, url]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    url,
  ])
)

const NAME = {
  roundBouquet: { en: 'Artificial Flowers Round Bouquet', id: 'Buket Bulat Bunga Artifisial' },
  bouquet: { en: 'Artificial Flowers Bouquet', id: 'Buket Bunga Artifisial' },
  pinkies: { en: 'Pinkies Thumbelina', id: 'Pinkies Thumbelina' },
  aurora: { en: 'Aurora Bouquet', id: 'Buket Aurora' },
  butterfly: { en: 'Butterfly Bouquet', id: 'Buket Kupu-Kupu' },
  matcha: { en: 'Matcha Strawberry Bouquet', id: 'Buket Matcha Stroberi' },
  roundThumbelina: { en: 'Round Thumbelina', id: 'Thumbelina Bulat' },
  round: { en: 'Artificial Flowers Round', id: 'Bunga Artifisial Bulat' },
  graduation: { en: 'Artificial Flowers Bouquet Graduation', id: 'Buket Bunga Artifisial Wisuda' },
  fresh: { en: 'Fresh Flowers Bouquet', id: 'Buket Bunga Segar' },
  chocolate: { en: 'Chocolate Bouquet', id: 'Buket Cokelat' },
  artificial: { en: 'Artificial Flowers', id: 'Bunga Artifisial' },
  sunflower: { en: 'Sunflowers Bouquet', id: 'Buket Bunga Matahari' },
}

const rawProducts = [
  { code: '001', name: NAME.roundBouquet, price: 390000 },
  { code: '002', name: NAME.roundBouquet, price: 395000 },
  { code: '003', name: NAME.roundBouquet, price: 275000 },
  { code: '004', name: NAME.bouquet, price: 150000 },
  { code: '005', name: NAME.bouquet, price: 200000 },
  { code: '006', name: NAME.pinkies, price: 195000 },
  { code: '007', name: NAME.pinkies, price: 295000 },
  { code: '008', name: NAME.pinkies, price: 125000 },
  { code: '009', name: NAME.aurora, price: 375000 },
  { code: '010', name: NAME.butterfly, price: 250000 },
  { code: '011', name: NAME.matcha, price: 385000 },
  { code: '012', name: NAME.bouquet, price: 670000 },
  { code: '013', name: NAME.roundThumbelina, price: 495000 },
  { code: '014', name: NAME.round, price: 180000 },
  { code: '015', name: NAME.round, price: 200000 },
  { code: '016', name: NAME.round, price: 125000 },
  { code: '017', name: NAME.round, price: 300000 },
  { code: '018', name: NAME.graduation, price: 185000 },
  { code: '019', name: NAME.fresh, price: 440000 },
  { code: '020', name: NAME.chocolate, price: 150000 },
  { code: '021', name: NAME.artificial, price: 400000 },
  { code: '022', name: NAME.artificial, price: 400000 },
  { code: '023', name: NAME.sunflower, price: 555000 },
]

export const bestSellers = rawProducts
  .map((product) => ({
    id: product.code,
    ...product,
    image: imageByCode[product.code],
  }))
  .filter((product) => {
    if (!product.image && import.meta.env.DEV) {
      console.warn(
        `Foto "${product.code}" tidak ditemukan di src/assets/best-seller/`
      )
    }
    return Boolean(product.image)
  })