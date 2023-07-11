// script.js

const productData = {
  "Products": [
    {
      "id": 1,
      "Name": "Men's BalancePlus 704 Series Curling Shoes",
      "imageURL": "product1.webp"
    },
    // ... add more product objects here
	{
  "id": 2,
  "Name": "Women's Goldline Velocity Curling Shoes",
  "imageURL": "product2.jpeg"
},
{
  "id": 3,
  "Name": "Goldline Impact Curling Broom",
  "imageURL": "product3.webp"
},
{
  "id": 4,
  "Name": "Goldline Curling Rock Tree Ornament",
  "imageURL": "product4.webp"
},
{
  "id": 5,
  "Name": "Asham Pad Cleaning Brush",
  "imageURL": "product5.webp"
},
{
  "id": 6,
  "Name": "Curling Rock Cake Mold",
  "imageURL": "product6.jpeg"
},
{
  "id": 7,
  "Name": "New Blue Trefor Granite Curling Stones with Single Blue Hone Inserts",
  "imageURL": "product7.jpeg"
},
{
  "id": 8,
  "Name": "NEW Direct Drive BOSS Battery Powered Ice Scraper with International Charger",
  "imageURL": "product8.png"
},
{
  "id": 9,
  "Name": "LRM Standard Laser Curling Stone Measure",
  "imageURL": "product9.jpeg"
},
{
  "id": 10,
  "Name": "Competition Dial Measure",
  "imageURL": "product10.jpeg"
}
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");

  productData.Products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${product.imageURL}" alt="${product.Name}">
      <h3>${product.Name}</h3>
    `;

    cardContainer.appendChild(card);
  });
});
