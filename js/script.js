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

// Toast Bootstrap
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

// Toooltip Start
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
