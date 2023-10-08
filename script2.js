var chevron = document.getElementById("chevron1");
var toggleContents = document.getElementById("moreisa");

chevron.addEventListener("click", function() {
  // Vérifiez l'état actuel du contenu supplémentaire
  if (toggleContents.classList.contains("show")) {
    // Masquez le contenu supplémentaire
    toggleContents.style.height = "0";
    chevron.style.transform = "rotate(180deg)";
  } else {
    // Affichez le contenu supplémentaire
    toggleContents.style.height = toggleContents.scrollHeight + "px";
    chevron.style.transform = "rotate(0deg)";
  }
  toggleContents.classList.toggle("show");
});

var chevron2 = document.getElementById("chevron2");
var toggleContents2 = document.getElementById("morerobot");

chevron2.addEventListener("click", function() {
  // Vérifiez l'état actuel du contenu supplémentaire
  if (toggleContents2.classList.contains("show")) {
    // Masquez le contenu supplémentaire
    toggleContents2.style.height = "0";
    chevron2.style.transform = "rotate(180deg)";
  } else {
    // Affichez le contenu supplémentaire
    toggleContents2.style.height = toggleContents2.scrollHeight + "px";
    chevron2.style.transform = "rotate(0deg)";
  }
  toggleContents2.classList.toggle("show");
});
