//program menampilkan jumlah bus dan bus beroperasi
const hari = ["senin", "selasa", "Rabu", "Kamis",
                 "Jumat", "Sabtu","Minggu"];
const minggu  = 4;
const bulan = ["Januari", "Februari", "Maret" + "April", "Mei",
                "Juni", "Juli", "Agustus", "September", "Oktober",
                "November", "Desember"];

for(let i = 0; i < hari.length; i++) {
    console.log("minggu ke 1 " + "Bus ke " + i + " Berjalan dengan baik di Hari " + hari[i]  )
}
console.log("Total bus : " + hari.length);
console.log("======================")
console.log('\n')

//data mingguan operasi hanya bus 2 yang berjalan

for(let j = 1; j <= minggu; j++) {
    if(j === 2){
        console.log("bus " + j + " pada minggu ke " + j + " Berjalan dengan baik")
    } else {
        console.log("bus " + j +" pada minggu ke " + j + " tidak beroperasi")
    }
}

//data bulanan

let k = 0;
while(k <= bulan.length) {

}