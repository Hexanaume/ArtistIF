import axios from "axios";

function addDbpediaPrefixes(requestString) {
  // append the prefixes to the request string
  const prefixes = 'PREFIX owl: <http://www.w3.org/2002/07/owl#> \n' +
    'PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \n' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> \n' +
    'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> \n' +
    'PREFIX foaf: <http://xmlns.com/foaf/0.1/> \n' +
    'PREFIX dc: <http://purl.org/dc/elements/1.1/> \n' +
    'PREFIX : <http://dbpedia.org/resource/> \n' +
    'PREFIX dbpedia2: <http://dbpedia.org/property/> \n' +
    'PREFIX dbpedia: <http://dbpedia.org/> \n' +
    'PREFIX skos: <http://www.w3.org/2004/02/skos/core#> \n\n';

  return prefixes + requestString;
}

function requestArtists(NomArtists){
  let requestString;
  requestString = `SELECT distinct ?artist ?comments ?lang WHERE {

    ?artist dbo:wikiPageLength ?pageLength .
    ?artist a dbo:Artist.
    ?artist rdfs:label ?label .
    ?artist rdfs:comment ?comments .
    ?comments rdfs:label ?lang .
    filter contains(?label,"${NomArtists}")
    #filter contains(?lang,"en")
  
  }ORDER BY desc(?pageLength)`;

  return requestString;
}

export async function rechercher(inputString) {

  // Ajout des préfixes
  let requestString;
  requestString = addDbpediaPrefixes(requestArtists(inputString));

  // Requête SPARQL
  const encodedQuery = encodeURIComponent(requestString);
  console.log(requestString);
  // Requête HTTP
  const url = 'http://dbpedia.org/sparql?query=' + encodedQuery + '&format=json';

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Affichage des résultats dans un tableau
function afficherResultats(data)
{
  // Tableau pour mémoriser l'ordre des variables ; sans doute pas nécessaire
  // pour vos applications, c'est juste pour la démo sous forme de tableau
  var index = [];

  var contenuTableau = "<tr>";

  data.head.vars.forEach((v, i) => {
    contenuTableau += "<th>" + v + "</th>";
    index.push(v);
  });

  data.results.bindings.forEach(r => {
    contenuTableau += "<tr>";

    index.forEach(v => {

      if (r[v])
      {
        if (r[v].type === "uri")
        {
          contenuTableau += "<td><a href='" + r[v].value + "' target='_blank'>" + r[v].value + "</a></td>";
        }
        else {
          contenuTableau += "<td>" + r[v].value + "</td>";
        }
      }
      else
      {
        contenuTableau += "<td></td>";
      }

    });


    contenuTableau += "</tr>";
  });


  contenuTableau += "</tr>";

  document.getElementById("resultats").innerHTML = contenuTableau;

}
