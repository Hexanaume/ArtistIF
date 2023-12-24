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
* Comme nous avons déployé le site sur Vercel, il n’y a pas besoin de beaucoup d’étapes pour visualiser le site et y naviguer comme un utilisateur lambda.
* Il suffit de se rendre sur l’url suivante : https://artist-if.vercel.app/.
* Dans un souci de configuration de l’espace de travail, qui pourrait s’avérer complexe en fonction de votre matériel et système d’exploitation, nous vous conseillons d’utiliser cette version déployée.
* Cependant, si vous voulez lancer le site en local, voici la liste des étapes à suivre :
* Vous devrez avoir Node.js (v.20.10.0) ainsi que qu’un gestionnaire de package tel que npm ou yarn. 

### Node.js et npm
Vous pouvez télécharger node sur le lien suivant : https://nodejs.org/en. NPM est fourni par défaut avec le téléchargement de Node.js. Si ce n’est pas le cas, vous pouvez télécharger npm sur le lien suivant https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

* Cloner le repo git présent au lien suivant : https://github.com/Hexanaume/ArtistIF.git

``` bash 
git clone https://github.com/Hexanaume/ArtistIF.git
```

* Installer yarn s'il n’est pas sur votre machine. Cela peut se faire avec la commande 
`npm install --global yarn` dans un terminal ouvert sur votre répertoire de travail. 

* Se placer au niveau du répertoire source du projet (Artistif) et lancer la commande `yarn install` dans votre terminal.
* Lancer la commande `yarn dev` dans votre terminal.
* Ouvrir l’url suivante http://localhost:3000/ , et Artistif s’affiche ! Vous pouvez alors naviguer d’une façon intuitive sur notre moteur de recherche.

**Note:**  Dans le fichier Artistif/package.json, la variable d’environnement INIT_CWD
dépend du système d’exploitation, elle doit être égale à %cd% sur des Windows et à PWD sur des Macs.
