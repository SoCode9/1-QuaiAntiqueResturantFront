// Entrées
fetch(apiURL + "food/carte/Entries", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-AUTH-TOKEN": getToken(),
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }
    return response.json(); // on attend du JSON
  })

  .then((data) => {
    // data contient la liste des foods
    console.log(data);
    afficherCarte(data, "allEntries"); // affiche dans le HTML
  })
  .catch((error) => console.error("Erreur fetch :", error));

// Plats
fetch(apiURL + "food/carte/Dishes", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-AUTH-TOKEN": getToken(),
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }
    return response.json(); // on attend du JSON
  })

  .then((data) => {
    // data contient la liste des foods
    console.log(data);
    afficherCarte(data, "allDishes");
  })
  .catch((error) => console.error("Erreur fetch :", error));

// Desserts
fetch(apiURL + "food/carte/Desserts", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-AUTH-TOKEN": getToken(),
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }
    return response.json(); // on attend du JSON
  })

  .then((data) => {
    // data contient la liste des foods
    console.log(data);
    afficherCarte(data, "allDesserts"); 
  })
  .catch((error) => console.error("Erreur fetch :", error));


  
function afficherCarte(foods, category) {
  const conteneur = document.getElementById(category);
  conteneur.innerHTML = "";

  foods.forEach((food) => {
    const html = `
      <div class="col-12 p-3">
        <div class="d-flex justify-content-between fw-bolder">
            <span>${food.title}</span> 
            <span>${food.price}€</span> 
        </div>
        <p>${food.description}</p>
      </div>
    `;
    conteneur.innerHTML += html;
  });
}
