const scriptURL = 'https://script.google.com/macros/s/AKfycbyzqzZUi8XLT8MCB_-KmvwX9xuSOg41AYheigFQcNi45K-GJXrkIKzGvINHtNb5mC2EhQ/exec'

const form = document.forms['contact-form'] //mendapatkan elemen formulir

form.addEventListener('submit', e => { //menambahkan event listener untuk event submit.
  e.preventDefault() //mencegah pengiriman formulir default.
  fetch(scriptURL, { method: 'POST', body: new FormData(form)}) //mengirim data formulir ke URL Google Apps Script menggunakan metode POST.
  .then(response => alert("Thank you! your form is submitted successfully." )) //menampilkan pesan sukses dan memuat ulang halaman setelah pengiriman berhasil.
  .then(() => { window.location.reload(); }) //menampilkan pesan sukses dan memuat ulang halaman setelah pengiriman berhasil.
  .catch(error => console.error('Error!', error.message)) //menangani kesalahan dengan menampilkan pesan error di konsol.
})