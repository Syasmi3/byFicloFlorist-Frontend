# 💐 byFicloFlorist: Frontend Web Application

Repositori Frontend untuk **Website Katalog Digital by.Ficlo Florist dan Dekorasi**, hasil Capstone Project **Asah 2026** (led by Dicoding, supported by GoTo) oleh Tim **A26-CS005**.

🔗 **Live Demo:** `https://byficloflorist-frontend.vercel.app/`
🔗 **Repositori Backend:** `https://github.com/<username>/<nama-repo-backend>`

---

## 📌 1. Latar Belakang

**by.Ficlo** adalah florist dan dekorasi di Cimanggis, Depok, yang berdiri sejak 2021. Produknya meliputi bunga artificial dan fresh, buket wisuda, bloom box, vase arrangement, dan hadiah bunga custom.

Saat ini pemesanan masih dilakukan manual lewat chat WhatsApp dan Instagram, sehingga muncul beberapa masalah:

- Pelanggan harus menanyakan katalog, harga, dan ketersediaan satu per satu.
- Admin mencatat pesanan secara manual, sehingga rawan salah atau terlewat.
- Bukti transfer tercampur di chat, sehingga verifikasi lambat.
- Stok bunga tidak terlihat pelanggan, sehingga sering ada permintaan yang tidak bisa dipenuhi.

**Solusi:** website katalog dan pemesanan digital. Pelanggan melihat katalog, memesan lewat form, membayar via transfer BCA dan mengunggah bukti, lalu menerima struk digital setelah admin memverifikasi.

## 👥 2. Pengguna

| Pengguna | Kebutuhan |
| --- | --- |
| **Pelanggan** (mahasiswa dan abdi negara) | Melihat katalog, memesan buket untuk kebutuhan pribadi, wisuda, atau hadiah, dan memantau status pesanan |
| **Admin by.Ficlo** | Mengelola pesanan, memverifikasi pembayaran, serta memantau katalog dan stok dalam satu dashboard |

---

## ✨ 3. Fitur Antarmuka

### Sisi Pelanggan

- **Halaman publik:** landing page, katalog, dan detail produk (filter kategori, pencarian, dan pengurutan harga).
- **Form pemesanan:** validasi field wajib dan cut-off pukul 14.00 WIB, ringkasan total (ongkir dan kode unik).
- **Pembayaran transfer BCA:** instruksi pembayaran, unggah bukti bayar (JPG/PNG/PDF, maksimal 5 MB).
- **Pesanan Saya:** timeline status pesanan, serta struk digital (PDF) setelah pembayaran terverifikasi.
- **Notifikasi:** ikon lonceng untuk setiap perubahan status pesanan.
- **Akun:** registrasi, login, reset password, dan halaman Akun Saya.
- **Create Your Bouquet:** game merangkai buket sendiri dengan harga otomatis dan stok yang sinkron dengan toko.
- **Chatbot:** FAQ cepat, cek status pesanan, dan fallback AI, dengan opsi hubungi admin lewat WhatsApp.
- **Tanya Rekomendasi:** saran buket berdasarkan budget, tema, dan momen.

### Sisi Admin

- Dashboard ringkasan dan daftar serta detail pesanan.
- Verifikasi atau tolak pembayaran (dengan alasan) dan ubah status pesanan.
- Kelola katalog dan inventaris (tambah, ubah, hapus, peringatan stok menipis).
- Pengaturan toko (rekening BCA, jam cut-off, batas waktu bayar).
- Laporan penjualan sederhana (fitur tambahan).

### Status Pengembangan

> Centang diperbarui seiring progres. Fitur yang belum selesai tidak ditampilkan di versi live.

- [ ] Setup project dan struktur folder
- [ ] Landing page
- [ ] Katalog dan detail produk
- [ ] Autentikasi (sign up, sign in, reset password)
- [ ] Form pemesanan dan pembayaran
- [ ] Pesanan Saya, notifikasi, dan struk
- [ ] Dashboard admin
- [ ] Game Create Your Bouquet
- [ ] Chatbot dan Tanya Rekomendasi

