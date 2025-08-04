const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("X-AUTH-TOKEN", getToken());

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("http://127.0.0.1:8000/api/picture/restaurant/1", requestOptions)
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
              <img src="${picture.slug}" class="rounded w-100" alt="">
              <p class="titre-image">${picture.title}</p>
              <div class="action-image-buttons" data-show="admin">
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
