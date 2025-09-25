// Initialize cart data from localStorage
let dataState = JSON.parse(localStorage.getItem("data")) || [];

// Handle Add to Cart clicks
window.addEventListener("click", (event) => {
  const target = event.target;

  if (target.innerText.trim() === "Add to Cart") {
    // Traverse DOM once for product info
    const productCard = target.closest(".product-card"); // Assuming each product has a container with class 'product-card'
    const cover = productCard.querySelector("img").src;
    const name = productCard.querySelector(".product-name").innerText;
    const price = productCard.querySelector(".product-price span").innerText.slice(1);
    const lastPriceEl = productCard.querySelector(".product-price del");
    const lastPrice = lastPriceEl ? lastPriceEl.innerText : null;

    // Create product object
    const data = {
      cover,
      name,
      price,
      value: Math.random() * 1e60,
      lastprice: lastPrice,
    };

    // Save to localStorage
    dataState.push(data);
    localStorage.setItem("data", JSON.stringify(dataState));

    // Alert user
    alert(`${name} Added to cart!`);
  }
});

// Bi-list menu handling
const biList = document.querySelector(".bi-list");
const secondNavbarBiListClicked = document.querySelector(".second-navbar-bi-list-clicked");
const closeListBtn = document.querySelector(".close-list-btn");

biList.addEventListener("click", () => {
  secondNavbarBiListClicked.style.top = "0rem";
});

closeListBtn.addEventListener("click", () => {
  secondNavbarBiListClicked.style.top = "-40rem";
  setTimeout(() => location.reload(), 500);
});
