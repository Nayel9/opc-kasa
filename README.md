# Kasa

Kasa est une application web de location de logements développée avec React.

## Table des matières

- [Démo](#démo)
- [Aperçu](#aperçu)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Dépendances](#dépendances)
- [Licence](#licence)

## Démo

Découvrez l'application en ligne : [Kasa - GitHub Pages](https://nayel9.github.io/Kasa-opc/)

## Aperçu

![Aperçu de l'application](./public/demo.png)


## Prérequis
- Node.js >= 18.x
- pnpm (optionnel mais recommandé)
- L'application a été créée avec Vite, un outil de build rapide pour les projets React.

## Installation

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/nayel9/Kasa-opc.git
    ```
2. Accédez au répertoire du projet :
    ```bash
    cd Kasa
    ```
3. Installez les dépendances :
    ```bash
    pnpm install
    ```

## Utilisation

Pour démarrer l'application en mode développement, exécutez :
```bash
pnpm start
```

L'application sera accessible à l'adresse http://localhost:5173/Kasa-opc/.  

Pour créer une version de production de l'application, exécutez :
```bash
pnpm build
```
Les fichiers de production seront générés dans le dossier dist/.

## Fonctionnalités

- Affichage de la liste des logements
- Navigation avec React Router
- Gestion des erreurs pour les pages non trouvées
- Utilisation de données statiques à partir de fichiers JSON

## Structure du projet

Voici un aperçu de la structure des fichiers du projet :

```
Kasa/
├── public/
│   ├── index.html
│   └── kasa.svg
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Error/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Logement/
│   │   └── Propos/
│   ├── utils/
│   │   └── style/
│   ├── data/
│   │   └── logements.json
│   ├── index.jsx
│   └── router.jsx
├── .gitignore
├── package.json
└── README.md
```

## Dépendances
Les principales dépendances utilisées dans ce projet sont :  
- React : Pour la construction de l'interface utilisateur.
- React Router : Pour la navigation entre les pages.
- Sass : Pour le style des composants.
- Font Awesome : Pour les icônes.

Pour une liste complète des dépendances, consultez le fichier `package.json`.  

## Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.