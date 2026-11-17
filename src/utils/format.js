export const formatRupiah = (value) =>
  `Rp ${new Intl.NumberFormat('id-ID').format(value)}`