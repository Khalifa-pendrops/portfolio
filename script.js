
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



function hamburgerToggle() {
  let icon = document.querySelector('.night-icon');
  icon.classList.add('hidden');
  let menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "flex" || menu.style.display === "" ? "none" : "flex";
  menu.classList.toggle('active');
  
}

