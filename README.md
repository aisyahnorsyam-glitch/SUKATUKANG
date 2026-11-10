# Sukatukang

Laman web dwibahasa untuk Sukatukang, Batu Pahat, Johor. English ialah bahasa lalai, dengan pilihan Bahasa Melayu melalui butang EN/BM.

Dibina menggunakan HTML, CSS dan JavaScript biasa, tanpa React atau langkah build.

## Kandungan

- Pengenalan syarikat dan servis pertukangan mengikut tempahan.
- Profil Syahmi Sukatukang dengan foto daripada bahan yang dibekalkan pemilik.
- Tiga video projek pilihan melalui pemain TikTok rasmi.
- Galeri bergambar dengan penapis dan paparan besar.
- Pautan TikTok dan Instagram Sukatukang.
- WhatsApp admin: 012-542 0514. Emel tidak dipaparkan.
- Pilihan bahasa boleh dikongsi melalui `?lang=en` atau `?lang=ms`.

## Jalankan secara tempatan

Jalankan arahan ini dalam direktori projek:

```sh
python3 -m http.server 8000
```

Kemudian buka http://localhost:8000.

## Struktur fail

- `index.html`: kandungan dan struktur laman.
- `style.css`: reka bentuk responsif dan animasi ringan.
- `i18n.js`: kandungan English/Bahasa Melayu, pilihan bahasa tersimpan dan mesej WhatsApp mengikut bahasa.
- `app.js`: menu, penapis galeri dan paparan gambar besar.
- `videos.js`: kawalan video mengikut paparan skrin.
- `fonts.css`: definisi font yang disimpan secara setempat.
- `assets/`: gambar, logo dan font.

## Video

Video menggunakan iframe rasmi TikTok dan memerlukan sambungan internet. Video diset untuk dimainkan tanpa bunyi apabila kelihatan, dijeda apabila keluar daripada paparan, dan menghormati tetapan kurangkan gerakan. Pelayar atau TikTok mungkin menyekat main automatik; butang Main dan pautan terus ke TikTok disediakan.

## Hosting

Domain tersuai yang dikonfigurasikan: `sukatukang.com`. Domain memerlukan rekod DNS Cloudflare yang menunjuk ke GitHub Pages.

Alamat asal GitHub Pages: https://aisyahnorsyam-glitch.github.io/SUKATUKANG/

Muat naik kandungan direktori ini ke hosting statik. Tiada pangkalan data, kunci API atau proses build diperlukan. Untuk GitHub Pages, buka Settings → Pages, pilih Deploy from a branch, kemudian pilih branch `main` dan folder `/ (root)`. Fail `.nojekyll` disertakan supaya laman statik disajikan terus tanpa pemprosesan Jekyll. Kelayakan Pages bergantung pada pelan GitHub dan keterlihatan repositori.

## Aset

Gambar dan logo dibekalkan oleh pemilik Sukatukang. Hak aset kekal pada pemilik masing-masing. Video kekal dihoskan di TikTok. Font Fraunces dan Hanken Grotesk tertakluk pada lesen sumber asal masing-masing.
