import { buildArtJson, buildFullArtistJson } from "./utils.js";

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
    'PREFIX skos: <http://www.w3.org/2004/02/skos/core#> \n' +
    'PREFIX dcterms: <http://purl.org/dc/terms/> \n\n';

  return prefixes + requestString;
}

function requestArtists(NomArtists){
  let requestString;
  requestString = `
    SELECT distinct ?wikiPageID ?artist ?picture ?name (GROUP_CONCAT( DISTINCT ?labelMovement; separator=', ') as ?movements) ?abstract WHERE {
   ?artist a foaf:Person .
   ?artist dbo:wikiPageID ?wikiPageID .
   {
     ?artist dbo:movement ?movement .
   }
   UNION
   {
     ?artist dbp:movement ?movement .
   }
   ?movement rdfs:label ?labelMovement .
   filter langMatches(lang(?labelMovement),"en").


   ?artist dbo:wikiPageID ?wikiPageID .


   ?artist dbp:name ?name .
   ?artist dbo:abstract ?abstract .
   ?thing dbo:author ?artist .
   ?thing a dbo:Artwork .

   ?artist dbo:thumbnail ?picture .

   #convert name into string
   bind(str(?name) as ?label)
  
   #filtrer pour avoir seulement des noms en anglais
   filter langMatches(lang(?name),"en").
   filter langMatches(lang(?abstract),"en").
   FILTER regex(?name, "${NomArtists}", "i").
 }
 GROUP BY ?wikiPageID ?artist ?name ?abstract ?picture
 LIMIT 30
`;

  return requestString;
}


function requestInfosArtists(idArtist)
// gets the information about an artist from its id
// useful for the artist page
{
  let requestString;
  requestString = `SELECT DISTINCT ?wikiPageID ?label ?name ?abstract ?thumbnail
WHERE {
 ?artist a foaf:Person .
 ?artist dbo:wikiPageID ?wikiPageID .
 FILTER (?wikiPageID = ${idArtist}).

 {
   ?artist dbo:movement ?movement .
 }
 UNION
 {
   ?artist dbp:movement ?movement .
 }
 ?movement rdfs:label ?labelMovement .
 FILTER LANGMATCHES(LANG(?labelMovement), "en").


 ?artist dbp:name ?name .
 ?artist dbo:abstract ?abstract .
 ?artist dbo:thumbnail ?thumbnail .
 ?thing dbo:author ?artist .


 # Convert name into string
 BIND(STR(?name) AS ?label)
  
 # Filter for English names and abstracts
 FILTER LANGMATCHES(LANG(?name), "en").
 FILTER LANGMATCHES(LANG(?abstract), "en").
}
LIMIT 1
`;

  return requestString;
}

function requestOeuvres(NomOeuvres){
  let requestString;
  requestString = `SELECT ?wikiPageID ?artwork ?size ?name ?abstract (GROUP_CONCAT(?author; separator=",") as ?authors) ?picture (GROUP_CONCAT(?movement; separator=",") as ?movements)
WHERE {
 ?artwork a dbo:Artwork.
 ?artwork dbo:wikiPageID ?wikiPageID.

 OPTIONAL{
{
?artwork dbo:movement ?movement.
}
UNION
 {
?artwork dbp:movement ?movement.
}
}
 ?artwork dbo:wikiPageLength ?size.
 ?artwork rdfs:label ?name.
 ?artwork dbo:abstract ?abstract.
 ?artwork dbo:thumbnail ?picture
 OPTIONAL {?artwork dbo:author ?author.}
  FILTER langMatches(lang(?abstract), "en").
 FILTER langMatches(lang(?name), "en").


  FILTER regex(?name, "${NomOeuvres}", "i").

}
GROUP BY ?wikiPageID ?artwork ?size ?name ?abstract ?picture
LIMIT 30
  `;
  return requestString;
}

