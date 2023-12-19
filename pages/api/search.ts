import { getInfos, rechercher } from '../../scripts/search.mjs';

export default async function handler(req, res) {
    const q = req.query.query;
    const type = req.query.type;
    console.log('q', q);
    console.log('type', type);
    if (type == 'rechercherArtists') {
        try {
            // On recherche les résultats correspondant à la requête de l'utilisateur

            const results = await rechercher(q, 'artist');
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'getInfosArtist') {
        try {
            // On recherche les résultats correspondant à la requête de l'utilisateur

            const results = await getInfos(q, 'artist');
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'rechercherOeuvres') {
        try {
            // On recherche les résultats correspondant à la requête de l'utilisateur

            const results = await rechercher(q, 'oeuvre');
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'getInfosOeuvre') {
        try {
            // On recherche les résultats correspondant à la requête de l'utilisateur

            const results = await getInfos(q, 'oeuvre');
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'rechercherMouvements') {
        try {
            // On recherche les résultats correspondant à la requête de l'utilisateur

            const results = await rechercher(q, 'mouvement');
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'getInfosMouvement') {
        try {
            // On recherche les résultats correspondant à la requête de l'utilisateur

            const results = await getInfos(q, 'mouvement');
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
