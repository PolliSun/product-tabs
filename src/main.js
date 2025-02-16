import "./style.css";

import { displayCards } from "./components/card";

import { initialCards } from "./utils/cards";

document.addEventListener("DOMContentLoaded", () => {
  displayCards(initialCards);

  const buttons = document.querySelectorAll(".tabs__button");
  const sections = document.querySelectorAll("main section");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabID = button.dataset.tab;
      const targetSection = document.getElementById(tabID);

      buttons.forEach((btn) => btn.classList.remove("tabs__button--active"));
      sections.forEach((section) => section.setAttribute("hidden", "true"));

      button.classList.add("tabs__button--active");
      if (targetSection) {
        targetSection.removeAttribute("hidden");
      }
    });
  });
});
