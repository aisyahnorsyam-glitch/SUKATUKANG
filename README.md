# SukaTukang

Laman web satu halaman dalam Bahasa Melayu untuk SukaTukang, sebuah jenama di bawah Burgertor Enterprise, Batu Pahat, Johor.

Dibina menggunakan HTML, CSS dan JavaScript biasa, tanpa React atau langkah build.

## Kandungan

- Pengenalan syarikat dan servis pertukangan mengikut tempahan.
- Tiga video projek pilihan melalui pemain TikTok rasmi.
- Galeri bergambar dengan penapis dan paparan besar.
- Pautan TikTok dan Instagram SukaTukang.
- Telefon dan WhatsApp admin: 012-542 0514.

## Jalankan secara tempatan

Jalankan arahan ini dalam direktori projek:

```sh
python3 -m http.server 8000
```

Kemudian buka http://localhost:8000.

## Struktur fail

- `index.html`: kandungan dan struktur laman.
- `style.css`: reka bentuk responsif dan animasi ringan.
- `app.js`: menu, penapis galeri dan paparan gambar besar.
- `videos.js`: kawalan video mengikut paparan skrin.
- `fonts.css`: definisi font yang disimpan secara setempat.
- `assets/`: gambar, logo dan font.

## Video

Video menggunakan iframe rasmi TikTok dan memerlukan sambungan internet. Video diset untuk dimainkan tanpa bunyi apabila kelihatan, dijeda apabila keluar daripada paparan, dan menghormati tetapan kurangkan gerakan. Pelayar atau TikTok mungkin menyekat main automatik; butang Main dan pautan terus ke TikTok disediakan.

## Hosting

Muat naik kandungan direktori ini ke hosting statik. Tiada pangkalan data, kunci API atau proses build diperlukan. Penerbitan GitHub Pages boleh diaktifkan berasingan daripada tetapan repositori.

## Aset

Gambar dan logo dibekalkan oleh pemilik SukaTukang. Hak aset kekal pada pemilik masing-masing. Video kekal dihoskan di TikTok. Font Fraunces dan Hanken Grotesk tertakluk pada lesen sumber asal masing-masing.
