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


