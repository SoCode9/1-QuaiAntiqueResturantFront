import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Galerie", "Galerie", "/pages/gallery.html","/js/gallery.js"),
];

//Le titre de l'onglet s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";