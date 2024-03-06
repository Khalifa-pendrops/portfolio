// function toggleBtn() {
//   const body = document.body;
//   if (
//     window.matchMedia &&
//     window.matchMedia("prefers-color-scheme: dark").matches
//   ) {
//     body.classList.toggle("night");
//     body.style.color = "white";
//   }
// }

function toggleBtn() {
  const body = document.body;
  body.classList.toggle("night");
  body.style.color = "gray";
}

let menuToggle = document.querySelector(".menu-toggle");
let menuBar = document.querySelector(".menu");
// let fadeInparagraph = document.querySelectorAll('fade-in span');

menuToggle.addEventListener("click", function () {
  menuBar.classList.toggle("active");
});

// const fadeInWords = () => {
//   fadeInparagraph.forEach((el, index) => {
//     setTimeout(() => {
//       el.style.opacity = '1';
//     }, index * 1000);
//   });
// };

// window.onload = () => {
//   fadeInWords();
// }
