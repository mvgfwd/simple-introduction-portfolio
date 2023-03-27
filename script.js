console.log("connected");

const submitForm = (e) => {
  const demo = document.getElementById("demo");
  const inputFullName = document.getElementById("exampleInputEmail1").value;
  const inputEmail = document
    .getElementById("exampleInputEmail12")
    .value.includes("@");
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

  console.log("harusnya gak kesini");

  console.log("submitted");
};
