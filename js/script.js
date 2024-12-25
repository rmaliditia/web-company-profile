// Menu active
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Hapus class active dari semua menu
    document
      .querySelectorAll(".nav-link")
      .forEach((item) => item.classList.remove("active"));

    // Tambahkan class active pada elemen yang diklik
    this.classList.add("active");
  });
});
