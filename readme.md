_Créé avec [Create React App](https://github.com/facebookincubator/create-react-app)._

# Feed the ram

Une appli front pour essayer une API Symfony.

## Getting started

**Installation**

_Cloner le repo_

```
git clone https://github.com/Cedric-F/Feedtheram.git
```

***ou***

```
git clone --single-branch -b master https://github.com/Cedric-F/Feedtheram.git
```

_**Dependences**_

Ont été utilisées les dépendences suivantes:

* [React](https://github.com/facebook/React)
* [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
* [React Router](https://github.com/ReactTraining/react-router)

Installer les dépendences avec `yarn install`
`yarn start` pour lancer un serveur en `localhost:3000`.

_**Production build**_

A venir.

## Structure

```
├── README.md
├── license.md
├── package.json
├── public/
│   ├── splash.png
│   ├── icon.png
│   ├── favicon.png
│   ├── favicon.ico
│   ├── manifest.json
│   └── index.html
└── src/
    ├── Components/
    │   ├── App.js
    │   ├── Nav.js
    │   ├── Form.js
    │   └── Character.js
    ├── utils/
    │   ├── App.css
    │   └── index.css
    ├── serviceWorker.js
    ├── App.test.js
    └── index.js
```

## Usage

C'est une application très simple qui envoie une requête à [cette API](https://github.com/cedric-f/feedtheram-api) avec des données entrées par l'utilisateur, puis en affiche la réponse.

## License

MIT Licence

### Credits

* Images de [RoboHash.org](https://obohash.org)

## Compatibilé

Testé sur:

* Chrome
* FireFox
