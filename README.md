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
]```


1) pour chacun des produits existants, le nombre moyen vendu quotidiennement
2) pour chacun des clients, les ventes réalisées
3) pour chacun des clients, le chiffre d'affaires total
4) pour chacun des "jour" de la semaine mentionnés, le chiffre d'affaires total et nbre de ventes réalisés
5) le chiffre d'affaire réalisé "type" de vente par type de vente
6) "type" de vente par type de vente, la liste des produits correspondante
7) "type" de vente par type de vente, produit par produit, le nbre de produits vendus

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A04 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A05 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A06 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A07 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A08 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A09 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A10 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A11 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

### A12 - ???

À partir des données déjà chargées dans `jsonData`, vous devez obtenir ceci :

```json
```

---

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
