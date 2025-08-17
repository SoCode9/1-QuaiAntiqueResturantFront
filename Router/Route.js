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
 ["ROLE_CLIENT"] --> page réservée aux utilisateurs connectés en tant que client
 ["ROLE_ADMIN"] --> page réservée aux utilisateurs connectés en tant qu'admin
 ["ROLE_CLIENT", "ROLE_ADMIN"] --> page réservée aux utilisateurs connectés en tant que client ou admin
   
*/