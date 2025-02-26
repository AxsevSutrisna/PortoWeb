// Menambahkan class "active" ke menu yang dipilih
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
