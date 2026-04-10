function toggleMode(button) {
  const img = button.querySelector("img")
  img.classList.toggle("untoggle")

  if (img.classList.contains("untoggle")) {
    img.setAttribute("src", "./assets/unchecked.png")
  } else {
    img.setAttribute("src", "./assets/checked.png")
  }
}
