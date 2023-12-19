import { getInfosArtist, rechercher } from '../../scripts/search.mjs';

export default async function handler(req, res) {
    const q = req.query.query;
    const type = req.query.type;
    console.log('q', q);
    console.log('type', type);
    if (type == 'rechercherAtistes') {
        try {
            // On recherche les résultats correspondant à la requête de l'utilisateur

            const results = await rechercher(q);
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'getInfosArtist') {
        try {
            // On recherche les résultats correspondant à la requête de l'utilisateur

            const results = await getInfosArtist(q);
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
