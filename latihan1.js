//buatlah sebuah objek untuk menampung data siswa, dimana didalamnya terdapat beberapa property seperti nama, program studi, smt, mata_kuliah (beberapa mata kuliah yang sedang ambil)
//tampilkan nama mahasiswa, program studi dan mata kuliah yang diambil
//kemudian salah satu mata kuliah, dan tambahkan 1 mata kuliah


const datasiswa  ={
    'name' : 'Wuni',
    'prodi' : 'Manajemen Informatika',
    'semester' : 7,
    'matakuliah' : ['Web Developer, Matpen, bootcamp']
}

console.log(datasiswa);
console.log(datasiswa.nama);
console.log(datasiswa.Prodi);
console.log(datasiswa.matakuliah);

datasiswa.matakuliah[1]='basisdata';
console.log (datasiswa.matakuliah);

