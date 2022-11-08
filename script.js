// membuat object angkot
function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  //   ketika penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    // cek jika angkot kosong
    if (this.penumpang.length === 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    }
    // jika ada kursi kosong dengan nama undefined
    else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) {
          // masukan penumpang / naikkan penumpang
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        }
        // jika ada nama penumpang yang sama yang mau naik tampilkan alert
        else if (this.penumpang[i] == namaPenumpang) {
          alert(
            "Penumpang dengan nama " +
              namaPenumpang +
              " Sudah ada di dalam Angkot."
          );
          return false;
        }
        // jika tidak ada kursi yang undefined / penuh
        else if (i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  //   ketika penumpang turun
  this.penumpangTurun = function (namaPenumpang, bayar) {
    // cek angkotnya jika masih kosong
    if (this.penumpang.length === 0) {
      alert("Angkot masih kosong!");
      return false;
    }
    // cek jika angkotnya tidak kosong
    for (var i = 0; i < this.penumpang.length; i++) {
      // cek jika ada nama penumpang yang sesuai
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
      //   jika tidak ada nama yang sesuai
      else if (i == this.penumpang.length - 1) {
        alert("Tidak ada penumpang dengan nama " + namaPenumpang);
        return false;
      }
    }
  };
}

var angkot1 = new Angkot("Galih", ["Cicaheum", "Cibiru"], [], 0);
var angkot2 = new Angkot("Arizza", ["Ciroyom", "Antapani"], [], 0);
