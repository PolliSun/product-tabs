import "./style.css";

import { displayCards } from "./components/card";
import { setupTabs } from "./components/tabs";

import { initialCards } from "./utils/cards";

document.addEventListener("DOMContentLoaded", () => {
  displayCards(initialCards);
  setupTabs();
});