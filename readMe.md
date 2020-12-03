# Et si on s'écoutait un petit morceau de rap... (feat Deezer !)


![GitHub Logo](deezer.png)

1. Cloner le projet sur votre système.
2. 'Dégiter' (`rm -rf .git`) le projet et versionner le.
3. Pusher votre projet sur Github
4. Coder le projet
5. Prendre du plaisir à coder.
6. Pusher sur Heroku
7. Penser à commit régulièrement ;)

**Ce projet consiste à créer une page HTML qui liste les albums d'Eminem.**
Le fichier **'data.js'** contient de l'information au format JSON concernant les ablums de l'artiste.
Vous devez coder des 'card' permettant d'organiser les informations de chaque album, ceci dans l'élément HTML `<div class="album-list"></div>`.

*Vous pouvez utiliser des 'card' Bootstrap ainsi que le système de grid pour organiser votre page HTML et lister les albums.*

Chaque 'card' doit contenir les informations suivantes : 
- l'image de l'album
- le titre de l'album
- un lien vers la 'tracklist'*
- un bouton 'lecture' qui joue la 'preview' de l'ablum au format .mp3


Vous devez faire apparaitre 4 albums par ligne.

*Chaque album à une tracklist (liste des titres). Un lien permettra de rediriger l'utilisateur vers cette tracklist.

## Afin de mener à bien ce projet, les exo qui suivent permettent de le faire étape par étape.
### exo-1 => faire une branch 'get-title'
- Accéder et Lister les titres de chaque albums dans la console du navigateur;
- Afficher cette liste dans votre page HTML (dans la balise 'ul').

#### Merger la branch dans la branch master

### exo-2 => faire une branch 'get-img'
- Lister les images de chaque album au format medium
- Afficher les images et les titres correspondant dans votre page HTML.

#### Merger la branch dans la branch master

### exo-3 => faire une branch 'get-tracklist'
- Lister la tracklist de chaque album et en faire un lien vers la page web correspondante.
- Afficher cette information dans la card.

#### Merger la branch dans la branch master

### exo-4 => faire une branch 'get-preview'
- Lister dans la console les previews au format .mp3 de chaque album.
- Afficher chaque .mp3 sous forme de bouton lecteur. Un click permettra de lancer la musique.

#### Merger la branch dans la branch master


### Bonus
[Voici le lien vers l'API](http://api.deezer.com/search/album?q=eminem)
Si vous voulez changer d'artiste, it's up to you...
- Au format tablette, l'application devra faire apparaitre 2 albums par ligne
- Au format mobile, l'application devra faire apparaitre 1 albums par ligne
- Encapsuler toute la fonctionnalité dans une fonction `getData()`. Un bouton permettra de lancer la fonction et ainsi d'afficher les albums.


# Prenez du plaisir à coder !

deezer-app-v2 coming soon...