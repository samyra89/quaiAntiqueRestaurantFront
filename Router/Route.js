// Route.js
export default class Route {
  url;
  title;
  pathHtml;
  authorize;
  pathJS;
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}
/*
[] -> tout le monde peut y accéder
['disconnected'] -> Réserver utilisateur déconnecté
['client'] -> Réserver utilisateur avec rôle client
['admin'] -> Réserver utilisateur avec rôle admin
['admin','client'] -> Réserver utilisateur avec rôle client ou admin

*/
