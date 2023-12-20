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


export const buildArtJson = (
    artResult,
) => {
    const art = artResult.results.bindings[0];

    const artJson = {
        wikiPageID: art.wikiPageID.value,
        thumbnail_url: art.thumbnail.value,
        labelArt: art.labelArt.value,
        labelArtist: art.labelArtist.value,
        abstract: art.abstract.value,
        labelMovement: art.labelMovement.value,
        completionDate: art.completionDate.value,
        locationLabel: art.locationLabel.value,
        price: art.price?.value,
    };
    return artJson;
};
