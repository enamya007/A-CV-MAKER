# GENERATEUR DE CV INTERACTIF

CV moderne et professionnel généré automatiquement à partir d'un fichier de configuration.

COMMENT UTILISER ?

### Étape 1 : Modifier vos informations
Ouvrez le fichier `The_First_Js.js` et modifiez toutes les informations avec **VOS** données personnelles :
```javascript
const CV_CONFIG = {
    nom: "VOTRE NOM",
    localisation: "Votre ville, Pays",
    telephone: "+XXX XX XX XX XX",
    email: "votre.email@example.com",
    // ... etc
};
```

### Étape 2 : Ouvrir le CV
Double-cliquez sur `The_Html.html` → votre CV s'affiche automatiquement !

### Étape 3 : Télécharger en PDF
Cliquez sur le bouton **"Télécharger PDF"** en bas à droite, ou utilisez `Ctrl+P` (Windows) / `Cmd+P` (Mac).

## Sections modifiables dans The_First_Js.js

- ✅ Informations personnelles (nom, localisation, contacts)
- ✅ Titre professionnel
- ✅ Profil / À propos
- ✅ Formation
- ✅ Parcours scolaire
- ✅ Langues
- ✅ Compétences techniques (langages, frameworks, outils, etc.)
- ✅ Projets (académiques et personnels)
- ✅ Qualités personnelles
- ✅ Centres d'intérêt

## Personnalisation avancée

### Changer les couleurs
Modifier dans `The_Css.css` :
```css
/* Couleur principale */
.header {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

/* Couleur d'accentuation */
.section-title {
    border-bottom: 2px solid #00d9ff;
}
```

### Ajouter/Retirer des sections
1. Modifiez `The_First_Js.js` pour ajouter vos données
2. Modifiez `The_Second_Js.js` pour générer la section
3. Ajoutez la structure HTML dans `The_Html.html` si nécessaire

##  Responsive
Le CV s'adapte automatiquement aux smartphones et tablettes.

## Impression / PDF
Le CV est optimisé pour l'impression et la génération PDF directement depuis le navigateur.

## Technologies utilisées
- HTML5
- CSS3 (Grid, Flexbox, Gradients)
- JavaScript (ES6+)
- Font Awesome (icônes)
- Google Fonts (Inter)

## Fonctionnalités
- ✅ Génération automatique à partir d'un fichier de config
- ✅ Design moderne et professionnel
- ✅ 100% personnalisable
- ✅ Export PDF en un clic
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Icônes modernes
- ✅ Mise en page sur 1 page (format A4)

## Support
Si vous rencontrez des problèmes, vérifiez que tous les fichiers sont dans le même dossier et que vous avez bien modifié `The_First_Js.js`.

---

**Bon courage pour votre recherche d'emploi ! **
