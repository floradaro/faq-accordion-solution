const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".faq-icon img"); // Seleccionar la imagen del icono

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    // Alternar las imágenes entre plus y minus
    if (item.classList.contains("active")) {
      icon.src = "assets/images/icon-minus.svg"; // Cambia a la imagen de menos
    } else {
      icon.src = "assets/images/icon-plus.svg"; // Cambia de vuelta a la imagen de más
    }

    // Opcional: Cierra los otros items abiertos
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".faq-icon img").src = "assets/images/icon-plus.svg"; // Restablece el ícono de plus
      }
    });
  });
});
