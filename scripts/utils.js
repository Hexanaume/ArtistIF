export const buildFullArtistJson = (
    artistResult,
    movementsResult,
    oeuvresResult,
) => {
    const artist = artistResult.results.bindings[0];
    const movementList = movementsResult.results.bindings;
    const oeuvres = oeuvresResult.results.bindings;

    console.log("1");

    const artistJson = {
        wikiPageID: artist.wikiPageID.value,
        name: artist.label.value,
        abstract: artist.abstract.value,
        thumbnail_url: artist.thumbnail.value,
    };

    console.log("2");

    // parse the movementsResult to get the movements
    const movements = movementList.map((movement) => {
        return {
            label: movement.labelMovement.value,
            wikiPageID: movement.movementWikiPageID.value,
        };
    });

    console.log("3");

    console.log(oeuvres);

    // parse the oeuvresResult to get the oeuvres
    const oeuvresJson = oeuvres.map((oeuvre) => {
        console.log("test");
        return {
            wikiPageID: oeuvre.wikiPageID.value,
            name: oeuvre.artworkLabel.value,
            abstract: oeuvre.abstract.value,
            thumbnail_url: !oeuvre.thumbnail ? null : oeuvre.thumbnail.value,
        };
    });

    console.log("4");


    artistJson.movements = movements;
    artistJson.oeuvres = oeuvresJson;

    return artistJson;
};
