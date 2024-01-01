//js/auth/SingnIn.js
const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSingnIn = document.getElementById("btnSignin");

btnSingnIn.addEventListener("click", checkCredentials);
function checkCredentials() {
  // ici, appeler l'API pour vérifier les credentials en BDD

  if (mailInput.value === "test@mail.com" && passwordInput.value === "123") {
    // il faudra récupérer le vrai token
    //placer ce token en cookie
    const token = "sjdkfzeldskjgrpeoildfkgjkdfjeproipi";
    setToken(token);

    setCookie(roleCookieName, "client", 7);

    window.location.replace("/");
    // redirection page accueil
    window.location.replace("/");
  } else {
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}
