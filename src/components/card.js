export const displayCards = (initialCards) => {
  const cardTemplate = document.getElementById("cards-template");
  const cardList = document.querySelector(".cards__list");
  const fragment = document.createDocumentFragment();

  initialCards.forEach((card) => {
    const cardElement = cardTemplate.content.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardName = cardElement.querySelector(".card__name");
    const cardAbout = cardElement.querySelector(".card__about");
    const cardPrice = cardElement.querySelector(".card__price");
    const cardPiece = cardElement.querySelector(".card__price-piece");

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardName.textContent = card.name;
    cardAbout.textContent = card.about;
    cardPrice.childNodes[0].nodeValue = `${card.price}`; 
    cardPiece.textContent = ` / ${card.piece}`;

    fragment.appendChild(cardElement);
  });

  cardList.appendChild(fragment);
};
