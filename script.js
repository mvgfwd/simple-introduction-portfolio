console.log("connected");

const submitForm = (e) => {
  const demo = document.getElementById("demo");
  const inputFullName = document.getElementById("inputNama").value;
  const inputEmail = document.getElementById("inputEmail").value.includes("@");
  const suksesmengirim = document.getElementById("suksesmengirim");

  function containsNumber(str) {
    return /\d/.test(str);
  }

  if (inputFullName.length < 1) {
    alert("Nama tidak boleh kosong");
    suksesmengirim.classList.remove("show");
    return false;
  }
  if (containsNumber(inputFullName)) {
    alert("Nama tidak bisa mengandung angka");
    suksesmengirim.classList.remove("show");
    return false;
  }

  if (!inputEmail) {
    alert("Masukkan Email dengan Benar");
    return false;
  }

  suksesmengirim.classList.add("show");

  const nama = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail").value;
  const pesan = document.getElementById("pesan").value;

  console.log("submitted", nama, email, pesan);
};
