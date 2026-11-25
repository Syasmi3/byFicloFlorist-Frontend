const avatars = import.meta.glob(
  '../assets/testimonials/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
)

const avatarOf = (fileName) => {
  if (!fileName) return null
  const match = Object.entries(avatars).find(([path]) =>
    path.endsWith(`/${fileName}`)
  )
  return match ? match[1] : null
}

const rawTestimonials = [
  {
    name: 'Via Angelya',
    location: 'Depok',
    time: '2025-11-12',
    text: 'Received the sweetest bouquet for our 2nd anniversary! The flowers were gorgeous, and I absolutely loved the colors and adorable wrapping. Thank you for making our day extra special!',
    avatarFile: 'angel.jpeg',
  },
  {
    name: 'Syasmi Permata',
    location: 'Bogor',
    time: '2023-06-03',
    text: 'He sent me flowers with a heartfelt message about how grateful he is to have me in his life. The bouquet was so beautiful and thoughtfully arranged. Thank you for such a lovely surprise!',
    avatarFile: 'syasmi.jpeg',
  },
  {
    name: 'Destya Ayu',
    location: 'Jakarta Selatan',
    time: '2026-10-11',
    text: 'Stopped by the shop to find a bouquet, and I was so impressed by the beautiful flower selections! The staff were friendly and helped me choose the perfect arrangement. Such a lovely store with amazing service. Will definitely come back!',
    avatarFile: 'destya.jpeg',
  },
  {
    name: 'Frisca Angellita',
    location: 'Bogor',
    time: '2023-12-25',
    text: 'My boyfriend sent me this gorgeous bouquet all the way from miles away! It made me feel so loved despite the distance. The flowers were fresh, beautifully arranged, and arrived perfectly. Thank you for making long distance feel a little closer!',
    avatarFile: 'frisca.jpeg',
  },
  {
    name: 'Ananda Avenzia',
    location: 'Depok',
    time: '2026-11-13',
    text: 'The bouquet was part of one of the most unforgettable moments of my life—my engagement! Everything looked so elegant and beautiful. Thank you for making it even more memorable!',
    avatarFile: 'ananda.png',
  },
  {
    name: 'Camilla Asmat',
    location: 'Depok',
    time: '2026-11-13',
    text: 'Received this beautiful bouquet after my thesis defense, and it made my day even brighter! The flowers were so fresh and lovely. Thank you for making my little celebration extra special!',
    avatarFile: 'camilla.jpeg',
  },
]

export const testimonials = rawTestimonials.map((item, index) => ({
  id: `testimonial-${index + 1}`,
  ...item,
  avatar: avatarOf(item.avatarFile),
}))