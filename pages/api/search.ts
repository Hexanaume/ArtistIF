import { getInfos, rechercher } from '../../scripts/search.mjs';

export default async function handler(req, res) {
    const q = req.query.query;
    console.log('req', req);
    const type = req.query.type;
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
            const results = await getInfos(q, 'artist');
            res.status(200).json(results);
        } catch (e) { 
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'rechercherOeuvres') {
        try {
            const results = await rechercher(q, 'oeuvre');
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'getInfosOeuvre') {
        try {
            const results = await getInfos(q, 'oeuvre');
            console.log('q',q);
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

            const results = await getInfos(q, 'mouvementId');
            // On renvoie les résultats
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else {
        console.log('Type de l appel API non reconnu');
    }
}
