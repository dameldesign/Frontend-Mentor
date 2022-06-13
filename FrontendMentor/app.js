const menuButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const navContainer = document.querySelector(".nav__container");

menuButton.onclick = (e) => {
  navContainer.classList.add("show");
  closeButton.classList.add("reveal");
  menuButton.classList.add("hide");
};

closeButton.onclick = (e) => {
  navContainer.classList.remove("show");
  closeButton.classList.remove("reveal");
  menuButton.classList.remove("hide");
};

navContainer.addEventListener("mousemove", (e) => {
  if (e.clientX <= 0.315 * document.documentElement.clientWidth) {
    navContainer.classList.remove("show");
    closeButton.classList.remove("reveal");
    menuButton.classList.remove("hide");
  }
});