function getInfosOeuvre(idOeuvre){
  let requestString;
  requestString = `SELECT DISTINCT ?wikiPageID ?labelArt ?wikiArtistID ?labelArtist ?abstract ?wikiMovementID ?labelMovement ?thumbnail ?completionDate ?locationLabel ?price
  WHERE {
   ?artwork a dbo:Artwork .
   ?artwork dbo:wikiPageID ?wikiPageID .
   
   FILTER (?wikiPageID = ${idOeuvre}).
  
   ?artwork rdfs:label ?labelArt
   FILTER LANGMATCHES(LANG(?labelArt), "en").
  
   ?artwork dbo:author ?artist .
   ?artist dbo:wikiPageID ?wikiArtistID .
   ?artist dbp:name ?name .
   ?artist dbo:abstract ?abstract .
   ?thing dbo:author ?artist .
  OPTIONAL{
   {
     ?artist dbo:movement ?movement .
   }
   UNION
   {
     ?artist dbp:movement ?movement .
   }
  }
   ?movement rdfs:label ?labelMovement .
   ?movement dbo:wikiPageID ?wikiMovementID .
   FILTER LANGMATCHES(LANG(?labelMovement), "en").
  
  
   OPTIONAL {
     ?artwork dbo:thumbnail ?thumbnail .
   }
   OPTIONAL {
     {
       ?artwork dbp:year ?completionDate .
     }
     UNION
     {
       ?artwork dbp:completionDate ?completionDate .
     }
   }
   OPTIONAL {
     ?artwork dbo:museum ?location .
     ?location rdfs:label ?locationLabel .
     FILTER LANGMATCHES(LANG(?locationLabel), "en").
   }
   OPTIONAL {
     ?artwork dbo:price ?price .
   }
  
  
   # Convert name into string
   BIND(STR(?name) AS ?labelArtist)
    
   # Filter for English names and abstracts
   FILTER LANGMATCHES(LANG(?name), "en").
   FILTER LANGMATCHES(LANG(?abstract), "en").
  }
  LIMIT 1
  `;
  return requestString;
}

function requestOeuvresArtiste(idArtist){
  let requestString;
  requestString = `SELECT DISTINCT ?wikiPageID ?artistLabel ?artworkLabel ?artwork ?abstract ?thumbnail ?year ?locationLabel ?location
WHERE {
  ?artwork a dbo:Artwork .
  ?artist a foaf:Person .
  ?artist dbo:wikiPageID ?wikiPageIDArtist .
  FILTER (?wikiPageIDArtist = ${idArtist}).

  ?artist dbp:name ?name .
  ?artist dbo:abstract ?abstract .
  ?artwork dbo:author ?artist .
  OPTIONAL {
    ?artwork dbo:thumbnail ?thumbnail .
  }
  OPTIONAL {
    ?artwork dbp:year ?year .
  }
  OPTIONAL {
    ?artwork dbo:museum ?location .
    ?location rdfs:label ?locationLabel .
    FILTER LANGMATCHES(LANG(?locationLabel), "en").
  }

  ?artwork rdfs:label ?artworkLabel .
  FILTER LANGMATCHES(LANG(?artworkLabel), "en").

  ?artwork dbo:wikiPageID ?wikiPageID .

  # Convert name into string
  BIND(STR(?name) AS ?artistLabel)

    
  # Filter for English names and abstracts
  FILTER LANGMATCHES(LANG(?name), "en").
  FILTER LANGMATCHES(LANG(?abstract), "en").
  FILTER LANGMATCHES(LANG(?artworkLabel), "en").
}
  `;
  return requestString;
}

