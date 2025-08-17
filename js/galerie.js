const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-AUTH-TOKEN", getToken());

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(apiURL + "picture/restaurant/1", requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }
    return response.json(); // on attend du JSON
  })
  .then((data) => {
    console.log("Image reçue :", data);

    const galerieImage = document.getElementById("allImages");
    galerieImage.innerHTML = ""; // vider l'existant

    data.forEach((picture) => {
      const imageHTML = `
        <div class="col p-3">
          <div class="image-card text-white">
              <img src="${BACKEND_URL}${picture.slug}" class="rounded w-100" alt=""/>
              <p class="titre-image">${picture.title}</p>
              <div class="action-image-buttons" data-show="ROLE_ADMIN">
                    <button  type="button" class="btn btn-outline-light" data-bs-toggle="modal"
                        data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"
                        data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                </div>
          </div>
        </div>`;

      galerieImage.innerHTML += imageHTML;

      showAndHideElementsForRoles();
    });
  })
  .catch((error) => console.error("Erreur fetch :", error));

function newPicture() {
  const title = document.getElementById("NamePhotoInput").value;
  const file = document.getElementById("ImageInput").files[0];

  const formData = new FormData();
  formData.append("title", title);
  formData.append("file", file);
  formData.append("restaurant", 1); // adapte dynamiquement si besoin

  fetch(apiURL + "picture", {
    method: "POST",
    headers: {
      "X-AUTH-TOKEN": getToken(),
    },
    body: formData,
  })
    .then(async (res) => {
      const text = await res.text();
      if (!res.ok) throw new Error(text);
      try {
        const json = JSON.parse(text);
        console.log("Image enregistrée :", json);
        window.location = "/galerie";
      } catch (e) {
        console.error("Réponse non JSON :", text);
      }
    })
    .catch((err) => console.error("Erreur :", err));
}
