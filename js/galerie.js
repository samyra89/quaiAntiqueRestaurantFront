// js/galerie.js
const galerieImage = document.getElementById("allImages");
// Récupérer les information des images

// échapper le texte
let titre =
  " <img src=x onerror=\"window.location.replace('https://google.com')\"/>";
let imgSource = "../images/chef.jpg";
let monImage = getImage(titre, imgSource);
// injecter les info des images dans le html
galerieImage.innerHTML = monImage;

function getImage(titre, urlImage) {
  titre = sanitizeHtml(titre); // fonction pour échapper les caractères
  urlImage = sanitizeHtml(urlImage);
  return `
      <div class="col p-3">
      <div class="image-card text-white">
        <img src="${urlImage}" class="rounded w-100" />
        <p class="titre-image">${titre}</p>
        <div class="action-image-buttons" data-show="admin">
          <button
            class="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#editionPhotoModal"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button
            class="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#deletePhotoModal"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}
