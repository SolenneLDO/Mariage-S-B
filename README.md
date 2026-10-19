# Site de mariage de Solenne & Bradford

Site bilingue (français / anglais) à héberger gratuitement avec GitHub Pages.
Aucun outil à installer : tout se fait depuis le navigateur.

## Contenu du dossier

| Fichier | À quoi il sert |
|---|---|
| `index.html` | Tout le contenu du site (textes FR et EN côte à côte) |
| `styles.css` | Les couleurs, les polices et la mise en page |
| `script.js` | Le bouton FR/EN, le compte à rebours, l'e-mail et le lien de réponse |
| `images/` | Vos photos (voir plus bas) |

## 1. Mettre le site en ligne (environ 10 minutes)

1. Créez un compte gratuit sur **github.com**.
2. Cliquez sur **+** en haut à droite, puis **New repository**.
   - *Repository name* : par exemple `mariage`
   - Choisissez **Public** (obligatoire pour GitHub Pages gratuit)
   - Cliquez sur **Create repository**
3. Sur la page du dépôt, cliquez sur **uploading an existing file**.
4. Glissez-déposez **le contenu** du dossier (`index.html`, `styles.css`, `script.js`, `README.md` et le dossier `images`), pas le dossier lui-même.
5. Cliquez sur **Commit changes**.
6. Allez dans **Settings**, puis **Pages** (menu de gauche).
   - *Source* : **Deploy from a branch**
   - *Branch* : **main**, dossier **/ (root)**, puis **Save**
7. Attendez 1 à 2 minutes et rafraîchissez la page : l'adresse du site apparaît en haut, sous la forme
   `https://VOTRE-NOM.github.io/mariage/`

**Astuce pour une adresse plus courte** : nommez le dépôt exactement `VOTRE-NOM.github.io`. Le site sera alors à `https://VOTRE-NOM.github.io/`.

## 2. Compléter vos informations

### Votre e-mail et le lien de réponse (RSVP)
Ouvrez `script.js` (clic sur le fichier, puis l'icône crayon) et modifiez les trois lignes en haut :

- `contactEmail` : l'adresse e-mail à afficher aux invités
- `rsvpUrl` : le lien de votre formulaire de réponse (Google Forms, Tally...). Laissez `""` pour que le bouton ouvre simplement un e-mail.
- `weddingDate` : déjà réglée sur le 3 juillet 2027

### Les textes
Dans `index.html`, chaque texte existe en deux versions, l'une à côté de l'autre :

```html
<p class="fr">Texte en français</p>
<p class="en">Text in English</p>
```

Modifiez les deux versions à chaque fois.

### Les textes encore à confirmer
Ils apparaissent **surlignés en vert avec un contour en pointillés** sur le site. Ils portent `todo` dans leur classe (`class="fr todo"`). Une fois le texte final, supprimez simplement le mot `todo`. Liste actuelle :

- Notre histoire (texte à écrire)
- Horaires du dîner de bienvenue, du mariage et du brunch
- Notre sélection d'hébergements
- Stationnement et navettes
- Date limite de réponse (RSVP)
- Liste de cadeaux (FAQ)
- Date limite de réponse (FAQ)

### Les photos
Ajoutez vos photos dans le dossier `images/` avec exactement ces noms :

- `histoire.jpg` : photo en arche à côté de « Notre histoire »
- `domaine.jpg` : photo en arche à côté de « Le domaine »

Pour cela : dans GitHub, ouvrez le dossier `images`, puis **Add file**, **Upload files**. Tant qu'il n'y a pas de photo, une arche aux couleurs sauge et mousse s'affiche à la place. Pensez à réduire vos photos (environ 1600 pixels de large, moins de 500 Ko) pour que le site reste rapide.

## 3. Partager le site

- Lien en français : `https://VOTRE-NOM.github.io/mariage/?lang=fr`
- Lien en anglais : `https://VOTRE-NOM.github.io/mariage/?lang=en`

Sans le `?lang=`, le site choisit la langue du navigateur de l'invité, et le bouton FR / EN permet de changer à tout moment.

## 4. Bon à savoir

- **Confidentialité** : le dépôt est public et l'adresse du site est accessible à toute personne qui la connaît. Le site est réglé pour ne pas apparaître sur Google (`noindex`), mais n'y mettez pas de numéros de téléphone ni d'informations privées.
- **Nom de domaine perso** (optionnel, environ 10 à 15 $ par an) : achetez-le chez un registrar, puis **Settings > Pages > Custom domain** dans GitHub.
- **Polices** : Bodoni Moda et Jost sont chargées depuis Google Fonts, il faut donc une connexion internet.
- **Modifier les couleurs** : en haut de `styles.css`, dans le bloc `:root`.
