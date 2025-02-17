# Ecommerce-FP Backend

## Introduction

L'API de gestion des produits permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur des produits stockés dans une base de données. Elle est conçue en **Flask** avec **Flask-RESTful**, **Flask-SQLAlchemy** et **Flask-Cors**.

## Installation et Configuration

Pour configurer correctement l'environnement de développement de ce projet, suivez les instructions ci-dessous.

### Prérequis pour le Développement

Assurez-vous d'avoir Python 3.11 ou une version supérieure installée sur votre machine. Vous pouvez le vérifier en exécutant `python --version` ou `python3 --version` dans votre terminal. Ainsi que **pip** (le gestionnaire de paquets Python).

### Étapes d'installation
1. Clonez le dépôt principal (`ecommerce-fp`) contenant le frontend et le backend :

   ```sh
   git clone https://github.com/Fefe3434/ecommerce-fp.git
   ```
2. Accédez au dossier du frontend :
   ```sh
   cd ecommerce-fp/backend
   ```

3. Étapes d'Installation

    Après avoir activé votre environnement virtuel, installez les dépendances nécessaires en exécutant :

    ```bash
    pip install -r requirements.txt
    ```


### Configuration de l'Environnement Virtuel

1. **Création** : Dans le répertoire racine de votre projet, exécutez la commande suivante pour créer un environnement virtuel :

   - **Windows** : `py3.11 -m venv nom_env`
   - **macOS/Linux** : `python3.11 -m venv nom_env`

2. **Activation** : Activez l'environnement virtuel avec la commande appropriée pour votre système :
   - **Windows** : `.
om_env\Scripts\activate`
   - **macOS/Linux** : `source nom_env/bin/activate`


## Architecture du projet
```sh
backend
├── models
│   ├── product_response.py  
│   └── product.py       
│── resources  
│   ├── base_resource.py  
│   └── product.py       
│── app.py       
│── database.py   
│── README.md    
└── requirements.txt    
```


### Configuration du fichier `.env`

Ajoutez un fichier `.env` à la racine du projet avec le contenu suivant :

```ini
# Configuration de la base de données
SQLALCHEMY_DATABASE_URI=sqlite:///catalog.db  
SQLALCHEMY_TRACK_MODIFICATIONS=False
```

### Lancement de l'application

```sh
flask run
```
L'application tournera sur `http://localhost:5000/`.

## Dépendances

L'API repose sur les bibliothèques suivantes :
- `Flask`
- `Flask-RESTful`
- `Flask-SQLAlchemy`
- `Flask-Cors`
- `python-dotenv`



## Points d'Accès

### Récupérer un ou plusieurs produits (GET)

- **Type**: GET
- **Point d'Accès**: `/products` ou `/product/<id>`
- **Réponses**:
  - **Succès**:
    - **Statut HTTP**: 200 OK
    - **Corps de la Réponse**: JSON contenant la liste des produits ou les détails d'un produit.
  - **Erreurs Possibles**:
    - **404 Not Found**: Si aucun produit n'est trouvé avec l'ID spécifié.
    - **500 Internal Server Error**: En cas d'erreur serveur.

### Ajouter un produit (POST)

- **Type**: POST
- **Point d'Accès**: `/product`
- **Body attendu**:
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number"
  }
  ```
- **Réponses**:
  - **Succès**:
    - **Statut HTTP**: 201 Created
    - **Corps de la Réponse**: JSON avec l'ID du produit créé.
  - **Erreurs Possibles**:
    - **400 Bad Request**: Si le body est invalide ou manquant.
    - **500 Internal Server Error**: En cas d'erreur serveur.

### Modifier un produit (PUT)

- **Type**: PUT
- **Point d'Accès**: `/product/<id>`
- **Body attendu**:
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number",
    "stock": "number"
  }
  ```
- **Réponses**:
  - **Succès**:
    - **Statut HTTP**: 200 OK
    - **Corps de la Réponse**: JSON indiquant la réussite de la mise à jour.
  - **Erreurs Possibles**:
    - **400 Bad Request**: Si les données envoyées sont invalides.
    - **404 Not Found**: Si le produit n'existe pas.
    - **500 Internal Server Error**: En cas d'erreur serveur.

### Supprimer un produit (DELETE)

- **Type**: DELETE
- **Point d'Accès**: `/product/<id>`
- **Réponses**:
  - **Succès**:
    - **Statut HTTP**: 200 OK
    - **Corps de la Réponse**: JSON confirmant la suppression.
  - **Erreurs Possibles**:
    - **404 Not Found**: Si le produit n'existe pas.
    - **500 Internal Server Error**: En cas d'erreur serveur.



## Auteurs
Développé par **Ferdaouss Adlani**.