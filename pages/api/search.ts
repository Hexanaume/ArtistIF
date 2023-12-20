import { getInfos, rechercher } from '../../scripts/search.mjs';

export default async function handler(req, res) {
    const q = req.query.query;

    const type = req.query.type;
    if (type == 'rechercherArtists') {
        try {
            const results = await rechercher(q, 'artist');
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
            //console.log(results);
            res.status(200).json(results);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    } else if (type == 'rechercherMouvements') {
        try {
            const results = await rechercher(q, 'mouvement');
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
