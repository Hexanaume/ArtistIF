import { rechercher } from '../../scripts/search.mjs';

export default async function handler(req, res) {
    const q = req.query.query;

    console.log("q",q);
    try {
        // On recherche les résultats correspondant à la requête de l'utilisateur
        const results = await rechercher(q);
        console.log(results);
        res.status(200).json(results);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
