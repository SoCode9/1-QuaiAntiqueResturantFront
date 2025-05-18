export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
    }
}

/*
[] --> tout le monde peut y accéder
 ["disconnected"] --> page réservée aux utilisateurs déconnectés
 ["client"] --> page réservée aux utilisateurs connectés en tant que client
 ["admin"] --> page réservée aux utilisateurs connectés en tant qu'admin
 ["client", "admin"] --> page réservée aux utilisateurs connectés en tant que client ou admin
   
*/