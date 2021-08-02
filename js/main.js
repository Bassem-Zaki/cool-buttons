const toggleBtn = document.querySelectorAll(".icons-btn li");

toggleBtn.forEach((icons) => {
  icons.addEventListener("click", function () {
    toggleBtn.forEach((icon) => icon.classList.remove("active"));
    this.classList.add("active");
  });
});
