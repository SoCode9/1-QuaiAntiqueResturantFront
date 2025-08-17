import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["ROLE_CLIENT", "ROLE_ADMIN"]),
    new Route("/editPassword", "Changement mot de passe", "/pages/auth/editPassword.html", ["ROLE_CLIENT", "ROLE_ADMIN"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["ROLE_CLIENT"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["ROLE_CLIENT"],"/js/reservations/reserver.js"),
    new Route("/carte", "Notre carte", "/pages/carte.html", ["ROLE_CLIENT","ROLE_ADMIN"],"/js/carte.js"),
];

//Le titre de l'onglet s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";