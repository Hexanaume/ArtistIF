# ArtistIF
# A Tailwind Nextjs React Project

Notre starter de projet pour la partie front end :
[![GitHub Repo stars](https://img.shields.io/github/stars/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/network/)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Ftimlrxx)](https://twitter.com/timlrxx)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/timlrx)](https://github.com/sponsors/timlrx)


## La license de notre projet
[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com)

## Installation et configuration de l'espace de travail

Vous devrez avoir Node.js (v.20.10.0) ainsi que qu’un gestionnaire de package tel que npm ou yarn. 

# Node.js et npm
Vous pouvez télécharger node sur le lien suivant : https://nodejs.org/en . NPM est fourni par défaut avec le téléchargement de Node.js. Si ce n’est pas le cas, vous pouvez télécharger npm sur le lien suivant https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


Cloner le repo git présent au lien suivant : https://github.com/Hexanaume/ArtistIF.git
Commande : git clone https://github.com/Hexanaume/ArtistIF.git

Installer yarn si il n’est pas sur votre machine. Cela peut se faire avec la commande npm install --global yarn dans un terminal ouvert sur votre répertoire de travail. 
N.B : il faut également avoir yarn et node d’installés (https://www.npmjs.com/)

# Modifier les url des appels à l’api pour les passer en local : 
Dans les fichiers suivants :
app/artists/[…artistId]/page.tsx, ligne 17
app/mouvement/[…mouvementId]/page.tsx, ligne 35
app/oeuvres/[…oeuvreId]/page.tsx, ligne 32
components/SearchBar.tsx, ligne 30

Remplacer l’url par la suivante : http://localhost:3000/api/search?query=${encodeURIComponent(
                searchTerm,
            )}&type=${searchType}

Remarque : cette opération est nécessaire car dans un soucis de mise en production de notre application, nous avons dû push une version sur la branche principale du git, contenant les URL du domaine public. Lors d’un push sur la branche “main”, une pipeline de déploiement continu est activée par la plateforme Vercel, et l’application est déployée sur l’url accessible publiquement : https://artist-if.vercel.app/ 

Lancer la commande « yarn dev » dans votre terminal.
Ouvrir l’url suivante http://localhost:3000/ , et Artistif s’affiche ! Vous pouvez alors naviguer d’une façon intuitive sur notre moteur de recherche.

Note :  Dans le fichier Artistif/package.json, la variable d’environnement INIT_CWD
dépend du système d’exploitation, elle doit être égale à %cd% sur des Windows et à PWD sur des Macs.
