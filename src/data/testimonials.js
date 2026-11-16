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
    time: '5d ago',
    text: 'Received the sweetest bouquet for our 2nd anniversary! The flowers were gorgeous, and I absolutely loved the colors and adorable wrapping. Thank you for making our day extra special!',
    avatarFile: 'angel.jpeg',
  },
  {
    name: 'Syasmi Permata',
    location: 'Bogor',
    time: '3d ago',
    text: 'He sent me flowers with a heartfelt message about how grateful he is to have me in his life. The bouquet was so beautiful and thoughtfully arranged. Thank you for such a lovely surprise!',
    avatarFile: 'syasmi.jpeg',
  },
  {
    name: 'Destya Ayu',
    location: 'Jakarta Selatan',
    time: '6d ago',
    text: 'Got a lovely bouquet for Mothers Day, and my mom was so happy! The flowers were fresh, beautifully wrapped, and absolutely perfect. Thank you for making her day special!',
    avatarFile: 'destya.png',
  },
  {
    name: 'Frisca Angellita',
    location: 'Bogor',
    time: '4d ago',
    text: 'The bouquet was part of one of the most unforgettable moments of my life—my engagement! Everything looked so elegant and beautiful. Thank you for making it even more memorable!',
    avatarFile: 'frisca.png',
  },
  {
    name: 'Ananda Avenzia',
    location: 'Depok',
    time: '10d ago',
    text: 'Ordered flowers for my bestie thesis defense, and she absolutely loved them! The bouquet was fresh, beautifully arranged, and arrived right on time. Highly recommended!',
    avatarFile: 'ananda.png',
  },
  {
    name: 'Camilla Asmat',
    location: 'Depok',
    time: '7d ago',
    text: 'Ordered a flower arrangement for my friends new shop opening. It looked even better in person! Beautiful flowers, neat packaging, and smooth ordering experience. Definitely worth it!',
    avatarFile: 'camilla.png',
  },
]

export const testimonials = rawTestimonials.map((item, index) => ({
  id: `testimonial-${index + 1}`,
  ...item,
  avatar: avatarOf(item.avatarFile),
}))