# RestoSite
# Resto — Site vitrine de restaurant

Site vitrine responsive pour restaurant, construit en HTML, CSS et JavaScript pur (sans framework). Il se personnalise pour chaque client en modifiant un seul fichier : `js/config.js`.

**Démo en ligne :** _à compléter (lien Netlify)_

## Fonctionnalités

- Design responsive (ordinateur, tablette, smartphone) avec menu burger
- Header qui change d'apparence au défilement
- Menu des plats généré depuis la configuration, avec bouton « See more / See less »
- Section témoignages
- Réservation de table par **WhatsApp** : le formulaire prépare un message pré-rempli
- Bouton WhatsApp flottant
- Section contact avec adresse, horaires, téléphone, email et carte Google Maps
- Footer avec liens vers les réseaux sociaux (Instagram, TikTok, Facebook)

## Technologies

- HTML5
- CSS3 (Flexbox, Grid, media queries)
- JavaScript (ES6)
- [Font Awesome](https://fontawesome.com/) pour les icônes
- [Google Fonts](https://fonts.google.com/) (Poppins)

## Structure du projet

```
.
├── index.html
├── styles/
│   └── style.css
├── js/
│   ├── config.js      # Informations du restaurant (à modifier par client)
│   └── script.js      # Comportement du site
└── assets/
    └── images/        # Images du site (hero, about, plats)
```

## Lancer le projet en local

Aucune installation nécessaire : ouvre `index.html` dans ton navigateur. Pour un rendu plus proche de la production, utilise une extension de serveur local (par exemple Live Server dans VS Code).

## Configuration

Tout ce qui change d'un restaurant à l'autre se trouve dans `js/config.js` :

| Propriété | Description |
|---|---|
| `name` | Nom du restaurant (logo, titre de l'onglet, copyright, message de réservation) |
| `whatsappNumber` | Numéro WhatsApp : chiffres uniquement, avec l'indicatif du pays, sans `+` ni 0 initial |
| `phone` | Téléphone affiché dans la section Contact |
| `email` | Email affiché dans la section Contact |
| `address` | Adresse affichée dans la section Contact |
| `hours` | Liste des lignes d'horaires |
| `mapUrl` | Adresse `src` de l'iframe Google Maps (Partager → Intégrer une carte) |
| `socials` | Liens Instagram, TikTok et Facebook |
| `currency` | Symbole de la devise affiché à côté des prix |
| `menu` | Liste des plats : `name`, `description`, `price` (nombre), `image` (chemin) |

Exemple d'un plat :

```js
{ name: 'Special Burger', description: 'Pain brioché, steak, cheddar.', price: 8.5, image: 'assets/images/burger.jpg' }
```

## Personnaliser le site pour un nouveau client

1. Dupliquer le dossier du projet.
2. Modifier `js/config.js` avec les informations du restaurant.
3. Remplacer les images dans `assets/images/` en gardant les mêmes noms de fichiers (ou mettre à jour les chemins).
4. Adapter dans `index.html` les textes du hero et de la section About, ainsi que le texte `alt` de l'image About.
5. Remplacer les témoignages par de vrais avis du client (avec son accord).
6. Vérifier le site sur ordinateur et sur téléphone.