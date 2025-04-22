// js/script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll untuk navigasi
    const links = document.querySelectorAll("header a");
  
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Highlight nav aktif bisa ditambahkan di sini jika perlu
  });
  