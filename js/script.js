const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const icon = item.querySelector(".faq-icon img");

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      icon.src = "assets/images/icon-minus.svg";
    } else {
      icon.src = "assets/images/icon-plus.svg";
    }

    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".faq-icon img").src = "assets/images/icon-plus.svg";
      }
    });
  });
});