function requestMouvements(NomMouvements){
  let requestString;
  requestString = `SELECT DISTINCT ?name ?movement ?wikiPageID ?picture ?abstract
WHERE {
  {
   ?e dbo:movement ?artist .
 }
 UNION
 {
   ?e dbp:movement ?artist .
 }

?movement dcterms:subject dbc:Art_movements.
?movement rdfs:label ?name .
?movement dbo:wikiPageID ?wikiPageID.
?movement dbo:abstract ?abstract.
OPTIONAL {?movement dbo:thumbnail ?picture.}

FILTER LANGMATCHES(LANG(?name), "en").
FILTER LANGMATCHES(LANG(?abstract), "en").
FILTER regex(?name, "${NomMouvements}", "i").
}
LIMIT 20
  `;
  return requestString;
}
function requestMouvementsArtiste(idArtist){
  let requestString;
  requestString = `SELECT DISTINCT ?labelMovement ?movement ?movementWikiPageID
WHERE {
  ?artist a foaf:Person .
  ?artist dbo:wikiPageID ?wikiPageID .
  FILTER (?wikiPageID = ${idArtist}).
  {
    ?artist dbo:movement ?movement .
  }
  UNION
  {
    ?artist dbp:movement ?movement .
  }
  ?movement rdfs:label ?labelMovement .
  FILTER LANGMATCHES(LANG(?labelMovement), "en").
  ?movement dbo:wikiPageID ?movementWikiPageID .

  ?artist dbo:abstract ?abstract .
  ?thing dbo:author ?artist .
    
}
LIMIT 10
  `;
  return requestString;
}
function getInfosMouvement(idMouvement){
  let requestString;
  requestString = `SELECT DISTINCT ?labelMovement ?movement ?id ?pic ?desc
WHERE {

?movement rdfs:label ?labelMovement .
?movement dbo:wikiPageID ?id.
?movement dbo:abstract ?desc.
OPTIONAL {?movement dbo:thumbnail ?pic.}

FILTER(?id=${idMouvement}).
FILTER LANGMATCHES(LANG(?labelMovement), "en").
FILTER LANGMATCHES(LANG(?desc), "en").

}
LIMIT 1
  `;
  return requestString;
}

function getArtistesMouvement(idMouvement){
  let requestString;
  requestString = `SELECT DISTINCT ?artist ?name ?size
WHERE {
?artist a foaf:Person.
{
?artist dbo:movement ?movement.
}
UNION
 {
?artist dbp:movement ?movement.
}

?movement dbo:wikiPageID ?id.
?artist dbp:name ?name.
?artist dbo:wikiPageLength ?size.
FILTER(?id=${idMouvement}).
 FILTER LANGMATCHES(LANG(?name), "en").
}
ORDER BY DESC(?size)
LIMIT 20
  `;
  return requestString;
}

function getOeuvresMouvement(idMouvement){
  let requestString;
  requestString = `SELECT DISTINCT ?artwork?name ?size
WHERE {

?artwork a dbo:Artwork .

 {
?artwork dbp:movement ?movement.
}
?movement dbo:wikiPageID ?id.
?artwork rdfs:label ?name.
FILTER langMatches(lang(?name), "en").
FILTER (?id=${idMouvement}).

?artwork dbo:wikiPageLength ?size.


}
ORDER BY DESC(?size)
LIMIT 20
  `;
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
  //console.log(url);

  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson.results.bindings);
    return responseJson.results.bindings;
  } catch (error) {
    return console.log("Erreur : " + error);
  }

}
export async function getInfos(id,type){
  // Ajout des préfixes
  let requestString;
  if(type === "artist"){
    try {
      const resInfos = await callAPI(addDbpediaPrefixes(requestInfosArtists(id)));
      const resOeuvres = await callAPI(addDbpediaPrefixes(requestOeuvresArtiste(id)));
      const resMouvements = await callAPI(addDbpediaPrefixes(requestMouvementsArtiste(id)));

      // add the artist info to the artist object
      return buildFullArtistJson(resInfos, resMouvements, resOeuvres);
    } catch (error) {
      return console.log("Erreur : " + error);
    }

  }else if(type === "oeuvre"){
    try {
      console.log(getInfosOeuvre(id));
      const resultat = await callAPI(addDbpediaPrefixes(getInfosOeuvre(id)));
      return buildArtJson(resultat);
    } catch (error) {
      return console.log("Erreur : " + error);
    }
  } else if(type === "mouvement"){
    try {
      const resInfos = await callAPI(addDbpediaPrefixes(getInfosMouvement(id)));
      const resArtistes = await callAPI(addDbpediaPrefixes(getArtistesMouvement(id)));
      const resOeuvres = await callAPI(addDbpediaPrefixes(getOeuvresMouvement(id)));
      return resInfos;
    } catch (error) {
      return console.log("Erreur : " + error);
    }

  }

}

async function callAPI(requestString) {
  const url = "https://dbpedia.org/sparql?query=" + encodeURIComponent(requestString) + "&format=json";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return console.log("Erreur : " + error);
  }
}