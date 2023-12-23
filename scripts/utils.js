export const buildFullArtistJson = (
    artistResult,
    movementsResult,
    oeuvresResult,
) => {
    const artist = artistResult.results.bindings[0];
    const movementList = movementsResult.results.bindings;
    const oeuvres = oeuvresResult.results.bindings;

    const artistJson = {
        wikiPageID: artist.wikiPageID.value,
        name: artist.label.value,
        birth_date: artist.birthDate?.value,
        death_date: artist.deathDate?.value,
        abstract: artist.abstract.value,
        thumbnail_url: artist.thumbnail.value,
    };

    // parse the movementsResult to get the movements
    const movements = movementList.map((movement) => {
        return {
            label: movement.labelMovement.value,
            wikiPageID: movement.movementWikiPageID.value,
        };
    });

    // parse the oeuvresResult to get the oeuvres
    const oeuvresJson = oeuvres.map((oeuvre) => {
        return {
            wikiPageID: oeuvre.wikiPageID.value,
            name: oeuvre.artworkLabel.value,
            abstract: oeuvre.abstract.value,
            thumbnail_url: !oeuvre.thumbnail ? null : oeuvre.thumbnail.value,
        };
    });

    artistJson.movements = movements;
    artistJson.oeuvres = oeuvresJson;

    return artistJson;
};

export const buildArtJson = (artResult) => {
    const art = artResult.results.bindings[0];

    const artJson = {
        wikiPageID: art.wikiPageID.value,
        thumbnail_url: art.thumbnail?.value,
        name: art.labelArt.value,
        artist: {
            id: art.wikiArtistID.value,
            name: art.labelArtist.value,
        },
        abstract: art.abstract.value,
        movement: {
            id: art.wikiMovementID?.value,
            label: art.labelMovement?.value,
        },
        completionDate: art.completionDate?.value,
        locationLabel: art.locationLabel?.value,
        price: art.price?.value,
    };
    return artJson;
};

export const buildMovementJson = (movementResult, resArtistes, resOeuvres) => {
    const movement = movementResult.results.bindings[0];
    const artistList = resArtistes.results.bindings;
    const oeuvres = resOeuvres.results.bindings;

    const oeuvresJson = oeuvres.map((oeuvre) => {
        return {
            wikiPageID: oeuvre.wikiPageID.value,
            name: oeuvre.name.value,
            abstract: oeuvre.abstract.value,
            thumbnail_url: !oeuvre.thumbnail ? null : oeuvre.thumbnail.value,
        };
    });
    const artistesJson = artistList.map((artist) => {
        return {
            wikiPageID: artist.wikiPageID.value,
            name: artist.name.value,
            abstract: artist.abstract.value,
            thumbnail_url: artist.thumbnail?.value,
        };
    });

    const movementJson = {
        labelMovement: movement.labelMovement.value,
        movement: movement.movement.value,
        id: movement.id.value,
        pic: movement.pic.value,
        desc: movement.desc.value,
    };

    movementJson.oeuvres = oeuvresJson;
    movementJson.artists = artistesJson;
    return movementJson;
};
export function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
    } else {
        return text;
    }
}

export function addDbpediaPrefixes(requestString) {
    // append the prefixes to the request string
    const prefixes =
        'PREFIX owl: <http://www.w3.org/2002/07/owl#> \n' +
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
