# Ecommerce-FP Frontend

## Description
Ce projet est une application frontend permettant de gérer un catalogue de produits. Il inclut des fonctionnalités de CRUD (Create, Read, Update, Delete) avec une pagination, une recherche et une gestion des stocks.

Le projet est construit avec **React**, **React-Bootstrap** et utilise **Axios** pour communiquer avec une API REST.


## Technologies utilisées
- **React** (Hooks, Router)
- **React-Bootstrap** (UI et mise en page)
- **Axios** (Requêtes HTTP)
- **React-Router-Dom** (Navigation)
- **MUI Material UI** (Styling supplémentaire)

## Installation
### Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- **Node.js** (>= 14.x recommandé)
- **npm** ou **yarn**
- **Un fichier `.env` pour configurer l'URL de l'API**

### Étapes d'installation
1. Clonez le dépôt principal (`ecommerce-fp`) contenant le frontend et le backend :
   ```sh
   https://github.com/Fefe3434/ecommerce-fp.git
   ```
2. Accédez au dossier du frontend :
   ```sh
   cd ecommerce-fp/frontend
   ```
3. Installez les dépendances :
   ```sh
   npm install
   # ou avec yarn
   yarn install
   ```

## Lancement de l'application
Pour démarrer l'application en mode développement, exécutez :
```sh
npm start
# ou avec yarn
yarn start
```
L'application sera disponible sur `http://localhost:3000/`.

## Configuration
Le projet interagit avec une API backend. Par défaut, l'URL de l'API est configurée dans `services/productService.js` :
```js
const API_URL = "http://localhost:5000";
```
Si nécessaire, modifiez cette URL pour pointer vers votre backend.

## Fonctionnalités
- **Affichage du catalogue de produits** avec pagination et recherche
- **Ajout, modification et suppression de produits**
- **Formulaire de gestion des produits** avec validation
- **Navigation fluide avec React Router**

## Architecture du projet
```sh
frontend
├── src
│   ├── components  
│   ├── pages       
│   ├── services   
│   ├── App.js    
│   └── index.js
├── package.json    
└── README.md       
```

## API utilisée
L'application consomme une API REST qui expose les endpoints suivants :
- `GET /products` - Récupérer tous les produits
  ```sh
  curl -X GET http://localhost:5000/products
  ```
  Exemple de réponse :
  ```json
  [
    {"id": 1, "name": "Produit A", "description": "Description A", "price": 10.5, "stock": 100},
    {"id": 2, "name": "Produit B", "description": "Description B", "price": 15.0, "stock": 50}
  ]
  ```
- `GET /product/:id` - Récupérer un produit spécifique
  ```sh
  curl -X GET http://localhost:5000/product/1
  ```
  Exemple de réponse :
  ```json
  {"id": 1, "name": "Produit A", "description": "Description A", "price": 10.5, "stock": 100}
  ```
- `POST /product` - Ajouter un produit
  ```sh
  curl -X POST http://localhost:5000/product -H "Content-Type: application/json" -d '{"name": "Produit C", "description": "Description C", "price": 20.0, "stock": 30}'
  ```
- `PUT /product/:id` - Modifier un produit
  ```sh
  curl -X PUT http://localhost:5000/product/1 -H "Content-Type: application/json" -d '{"name": "Produit A modifié", "price": 12.0, "stock": 80}'
  ```
- `DELETE /product/:id` - Supprimer un produit
  ```sh
  curl -X DELETE http://localhost:5000/product/1
  ```


## Auteur
Développé par **Ferdaouss Adlani**.


