window.addEventListener("scroll", function () {
  const footer = document.getElementById("footer");
  const scroll = window.pageYOffset;
  const SHOW_HEIGHT = 3400;

  if (scroll > SHOW_HEIGHT) {
    footer.style.opacity = 1.0;
  } else footer.style.opacity = 0; 
});