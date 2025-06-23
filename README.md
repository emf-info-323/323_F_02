<h1><code>Module 323</code> - Programmer de manière fonctionnelle</h1>

# Formative F02 - Entraînement à la programmation fonctionnelle / Solution

## Objectifs

- S'entraîner à la programmation fonctionnelle.
- Se préparer à l'évaluation sommative.

## Rapports à produire

Dans le fichier [f02-data.js](/src/f02-data.js) vous disposez, directement au format JSON, d'une extraction des achats réalisés à la cafétéria de l'EMF par ses clients utilisant un badge.

Vous allez devoir filtrer, réduire et ne prendre que la partie nécessaire de ces données qui correspondent à une liste de demandes spécifiques.

>[!TIP]
>**N.B.** : Observez les noms des rapports à produire (libellés sur les boutons). Ils vous indiquent clairement si vous devez retourner un tableau [] ou un objet {}.

Les rapports à produire :

- [A01 - La plus petite et la plus grande date](#a01---la-plus-petite-et-la-plus-grande-date)
- [A02 - Le chiffre d'affaire quotidien moyen](#a02---le-chiffre-daffaire-quotidien-moyen)
- [A03 - ???](#a03---)
- [A04 - ???](#a04---)
- [A05 - ???](#a05---)
- [A06 - ???](#a06---)
- [A07 - ???](#a07---)
- [A08 - ???](#a08---)
- [A09 - ???](#a09---)
- [A10 - ???](#a10---)
- [A11 - ???](#a11---)
- [A12 - ???](#a12---)

### Utilisation de `reduce()` seul

#### A01 - La plus petite et la plus grande date

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
{
   "dateMin": "2024-09-02",
   "dateMax": "2024-12-31"
}
```

#### A02 - Le chiffre d'affaire quotidien moyen

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir la moyenne demandée:

>[!TIP]
>La somme de toutes les ventes réalisées divisé par le nombre de journées distinctes.

```json
118.20344827586193
```

#### A03 - Liste des clients par id

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "ID2108DF8A-37B5AB5A": {
      "nom": "Terrieur",
      "prenom": "Alex"
   },
   "ID12D7310B-3972B953": {
      "nom": "Terrieur",
      "prenom": "Alain"
   },
   "ID1C4E8094-30849278": {
      "nom": "Ternet",
      "prenom": "Alain"
   },
   "ID3A3D49B6-21F77D0C": {
      "nom": "Friedli",
      "prenom": "Paul"
   },
   "ID09F6B523-042C8280": {
      "nom": "Nissens",
      "prenom": "Remy"
   },
   "ID1529E3C7-1A2CDD50": {
      "nom": "Fice",
      "prenom": "Eddy"
   },
   "ID38D4C392-0FB4B1D9": {
      "nom": "d'Œuf",
      "prenom": "John"
   },
   "ID0BAA34BE-15694812": {
      "nom": "Haroni",
      "prenom": "Mac"
   },
   "ID289F8B35-39C65DB1": {
      "nom": "Galley",
      "prenom": "Philippe"
   },
   "ID188020B2-1C54920C": {
      "nom": "Célère",
      "prenom": "Jack"
   },
   "ID11CEAC28-34EE910C": {
      "nom": "Voyante",
      "prenom": "Claire"
   },
   "ID29AFF6B4-36813BA8": {
      "nom": "Rique",
      "prenom": "Théo"
   },
   "ID2141229C-0B0CBFB0": {
      "nom": "Tariste",
      "prenom": "Guy"
   }
}
```

#### A04 - Liste des clients et leur CA

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

>[!TIP]
>À la fin, la méthode `Object.values(unObjet)` vous permettra de transformer votre objet en un tableau ne contenant que les valeurs face aux clé ;-)

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
[
   {
      "id": "ID2108DF8A-37B5AB5A",
      "nom": "Terrieur",
      "prenom": "Alex",
      "ca": 731.9000000000001
   },
   {
      "id": "ID12D7310B-3972B953",
      "nom": "Terrieur",
      "prenom": "Alain",
      "ca": 756.8999999999999
   },
   {
      "id": "ID1C4E8094-30849278",
      "nom": "Ternet",
      "prenom": "Alain",
      "ca": 813.6999999999998
   },
   {
      "id": "ID3A3D49B6-21F77D0C",
      "nom": "Friedli",
      "prenom": "Paul",
      "ca": 909.2
   },
   {
      "id": "ID09F6B523-042C8280",
      "nom": "Nissens",
      "prenom": "Remy",
      "ca": 795.0999999999998
   },
   {
      "id": "ID1529E3C7-1A2CDD50",
      "nom": "Fice",
      "prenom": "Eddy",
      "ca": 834.1999999999999
   },
   {
      "id": "ID38D4C392-0FB4B1D9",
      "nom": "d'Œuf",
      "prenom": "John",
      "ca": 787.3999999999997
   },
   {
      "id": "ID0BAA34BE-15694812",
      "nom": "Haroni",
      "prenom": "Mac",
      "ca": 828.6000000000001
   },
   {
      "id": "ID289F8B35-39C65DB1",
      "nom": "Galley",
      "prenom": "Philippe",
      "ca": 866.7999999999998
   },
   {
      "id": "ID188020B2-1C54920C",
      "nom": "Célère",
      "prenom": "Jack",
      "ca": 667.1999999999996
   },
   {
      "id": "ID11CEAC28-34EE910C",
      "nom": "Voyante",
      "prenom": "Claire",
      "ca": 684.5
   },
   {
      "id": "ID29AFF6B4-36813BA8",
      "nom": "Rique",
      "prenom": "Théo",
      "ca": 852.1999999999998
   },
   {
      "id": "ID2141229C-0B0CBFB0",
      "nom": "Tariste",
      "prenom": "Guy",
      "ca": 756
   }
]
```

#### A05 - CA et nbre de ventes par jour de la semaine

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela ‼️

>[!TIP]
>Pour identifier le nom du jour de la semaine à partir d'une date, utilisez la formule suivante : `new Date(unedate).getDay()`. Cette formule vous retournera un nombre de 0..6 correspondant à "lundi".."dimanche".

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "lundi": {
      "ca": 2233.2,
      "nbre_ventes": 229
   },
   "mardi": {
      "ca": 2180.000000000001,
      "nbre_ventes": 239
   },
   "mercredi": {
      "ca": 1807.6000000000004,
      "nbre_ventes": 214
   },
   "jeudi": {
      "ca": 2200.0000000000005,
      "nbre_ventes": 233
   },
   "vendredi": {
      "ca": 1862.8999999999999,
      "nbre_ventes": 212
   }
}
```

#### A06 - CA par type de produit

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "Fruits": 281.5,
   "Boisson énergisante": 490,
   "Salades": 653.0000000000003,
   "Boisson froide": 1582.6999999999975,
   "Boisson chaude": 1285,
   "Plats chauds": 2572.5,
   "Produits laitiers": 333.6000000000003,
   "Sandwich": 1170.8999999999965,
   "Viennoiserie": 415,
   "Pâtisseries & desserts": 535.5,
   "Biscuits": 549,
   "Snacks": 414.9999999999993
}
```

#### A07 - Types de produits et leur produits

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "Fruits": [
      "Poire",
      "Banane",
      "Pomme"
   ],
   "Boisson énergisante": [
      "Monster Energy, cannette 300ml",
      "Red Bull, cannette 250ml"
   ],
   "Salades": [
      "Salade de pâtes",
      "Salade césar"
   ],
   "Boisson froide": [
      "Eau minérale plate 3dl",
      "Jus de pommes 3dl",
      "Eau minérale gazeuse 3dl",
      "Thé-froid citron maison sans sucre 4dl",
      "Coca-cola 3dl",
      "Thé-froid citron 3dl",
      "Thé-froid pêche 3dl",
      "Coca-cola zéro 3dl"
   ],
   "Boisson chaude": [
      "Café",
      "Cappuccino",
      "Espresso",
      "Latte macchiato",
      "Chocolat chaud",
      "Thé"
   ],
   "Plats chauds": [
      "Plat du jour chaud avec viande",
      "Plat du jour chaud avec pâtes ou riz",
      "Plat du jour chaud végétarien"
   ],
   "Produits laitiers": [
      "Briquette de lait UHT de 250ml",
      "Morceau de Gruyère AOP surchoix 100g"
   ],
   "Sandwich": [
      "Sandwich poulet/curry",
      "Sandwich jambon/beurre",
      "Sandwich jambon/fromage",
      "Sandwich au thon"
   ],
   "Viennoiserie": [
      "Croissant au beurre",
      "Petit-pain au lait",
      "Petit-pain au chocolat"
   ],
   "Pâtisseries & desserts": [
      "Tranche de gâteau aux noix",
      "Tranche de gâteau aux pommes"
   ],
   "Biscuits": [
      "Les bricelets de grand-mère, paquet de 10",
      "Les palets Bretons, paquet de 5"
   ],
   "Snacks": [
      "Cacahouettes",
      "Chips paprika",
      "Sachet de fruits secs",
      "Barre de céréales"
   ]
}
```

#### A08 - Nbre de vente des produits par type

⚠️ Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
{
   "Fruits": {
      "Poire": 93,
      "Banane": 79,
      "Pomme": 70
   },
   "Boisson énergisante": {
      "Monster Energy, cannette 300ml": 68,
      "Red Bull, cannette 250ml": 72
   },
   "Salades": {
      "Salade de pâtes": 74,
      "Salade césar": 85
   },
   "Boisson froide": {
      "Eau minérale plate 3dl": 91,
      "Jus de pommes 3dl": 94,
      "Eau minérale gazeuse 3dl": 79,
      "Thé-froid citron maison sans sucre 4dl": 81,
      "Coca-cola 3dl": 75,
      "Thé-froid citron 3dl": 73,
      "Thé-froid pêche 3dl": 69,
      "Coca-cola zéro 3dl": 96
   },
   "Boisson chaude": {
      "Café": 75,
      "Cappuccino": 78,
      "Espresso": 88,
      "Latte macchiato": 89,
      "Chocolat chaud": 81,
      "Thé": 88
   },
   "Plats chauds": {
      "Plat du jour chaud avec viande": 87,
      "Plat du jour chaud avec pâtes ou riz": 87,
      "Plat du jour chaud végétarien": 71
   },
   "Produits laitiers": {
      "Briquette de lait UHT de 250ml": 76,
      "Morceau de Gruyère AOP surchoix 100g": 84
   },
   "Sandwich": {
      "Sandwich poulet/curry": 79,
      "Sandwich jambon/beurre": 84,
      "Sandwich jambon/fromage": 83,
      "Sandwich au thon": 75
   },
   "Viennoiserie": {
      "Croissant au beurre": 92,
      "Petit-pain au lait": 82,
      "Petit-pain au chocolat": 77
   },
   "Pâtisseries & desserts": {
      "Tranche de gâteau aux noix": 82,
      "Tranche de gâteau aux pommes": 71
   },
   "Biscuits": {
      "Les bricelets de grand-mère, paquet de 10": 86,
      "Les palets Bretons, paquet de 5": 97
   },
   "Snacks": {
      "Cacahouettes": 72,
      "Chips paprika": 88,
      "Sachet de fruits secs": 85,
      "Barre de céréales": 70
   }
}
```

#### A09 -

⚠️ ????? Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
```

#### A10 -

⚠️ ????? Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
```

#### A11 -

⚠️ ????? Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
```

#### A12 -

⚠️ ????? Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
```

#### A13 -

⚠️ ????? Votre code doit utiliser la méthode `reduce()` pour faire cela mais peut s'aider d'autres méthodes comme `flatMap` ‼️

À partir des données déjà chargées dans `jsonData`, vous devez obtenir les information suivantes :

```json
```

---

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
