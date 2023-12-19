/* eslint-disable prettier/prettier */

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
    #Select artists by name
  SELECT distinct ?artist ?picture ?name (GROUP_CONCAT( DISTINCT ?labelMovement; separator=', ') as ?movements) ?abstract WHERE {
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
  
      #optionnal picture
      
       ?artist dbo:thumbnail ?picture .
      
      
      #convert name into string
      bind(str(?name) as ?label)
      
      #filtrer pour avoir seulement des noms en anglais
      filter langMatches(lang(?name),"en").
      filter langMatches(lang(?abstract),"en").
      filter contains(?label, "${NomArtists}").
    }
    GROUP BY ?artist ?name ?abstract ?picture
    LIMIT 20`;

  return requestString;
}


function requestInfosArtists(urlArtist){
  let requestString;
  requestString = `SELECT distinct ?artist ?label ?abstract  WHERE {

    ?artist dbo:wikiPageLength ?pageLength .
    ?artist a dbo:Artist.
    ?artist rdfs:label ?label .
    ?artist dbo:abstract ?abstract .
    filter contains(?artist,"${urlArtist}").
  
  } ORDER BY desc(?pageLength)`;

  return requestString;
}

function requestOeuvres(NomOeuvres){
  let requestString;
  requestString = "à faire ";
  return requestString;
}
function getInfosOeuvre(idOeuvre){
  let requestString;
  requestString = "à faire ";
  return requestString;
}
function requestMouvements(NomMouvements){
  let requestString;
  requestString = "à faire ";
  return requestString;
}
function getInfosMouvement(idMouvement){
  let requestString;
  requestString = "à faire ";
  return requestString;
}
export async function rechercher(inputString,type) {

  // Ajout des préfixes
  let requestString;
  if(type === "artist"){
    requestString = addDbpediaPrefixes(requestArtists(inputString));
  }else if(type === "oeuvre"){
  requestString = addDbpediaPrefixes(requestOeuvres(inputString));
  }else if(type === "mouvement"){
    requestString = addDbpediaPrefixes(requestMouvements(inputString));
  }

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
export async function getInfos(urlArtist,type){
  // Ajout des préfixes
  let requestString;
  if(type === "artist"){
    requestString = addDbpediaPrefixes(requestInfosArtists(urlArtist));
  }else if(type === "oeuvre"){
    requestString = addDbpediaPrefixes(requestOeuvres(urlArtist));
  } else if(type === "mouvement"){
    requestString = addDbpediaPrefixes(requestMouvements(urlArtist));
  }

  console.log("requestString",requestString);

  const url = "https://dbpedia.org/sparql?query=" + encodeURIComponent(requestString) + "&format=json";
  console.log(url);

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return console.log("Erreur : " + error);
  }

}
