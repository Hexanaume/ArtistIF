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
  requestString = `
SELECT distinct ?artist ?name ?labelMovement ?abstract WHERE {
    ?artist a foaf:Person .
    {
      ?artist dbo:movement ?movement .
    }
    UNION
    {
      ?artist dbp:movement ?movement .
    }
    ?movement rdfs:label ?labelMovement .
    filter langMatches(lang(?labelMovement),"en").

    ?artist dbp:name ?name .
    ?artist dbo:abstract ?abstract .
    ?thing dbo:author ?artist .

    #convert name into string
    bind(str(?name) as ?label)
    
    #filtrer pour avoir seulement des noms en anglais
    filter langMatches(lang(?name),"en").
    filter langMatches(lang(?abstract),"en").
    filter contains(?label,"Michel").
  }
  LIMIT 20.`;

  return requestString;
}

export async function rechercher(inputString) {

  // Ajout des préfixes
  let requestString;
  requestString = addDbpediaPrefixes(requestArtists(inputString));

  console.log("requestString",requestString);

  const url = "https://dbpedia.org/sparql?query=" + encodeURIComponent(requestString) + "&format=json";
  console.log(url);

  try {
    const response = await fetch(url);

    const responseJson = await response.json();
    console.log(responseJson.results.bindings);
    return responseJson.results.bindings;
  } catch (error) {
    return console.log("Erreur : " + error);
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
