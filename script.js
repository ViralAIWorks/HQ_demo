const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const track = document.querySelector(".news-track");
const cards = [...document.querySelectorAll(".news-card")];
let newsIndex = 0;

function updateNews() {
  if (window.innerWidth <= 760) return;
  const offset = newsIndex * (100 / 3);
  track.style.transform = `translateX(-${offset}% )`;
  track.style.transition = "transform .35s ease";
}

document.querySelector(".news-arrow.next").addEventListener("click", () => {
  newsIndex = newsIndex < cards.length - 3 ? newsIndex + 1 : 0;
  updateNews();
});

document.querySelector(".news-arrow.prev").addEventListener("click", () => {
  newsIndex = newsIndex > 0 ? newsIndex - 1 : cards.length - 3;
  updateNews();
});
