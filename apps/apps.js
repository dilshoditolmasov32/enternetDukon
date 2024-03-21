const products = document.querySelector(".cards");
const navbarResposive = document.querySelector("#navbar-responsive");
const menuBtn = document.querySelector(".meu-btn");

menuBtn.addEventListener("click", () => {
  navbarResposive.classList.toggle("open");
});
// products.addEventListener("click", (e) => {
//   e.preventDefault();
//   let product=
// });