---

## 🛠️ 4. Tech Stack

| Teknologi | Kegunaan |
| --- | --- |
| **React.js** | Library UI berbasis komponen |
| **Vite** | Module bundler dan dev server |
| **Tailwind CSS** | Styling responsif (mobile, tablet, desktop) |
| **Axios** | Networking calls ke REST API backend |
| **Oxlint** | Linter untuk menjaga kerapian kode |
| **Vercel** | Deployment frontend |

Arsitektur **decoupled**: frontend ini berdiri sendiri dan berkomunikasi dengan backend lewat REST API (`/api/v1/...`). API key dan layanan AI hanya diakses dari backend, tidak pernah dari frontend.

---

## 📁 5. Struktur Folder

```
byficloflorist-frontend/
├── public/
├── src/
│   ├── assets/        # gambar, logo, ikon
│   ├── components/    # komponen reusable (Navbar, Hero, Footer, dst.)
│   ├── pages/         # halaman (Landing, Katalog, Detail, dst.)
│   ├── services/      # konfigurasi Axios dan pemanggilan API
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ 6. Menjalankan Secara Lokal

### Prasyarat

- [Node.js](https://nodejs.org) versi LTS terbaru
- npm (otomatis terpasang bersama Node.js)
- Backend sudah berjalan (lihat repositori backend)

### Langkah

```bash
# 1. Clone repositori
git clone https://github.com/<username>/<nama-repo-frontend>.git
cd <nama-repo-frontend>

# 2. Install dependency
npm install

# 3. Siapkan environment variable
cp .env.example .env        # Windows PowerShell: Copy-Item .env.example .env

# 4. Jalankan dev server
npm run dev
```

Buka `http://localhost:5173` di browser.

### Environment Variable

Isi file `.env`:

```
VITE_API_BASE_URL=http://localhost:3000
```

| Variabel | Keterangan |
| --- | --- |
| `VITE_API_BASE_URL` | URL dasar REST API backend |

> ⚠️ Jangan pernah menaruh API key atau password di frontend maupun di GitHub. File `.env` sudah masuk `.gitignore`. Semua nilai berawalan `VITE_` bisa dilihat publik di browser.

### Script yang Tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Build produksi ke folder `dist/` |
| `npm run preview` | Pratinjau hasil build secara lokal |
| `npm run lint` | Memeriksa kerapian kode |

---

## 🚀 7. Deployment

Frontend di-deploy ke **Vercel** dan otomatis diperbarui setiap ada push ke branch `main`.

1. Import repositori ke [Vercel](https://vercel.com).
2. Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`.
3. Tambahkan environment variable `VITE_API_BASE_URL` yang berisi URL backend yang sudah ter-deploy.
4. Klik **Deploy**.

---

## 🤝 8. Alur Kolaborasi

- Branch utama: `main` (selalu stabil).
- Setiap fitur dikerjakan di branch sendiri, misalnya `feat/landing-page`, lalu digabung lewat **Pull Request**.
- Format commit: `feat: ...`, `fix: ...`, `docs: ...`, `style: ...`.
- Kontrak API disepakati bersama tim Backend dan AI sebelum pengembangan fitur terkait.
- Bug dan tugas perbaikan dicatat di **GitHub Issues**.

---

## 👩‍💻 9. Tim A26-CS005

| Nama | Peran |
| --- | --- |
| Syasmi Permata Oktavia | AI Full-Stack Developer |
| Destya Ayu Damayanti | AI Full-Stack Developer |
| Ananda Avenzia | Data Science Specialist |
| Frisca Angellita | Data Science Specialist |
| Via Angelya | Next-Gen AI Engineer |
| Camilla Zahra Asmat | Next-Gen AI Engineer |

---

<p align="center">Dibuat dengan 💐 untuk by.Ficlo Florist dan Dekorasi · Asah 2026</p>