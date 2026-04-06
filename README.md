# 🌺 Comparateur FAI Polynésie

Comparez les offres Fibre, 4G/5G et Mobile des 3 opérateurs du Fenua : **Vini**, **Ora** et **Vodafone**.

## 🚀 Déployer sur Vercel (méthode facile)

1. Va sur **https://vercel.com**
2. Crée un compte gratuit (email ou Google)
3. Clique sur **"Add New Project"**
4. Clique sur **"Upload"** et glisse ce dossier
5. Clique sur **"Deploy"**
6. C'est en ligne ! 🎉

Tu auras une URL du type : `comparateur-fai-polynesie.vercel.app`

## 🖥️ Lancer en local (optionnel)

Si tu veux tester sur ton PC avant de mettre en ligne :

```bash
# Installe les dépendances
npm install

# Lance le site
npm start
```

Le site s'ouvre sur http://localhost:3000

## 📁 Structure du projet

```
comparateur-fai-polynesie/
├── public/
│   └── index.html       # Page HTML
├── src/
│   ├── App.js           # Code du comparateur
│   ├── index.js         # Point d'entrée
│   └── index.css        # Styles
├── package.json         # Configuration
└── README.md            # Ce fichier
```

## ✏️ Modifier les données

Pour mettre à jour les offres ou les prix, ouvre `src/App.js` et modifie :

- `operators` : infos sur les 3 opérateurs
- `offers` : liste des offres (fibre, box4g, mobile)
- `latencyData` : données de ping gaming
- `coverage` : tableau de couverture par archipel

## 📝 Licence

Créé pour le Fenua 🌴
