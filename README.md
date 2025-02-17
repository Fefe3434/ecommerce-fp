# Product Management App

## Description
Product Management App est une application complète de gestion de produits avec une interface utilisateur et une API backend.  
Elle permet d'afficher, ajouter, modifier et supprimer des produits avec gestion des stocks et des prix.

L'application est divisée en deux parties :
- **Frontend** : Une application React pour une interface utilisateur fluide et réactive.
- **Backend** : Une API RESTful développée avec Flask pour gérer les données.

---

## Structure du projet
```sh
product_management_app
├── frontend        
│   ├── src
│   ├── package.json
│   └── README.md   
├── backend        
│   ├── models
│   ├── resources
│   ├── app.py
│   ├── database.py
│   ├── README.md   
│   └── requirements.txt
└── README.md       
```

## Technologies Utilisées

### Frontend
- React (Hooks, Router)
- React-Bootstrap (UI & mise en page)
- Axios (Requêtes HTTP)
- MUI (Material UI)

### Backend
- Flask (Framework API)
- Flask-RESTful (Gestion des routes)
- Flask-SQLAlchemy (ORM pour la base de données)
- Flask-Cors (Sécurité des requêtes API)
- SQLite (Base de données)

## Installation du Projet

### Cloner le Dépôt
```sh
git clone https://github.com/Fefe3434/product_management_app.git
```

### Accédez au dossier du projet :
   ```sh
   cd product_management_app
   ```


### Installation du Backend

Accédez au dossier backend :
```sh
cd backend
```

Créez un environnement virtuel :

Windows :
```sh
py -3.11 -m venv venv
```

macOS/Linux :
```sh
python3.11 -m venv venv
```

Activez l’environnement virtuel :

Windows :
```sh
venv\Scripts\activate
```

macOS/Linux :
```sh
source venv/bin/activate
```

Installez les dépendances :
```sh
pip install -r requirements.txt
```

Créez un fichier .env dans backend/ :
```sh
SQLALCHEMY_DATABASE_URI=sqlite:///catalog.db
SQLALCHEMY_TRACK_MODIFICATIONS=False
```

Démarrez l’API :
```sh
flask run
```

L’API sera disponible sur http://localhost:5000/.

### Installation du Frontend

Accédez au dossier frontend :
```sh
cd ../frontend
```

Installez les dépendances :
```sh
npm install
```

ou avec yarn :
```sh
yarn install
```

Créez un fichier .env dans frontend/ :
```sh
REACT_APP_API_URL=http://localhost:5000
```

Démarrez l’application :
```sh
npm start
```

ou avec yarn :
```sh
yarn start
```

L’application sera accessible sur http://localhost:3000/.

## Endpoints de l'API

### Récupérer tous les produits
```sh
curl -X GET http://localhost:5000/products
```

### Ajouter un produit
```sh
curl -X POST http://localhost:5000/product \
-H "Content-Type: application/json" \
-d '{"name": "Produit C", "description": "Description C", "price": 20.0, "stock": 30}'
```

### Modifier un produit
```sh
curl -X PUT http://localhost:5000/product/1 \
-H "Content-Type: application/json" \
-d '{"name": "Produit A modifié", "price": 12.0, "stock": 80}'
```

### Supprimer un produit
```sh
curl -X DELETE http://localhost:5000/product/1
```

## Objectifs et Fonctionnalités

- Interface moderne et intuitive pour gérer les produits
- CRUD complet (ajouter, modifier, supprimer des produits)
- Gestion des stocks et des prix
- Pagination et recherche dynamique
- Séparation frontend/backend pour une architecture évolutive


## Auteur

Développé par **Ferdaouss Adlani**.

Consultez les README des dossiers frontend/ et backend/ pour plus de détails sur chaque partie du projet.

