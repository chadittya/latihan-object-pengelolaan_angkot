# PROGRAM PENGELOLAAN ANGKOT DENGAN JAVASCRIPT MENGGUNAKAN OBJECT

## 1. INTRO

Ini adalah program hasil pembelajaran saya mengenai Javascript dengan menggunakan object. Project ini saya dapatkan dari source belajar saya di channel youtube [**Web Programming UNPAS**](https://youtu.be/JtESnohPUIw).

## 2. STRUKTUR OBJEK ANGKOT

Struktur awal object **angkot1** dan **angkot2** adalah sebagai berikut

```
{
    supir : namaSupir;
    trayek : [];
    penumpang : [];
    kas: 0;
}
```

## 3. CARA PENGGUNAAN

Untuk menggunakan program ini mudah saja, dikarenakan project ini adalah project latihan, cara penggunaannya masih dengan cara menginputkan function - function yang sudah saya buat pada [script.js](script.js) pada console.

### 3.1 CEK KESEDIAAN ANGKOT

untuk mengecek kesediaan angkot, bisa menginputkan variabel:

```
angkot1
```

dan

```
angkot2
```

### 3.2 MENAIKKAN PENUMPANG

Untuk menambah penumpang / menaikkan penumpang, bisa menginputkan variabel:

```
angkot1.penumpangNaik(namaPenumpang)
```

contoh:

```
angkot1.penumpangNaik('Ferdi')
```

atau

```
angkot2.penumpangNaik(namaPenumpang)
```

Nama penumpang yang sama, expected terkena validasi dikarenakan untuk menghandle kebingungan program saat menurunkan penumpang.

### 3.3 MENURUNKAN PENUMPANG

Untuk menurunkan penumpang, bisa menginputkan variabel :

```
angkot1.penumpangTurun(namaPenumpang, bayar)
```

contoh:

```
angkot1.penumpangTurun('Ferdi', 5000)
```

atau

```
angkot2.penumpangTurun(namaPenumpang, bayar)
```
