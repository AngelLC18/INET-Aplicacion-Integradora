window.addEventListener("scroll", () => {
  const toTop = document.querySelector(".to-top");
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
