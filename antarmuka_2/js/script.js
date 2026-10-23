// =====================================================
// Tugas Praktikum 10 - Web Responsive + JavaScript
// Event Input dan Event Click pada kolom & tombol Search
// =====================================================

// Mengambil elemen yang sudah ada di index.html
var formCari   = document.querySelector('form[role="search"]');
var inputCari  = formCari.querySelector('input[type="search"]');
var tombolCari = formCari.querySelector('button[type="submit"]');
var slider     = document.getElementById('carouselExampleCaptions');

// Membuat elemen untuk tampilan input (diletakkan di atas slider)
var tampilan = document.createElement('div');
tampilan.id = 'tampilan-input';
slider.appendChild(tampilan);

// 1. EVENT INPUT
// Setiap kali kolom Search diketik, teksnya ditampilkan di atas slider
inputCari.addEventListener('input', function () {
  var teks = inputCari.value;

  if (teks.trim() === '') {
    // Jika kolom kosong, tampilan disembunyikan
    tampilan.classList.remove('tampil');
    tampilan.innerHTML = '';
  } else {
    tampilan.innerHTML = 'Tampilan Input: <b></b>';
    tampilan.querySelector('b').textContent = teks;
    tampilan.classList.add('tampil');
  }
});

// 2. EVENT CLICK
// Jika tombol Search diklik, tampilkan pesan
tombolCari.addEventListener('click', function (event) {
  event.preventDefault(); // agar halaman tidak reload saat form dikirim
  alert('Tombol berhasil di Klik');
});

// Mencegah halaman reload jika user menekan Enter di kolom Search
formCari.addEventListener('submit', function (event) {
  event.preventDefault();
});
