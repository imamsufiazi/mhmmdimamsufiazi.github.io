//menu dropdown muncul saat diklik
function navbarDropdown() {
    document.getElementById("dropdown-konten").classList.toggle("show");
}

//menutup dropdown menu dengan klik elemen lainnya
window.onclick = function(e) {
  if (!e.target.matches('.tombol-dropdown')) {
    const konten = document.getElementById("dropdown-konten");
    if (konten.classList.contains('show')) {
      konten.classList.remove('show');
    }
  }
}