//js/script.js
// placer le token en cookie
const tokenCookieName = "accesstoken";
const signoutBtn = document.getElementById("signout-btn");
const roleCookieName = "role";
const apiUrl = "https://127.0.0.1:8000/api/";
//getInfosUser(); // juste pour tester la récupération
function getRole() {
  return getCookie(roleCookieName);
}

signoutBtn.addEventListener("click", signout);

function signout() {
  eraseCookie(tokenCookieName);
  eraseCookie(roleCookieName);
  window.location.reload();
}

function setToken(token) {
  setCookie(tokenCookieName, token, 7);
}
// récupérer le token
function getToken() {
  return getCookie(tokenCookieName);
}

// gérer les cookies
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (const element of ca) {
    let c = element;
    while (c.startsWith(" ")) c = c.substring(1, c.length);
    if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}

/* affichage suivant la situation connected/deconnected et le role*/

function showAndHideElementsForRoles() {
  // connaitre role et connexion de l'utilisateur
  const userConnected = isConnected();
  const role = getRole();
  // récupérer les élts dom
  let allElementsToEdit = document.querySelectorAll("[data-show]");
  allElementsToEdit.forEach((element) => {
    switch (element.dataset.show) {
      case "disconnected":
        //si l'utilisateur est connecté on masque connecter
        if (userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "connected":
        // si l'utilisateur n'est pas connecter on masque déconnection
        if (!userConnected) {
          element.classList.add("d-none");
        }
        break;
      case "admin":
        if (!userConnected || role !== "admin") {
          element.classList.add("d-none");
        }
        break;
      case "client":
        if (!userConnected || role !== "client") {
          element.classList.add("d-none");
        }
        break;
    }
  });
}
function sanitizeHtml(text) {
  const tempHtml = document.createElement("div");
  tempHtml.textContent = text;
  return tempHtml.innerHTML;
}
function getInfosUser() {
  let myHeaders = new Headers();
  myHeaders.append("X-AUTH-TOKEN", getToken());
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch(apiUrl + "account/me", requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("impossible de récupérer les infos de l'utilisateur");
      }
    })
    .then((result) => {
      return result;
    })
    .catch((error) =>
      console.error(
        "erreur lors de la récupération des données utilisateur",
        error
      )
    );
}
