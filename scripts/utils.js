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
        birth_date: artist.birthDate.value,
        death_date: artist.deathDate.value,
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
        thumbnail_url: art.thumbnail.value,
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
            thumbnail_url: artist.thumbnail.value,
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
