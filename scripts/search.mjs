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

export async function rechercher(requete) {

  const contenu_requete = "PREFIX dbo: <http://dbpedia.org/ontology/> \n" +
    "SELECT * WHERE { \n" +
    " <http://dbpedia.org/resource/Lyon> ?p ?v . \n" +
    "} LIMIT 50";

  const url = "https://dbpedia.org/sparql?query=" + encodeURIComponent(contenu_requete) + "&format=json";
  console.log(url);

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return console.log("Erreur : " + error);
  }

}
