// Agrega JavaScript aquí
function redirectToWikipedia(equipo) {
  let wikipediaURL = "";
  switch (equipo) {
    case "Sporting Cristal":
      wikipediaURL = "https://es.wikipedia.org/wiki/Sporting_Cristal";
      break;
    case "Alianza Lima":
      wikipediaURL = "https://es.wikipedia.org/wiki/Club_Alianza_Lima";
      break;
    case "Universitario de Deporte":
      wikipediaURL =
        "https://es.wikipedia.org/wiki/Club_Universitario_de_Deportes";
      break;
    case "Sport Boys":
      wikipediaURL = "https://es.wikipedia.org/wiki/Sport_Boys_Association";
      break;
    default:
      wikipediaURL = "https://es.wikipedia.org";
  }
  window.open(wikipediaURL, "_blank");
}
