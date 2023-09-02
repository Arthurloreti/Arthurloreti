import { products, categories } from "./productsData.js";

function createCard(product) {
  const card = document.createElement("li");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = product.img;
  img.classList.add("band-img");
  card.appendChild(img);

  const p = document.createElement("p");
  p.innerText = `Por ${product.band} (${product.year})`;
  p.classList.add("band-year");
  card.appendChild(p);

  const h2 = document.createElement("h2");
  h2.innerText = product.title;
  h2.classList.add("band-title");
  card.appendChild(h2);

  const span = document.createElement("span");
  const pSpan = document.createElement("p");
  pSpan.innerText = `R$ ${product.price},00`;
  pSpan.classList.add("price");
  const button = document.createElement("button");
  button.innerText = "Comprar";
  button.classList.add("buy-button");
  span.appendChild(pSpan, button);
  span.classList.add("button__contender");
  card.appendChild(span);

  return card;
}

function renderButton(array) {
  const buttonsList = document.querySelector(".genres-list");
  if (buttonsList) {
    array.forEach((category) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.innerText = category;
      button.classList.add("category-button");
      li.appendChild(button);
      buttonsList.appendChild(li);
      button.addEventListener("click", () => {
        const categoryIndex = categories.indexOf(category);

        if (categoryIndex === 0) {
          filteredProducts = products;
        } else {
          filteredProducts = products.filter((product) => product.category === categoryIndex);
        }
        renderCards(filteredProducts);
      });
    });
  }
}

function renderCards(products) {
  const cardsList = document.querySelector(".cards");
  cardsList.innerHTML = "";
  products.forEach((product) => {
    const card = createCard(product);
    cardsList.appendChild(card);
  });

  if (input.value === "") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((product) => product.price <= newPrice);
  }
}

let filteredProducts = products;

const input = document.querySelector(".filter");
let price = input.value;

input.addEventListener("input", () => {
  const newPrice = Number(price);

  const paragraph = document.querySelector(".price");
  if (paragraph) {
    paragraph.textContent = `Até R$ ${newPrice}`;
  }

  if (newPrice > 0) {
    filteredProducts = products.filter((product) => product.price <= newPrice);
  } else {
    filteredProducts = products;
  }
  renderCards(filteredProducts);
});

renderButton(categories);
renderCards(products);