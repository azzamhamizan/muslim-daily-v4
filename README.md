# ☪ Muslim Daily — Toolkit Islami Harian

**Muslim Daily** adalah Progressive Web App (PWA) islami yang lengkap, dirancang dengan tampilan modern dan responsif. Dapat diakses dari browser maupun diinstall langsung ke homescreen perangkat.

---

## ✨ Fitur

| Fitur | Deskripsi |
|---|---|
| 🏠 **Dashboard** | Salam, waktu sholat berikutnya, countdown, dan hadis harian |
| 🕌 **Jadwal Sholat** | Waktu sholat berdasarkan GPS (Subuh, Dzuhur, Ashar, Maghrib, Isya) |
| 🧭 **Arah Kiblat** | Kompas digital menuju Ka'bah menggunakan sensor perangkat |
| 📿 **Tasbih Digital** | Counter dzikir dengan haptic feedback dan riwayat tersimpan |
| 📖 **Dzikir Harian** | Dzikir pagi & petang dengan checklist dan teks Arab |
| 📅 **Kalender Islam** | Tanggal hijriyah dan event-event Islam besar |
| 💬 **Hadis Harian** | 30 hadis pilihan dengan fitur bookmark |

---

## 🛠️ Teknologi

- **HTML5** — Struktur semantik
- **CSS3** — Desain modern dengan CSS Variables, Glassmorphism
- **Vanilla JavaScript** — Tanpa framework apapun
- **PWA** — Service Worker + Web App Manifest
- **AlAdhan API** — Data waktu sholat real-time
- **Geolocation API** — Deteksi lokasi otomatis
- **DeviceOrientation API** — Sensor kompas kiblat
- **localStorage** — Penyimpanan data lokal

---

## 📁 Struktur Proyek

```
muslim-daily/
│
├── index.html          # Halaman utama
├── style.css           # Semua styling
├── app.js              # Logic aplikasi
├── manifest.json       # PWA manifest
├── service-worker.js   # Caching & offline support
├── icon-192.png        # Icon PWA 192x192
├── icon-512.png        # Icon PWA 512x512
└── README.md           # Dokumentasi ini
```

---

## 🚀 Cara Menjalankan Lokal

### Opsi 1: Python (Recommended)
```bash
# Clone atau download project
cd muslim-daily

# Python 3
python3 -m http.server 8000

# Buka di browser
open http://localhost:8000
```

### Opsi 2: Node.js (npx)
```bash
npx serve .
```

### Opsi 3: VS Code Live Server
1. Install ekstensi **Live Server** di VS Code
2. Klik kanan `index.html` → **Open with Live Server**

> ⚠️ **Penting:** Aplikasi harus dijalankan melalui server (bukan langsung buka file), agar Service Worker dapat berfungsi.

---

## 🌐 Deploy ke GitHub Pages

### Langkah 1: Buat Repository GitHub
```bash
git init
git add .
git commit -m "Initial commit: Muslim Daily PWA"
```

### Langkah 2: Push ke GitHub
```bash
# Ganti YOUR_USERNAME dan YOUR_REPO
git remote add origin https://github.com/YOUR_USERNAME/muslim-daily.git
git branch -M main
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Klik **Settings** → **Pages**
3. Di bagian **Source**, pilih branch `main` dan folder `/ (root)`
4. Klik **Save**
5. Tunggu beberapa menit, lalu akses di:
   ```
   https://YOUR_USERNAME.github.io/muslim-daily/
   ```

### Langkah 4: Update `start_url` di manifest.json (opsional)
Jika nama repository bukan `muslim-daily`, update `start_url` di `manifest.json`:
```json
{
  "start_url": "/NAMA_REPOSITORY/index.html",
  "scope": "/NAMA_REPOSITORY/"
}
```

---

## 📱 Cara Install ke Homescreen

### Android (Chrome)
1. Buka aplikasi di Chrome
2. Tap ikon **⋮** (menu) → **Add to Home screen**
3. Tap **Add**

### iOS (Safari)
1. Buka aplikasi di Safari
2. Tap ikon **Share** (kotak dengan panah ke atas)
3. Pilih **Add to Home Screen**
4. Tap **Add**

---

## ⚙️ Konfigurasi

### Mengubah Metode Kalkulasi Waktu Sholat
Di file `app.js`, cari baris:
```js
const url = `https://api.aladhan.com/v1/timings/...&method=11`;
```
Ganti angka `method` sesuai kebutuhan:
- `2` — Islamic Society of North America (ISNA)
- `3` — Muslim World League
- `4` — Umm Al-Qura, Makkah
- `5` — Egyptian General Authority of Survey
- `11` — Majlis Ugama Islam Singapura (MUIS) — **Default**

### Menambah Hadis
Di file `app.js`, tambahkan ke array `DATA.hadiths`:
```js
{
  id: 31,
  arabic: "النص العربي",
  text: "Teks terjemahan hadis",
  source: "HR. Sumber"
}
```

### Menambah Dzikir
Di file `app.js`, tambahkan ke `DATA.dzikir.pagi` atau `DATA.dzikir.petang`:
```js
{
  id: "p8",
  name: "Nama Dzikir",
  arabic: "النص العربي للذكر",
  translation: "Terjemahan dzikir",
  count: 3
}
```

---

## 🎨 Kustomisasi Warna

Di file `style.css`, ubah CSS Variables di bagian `:root`:
```css
:root {
  --green: #1E7F4B;       /* Warna hijau utama */
  --green-light: #27A261; /* Hijau terang */
  --gold: #C9A84C;        /* Warna emas */
  --bg: #0a1628;          /* Background gelap */
}
```

---

## 🔌 API yang Digunakan

| API | Tujuan | Dokumentasi |
|---|---|---|
| [AlAdhan API](https://aladhan.com/prayer-times-api) | Waktu sholat | `api.aladhan.com/v1/timings` |
| [BigDataCloud](https://www.bigdatacloud.com/) | Nama kota (reverse geocode) | Gratis, tanpa API key |

---

## 📋 Browser Support

| Browser | Support |
|---|---|
| Chrome (Android/Desktop) | ✅ Penuh |
| Safari (iOS) | ✅ Penuh |
| Firefox | ✅ Penuh |
| Samsung Internet | ✅ Penuh |
| Edge | ✅ Penuh |

> Sensor kompas kiblat memerlukan HTTPS dan perangkat yang memiliki sensor gyroscope/magnetometer.

---

## 🤝 Kontribusi

Pull request sangat disambut! Beberapa ide pengembangan:
- [ ] Notifikasi adzan (Push Notification)
- [ ] Al-Quran reader
- [ ] Lebih banyak koleksi dzikir
- [ ] Widget jam sholat
- [ ] Suara adzan

---

## 📄 Lisensi

MIT License — Bebas digunakan dan dikembangkan.

---

<p align="center">
  Made with ❤️ for Muslims everywhere<br>
  <em>بَارَكَ اللَّهُ فِيكُمْ</em>
</p>
