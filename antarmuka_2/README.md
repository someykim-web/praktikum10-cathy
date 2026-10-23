# Tugas Praktikum 8 – Web Responsive dengan Bootstrap 5.3

**Nama:** Chetrin Fransisca
**NIM:** 825230185
**Mata kuliah:** Pemrograman Front End (Pertemuan 9)

Halaman web responsive yang dibuat mengikuti langkah-langkah modul *Web Responsive dengan Bootstrap 5.3 Sisi Front End – Pertemuan 9*. Bootstrap dipasang secara offline (file diunduh dari getbootstrap.com).

## Struktur Folder

```
antarmuka_2/
├── css/bootstrap.min.css
├── css/style.css            ← Praktikum 10 (CSS eksternal)
├── js/bootstrap.bundle.min.js
├── js/script.js             ← Praktikum 10 (JavaScript eksternal)
├── images/
└── index.html
```

## Bagian Halaman

| Bagian | Komponen Bootstrap |
|---|---|
| Menu | Navbar (Supported content) |
| Slider | Carousel (Captions) |
| Kerangka halaman | Grid: baris atas (8 + 4), tengah (4 + 4 + 4), bawah (4 + 8 dengan 7 + 5) |
| Ringkasan materi | Media object (Utilities → Flex) |
| Daftar materi | List group (Custom content) |
| Galeri foto | Figure, `col-lg-4 col-sm-6 col-12`, `img-fluid rounded` |

Galeri tampil 3 foto per baris di laptop, 2 di tablet, dan 1 di HP.

## Tugas Praktikum 10 – Quiz Web Responsive + JavaScript

Penambahan event JavaScript pada halaman yang sama, **tanpa mengubah struktur HTML**. Di `index.html` hanya ditambahkan dua baris untuk memanggil file eksternal:

```html
<link rel="stylesheet" type="text/css" href="css/style.css">
<script type="text/javascript" src="js/script.js"></script>
```

| Event | Elemen | Hasil |
|---|---|---|
| `input` | Kolom Search di navbar | Teks yang diketik langsung tampil di label merah di atas slider ("Tampilan Input: ..."). Label hilang jika kolom dikosongkan. |
| `click` | Tombol Search | Muncul pesan `alert("Tombol berhasil di Klik")`. Halaman tidak reload (`preventDefault`). |

Label tampilan input dibuat lewat DOM (`createElement`) di `js/script.js` dan diberi gaya di `css/style.css`.

## Materi yang Sudah Dipelajari

- Bab II – CSS
- Bab III – Dasar JavaScript
- Bab IV – Fungsi, Event, dan DOM
- Bab VI – jQuery dan AJAX (API TMDb)
- Bab VII – Bootstrap
- Bab VIII – Layout Dashboard dengan Bootstrap
- Pertemuan 9 – Web Responsive dengan Bootstrap 5.3

## Cara Menjalankan

Buka `index.html` di browser, atau di VS Code klik kanan `index.html` → **Open with Live Server**.
