<p align="center">
  <a href="https://https://github.com/Debugging-demon/Bingle-Shop" target="blank"><img src="https://res.cloudinary.com/deb05crrf/image/upload/v1683719945/express_vre91p.webp" width="200" alt="Node.js" /></a>
</p>

<h1 align="center">TODO LIST</h1>


<h2 color="red">berikut adalah jawaban dari mock test pada soal 1 dan 2 </h2>

## soal 1
Apakah Kegunaan JSON pada REST API?

jawaban:

secara umum, penggunaan JSON dalam implementasi REST API adalah sebagai format pertukaran 
data antara server dan client.
secara khusus, fungsi dari JSON adalah sebagai berikut:

-   Serialization dan Deserialization: yaitu mengubah data yang digunakan didalam bahasa pemograman menjadi JSON
    dan sebaliknya.

-   sebagai komunikasi Antar Platform

-   Parsing Data dari client ke server

-   Fleksibilitas: JSON mendukung struktur data yang fleksibel dengan menggunakan objek, array, 
    dan nilai-nilai primitif seperti string, angka, boolean, dan null. 

-   Dukungan oleh Banyak Bahasa Pemrograman

-   struktur penulisan yang simple


## soal 2
Jelaskan bagaimana REST API bekerja!

jawaban:

REST API (Representational State Transfer Application Programming Interface) adalah metode komunikasi 
yang digunakan antara klien (seperti aplikasi web atau perangkat mobile) dan server untuk bertukar data. 
Beberapa poin penting tentang cara kerja REST API adalah sebagai berikut:

-   Sumber daya: API berfokus pada sumber daya yang dapat diakses melalui URL unik. 
    Setiap sumber daya memiliki operasi yang dapat dilakukan, seperti membaca, menulis,
    memperbarui, atau menghapus.

-   Metode HTTP: API menggunakan metode HTTP seperti GET, POST, PUT, dan DELETE untuk mengakses dan memanipulasi 
    sumber daya. Misalnya, GET digunakan untuk mendapatkan data, POST untuk membuat data baru, PUT untuk 
    memperbarui data, dan DELETE untuk menghapus data.

-   Representasi data: Data dikirimkan dalam format yang umum seperti JSON atau XML. Representasi data ini 
    berisi informasi tentang sumber daya yang diminta atau diubah.

-   Stateless: API tidak menyimpan informasi tentang status klien di server. Setiap permintaan harus 
    mencakup semua informasi yang diperlukan untuk memprosesnya, sehingga tidak ada ketergantungan pada 
    permintaan sebelumnya.

-   Antarmuka bersifat universal: API menggunakan antarmuka yang umum berdasarkan standar protokol HTTP. 
    Ini memungkinkan komunikasi antara berbagai aplikasi dan platform yang berbeda.

-   Dengan menggunakan REST API, klien dapat berkomunikasi dengan server untuk mengakses dan memanipulasi 
    sumber daya. API menggunakan metode HTTP dan format data yang umum untuk memastikan komunikasi yang efisien 
    dan interoperabilitas antar platform.