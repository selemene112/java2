function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  // Validasi jumlah data dalam dataArray
  if (dataArray.length <= 5) {
    return console.log('Jumlah angka dalam dataArray harus lebih dari 5');
  }

  // Validasi nilaiAwal < nilaiAkhir
  if (nilaiAwal > nilaiAkhir) {
    return console.log('Nilai akhir harus lebih besar dari nilai awal');
  }

  // Mencari data yang memiliki nilai di antara nilaiAwal dan nilaiAkhir
  const hasilPencarian = dataArray.filter((data) => data > nilaiAwal && data < nilaiAkhir);

  // Menampilkan hasil pencarian
  if (hasilPencarian.length > 0) {
    // validasi apakah di hasil pencarian di temukan array atau tidak
    console.log(hasilPencarian.sort((a, b) => a - b)); // Fungsi pembanding ini mengurutkan elemen secara ascending (naik) berdasarkan nilai numeriknya.
  } else {
    console.log('Nilai tidak ditemukan');
  }
}

SeleksiNilai(4, 20, [2, 25, 4, 14, 17, 30, 8]);
// SeleksiNilai(15, 16, [2, 25, 4, 14, 17, 30, 8]);
// SeleksiNilai(5, 17, [2, 25, 4]);
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
