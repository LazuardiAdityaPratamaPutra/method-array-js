// Latihan 1 : Daftar Bilangan Genap
let latihan1 = console.log('Latihan 1 : Daftar Bilangan Genap');
let angka = [1,2,3,4,5,6,7,8,9,10];
// Menampilkan daftar bilangan genap
let hasil1 = angka.filter(function (e) {
  return e % 2 === 0;
  // Mengalikan hasil diatas dengan 3
}).map(function (e) {
  return e * 3;
  // Menggabungkan elemennya dalam satu baris
}).join(',');
console.log(hasil1);

// Latihan 2 : Hitung Jumlah Karakter Nama
let latihan2 = console.log('Latihan 2 : Hitung Jumlah Karakter Nama');
let nama = ['Budi','Ani','Citra','Dedi'];
// Menghitung panjang setiap nama
let hasil2 = nama.map(function (e) {
  return e.length;
  // Menggabungkan elemennya dalam satu baris
}).join(',');
console.log(hasil2);

// Latihan 3 : Cari Nama Tertentu
let latihan3 = console.log('Latihan 3 : Cari Nama Tertentu');
let nama1 = ['Budi','Ani','Citra','Dedi'];
// Mencari nama tertentu
let hasil3 = nama.find(function (e) {
  return e.length === 3;
  // Menggabungkan elemennya dalam satu baris
});
console.log(hasil3);

// Latihan 4 : Kelola Keranjang Belanja
let latihan4 = console.log('Latihan 4 : Kelola Keranjang Belanja');
let buah = ['Apel','Jeruk'];
// Menambahkan elemen mangga di akhir array
buah.push('Mangga');
// Menambahkan elemen pisang di awal array
buah.unshift('Pisang');
// Menghilangkan elemen mangga di akhir array
buah.pop();
// Menggabungkan elemennya di dalam satu baris
console.log(buah.join(', '));

// Latihan 5 : Potong dan Sisipkan Data
let latihan5 = console.log('Latihan 5 : Potong dan Sisipkan Data');
let angka2 = [10,20,30,40,50];
// Mengambil elemen 20,30,40
let hasil4 = angka2.slice(1,3);
// Menyisipkan angka 25
hasil4.splice(1,0, 25);
// Menggabungkan elemennya di dalam satu baris
console.log(hasil4.join(', '));

// Latihan 6 : Daftar Playlist Musik
let latihan6 = console.log('Latihan 6 : Daftar Playlist Musik');
let song = ['Song A','Song B','Song C'];
let hasil5 = [];
// Menampilkan semua elemen dengan forEach
song.forEach(function (e) {
  hasil5.push(e);
});
// Menggabungkan elemennya di dalam satu baris
console.log(hasil5.join(','));







