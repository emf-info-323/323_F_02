<h1><code>Module 323</code> - Programmer de manière fonctionnelle</h1>

# Formative F02 - Entraînement à la programmation fonctionnelle

## Objectifs

-   S'entraîner à la programmation fonctionnelle.
-   Se préparer à l'évaluation sommative.

## Rapports à produire

Dans le fichier [f02-data.js](/src/f02-data.js) vous disposez, directement au format JSON, d'une extraction des achats réalisés à la cafétéria de l'EMF par ses clients utilisant un badge.

Vous allez devoir filtrer, réduire et ne prendre que la partie nécessaire de ces données qui correspondent à une liste de demandes spécifiques.

> [!TIP] >**N.B.** : Observez les noms des rapports à produire (libellés sur les boutons). Ils vous indiquent clairement si vous devez retourner un tableau [] ou un objet {}.

N.B. ⚠️ Vous n'avez pas le droit d'utiliser les boucles comme `foreach()` ‼️

Les rapports à produire :

-   [Formative F02 - Entraînement à la programmation fonctionnelle](#formative-f02---entraînement-à-la-programmation-fonctionnelle)
    -   [Objectifs](#objectifs)
    -   [Rapports à produire](#rapports-à-produire)
        -   [Rapport A01 - Calculer le prix TTC](#rapport-a01---calculer-le-prix-ttc)
            -   [Objectif](#objectif)
            -   [Consigne](#consigne)
        -   [Rapport A02 - Afficher les fruits](#rapport-a02---afficher-les-fruits)
            -   [Objectif](#objectif-1)
            -   [Consigne](#consigne-1)
        -   [Rapport A03 - Filtrer en fonction d'un stock minimum](#rapport-a03---filtrer-en-fonction-dun-stock-minimum)
            -   [Ojectif](#ojectif)
            -   [Consigne](#consigne-2)
        -   [Rapport A04 - Produits bio](#rapport-a04---produits-bio)
            -   [Objectif](#objectif-2)
            -   [Consigne](#consigne-3)
        -   [Rapport A05 - Marquer les produits chers](#rapport-a05---marquer-les-produits-chers)
            -   [Objectif](#objectif-3)
            -   [Consigne](#consigne-4)
        -   [Rapport A06 - Transformer les produits](#rapport-a06---transformer-les-produits)
            -   [Objectif](#objectif-4)
            -   [Consigne](#consigne-5)
        -   [Rapport A07 - Calculer le total TTC du stock](#rapport-a07---calculer-le-total-ttc-du-stock)
            -   [Objectif](#objectif-5)
            -   [Consigne](#consigne-6)
        -   [Rapport A08 - Filtrer les produits bio en stock](#rapport-a08---filtrer-les-produits-bio-en-stock)
            -   [Objectif](#objectif-6)
            -   [Consigne](#consigne-7)
        -   [Rapport A09 - Nombre de produits bio en stock et chiffre d'affaires TTC](#rapport-a09---nombre-de-produits-bio-en-stock-et-chiffre-daffaires-ttc)
            -   [Objectif](#objectif-7)
            -   [Consigne](#consigne-8)
        -   [Rapport A10 - Nombre de produits bio en stock et chiffre d'affaires TTC avec un pipe](#rapport-a10---nombre-de-produits-bio-en-stock-et-chiffre-daffaires-ttc-avec-un-pipe)
            -   [Objectif](#objectif-8)
            -   [Consigne](#consigne-9)

### Rapport A01 - Calculer le prix TTC

#### Objectif

Mettre en œuvre une fonction unaire permettant de calculer le prix TTC (toutes taxes comprises) d’un produit à partir de son prix HT (hors taxe).

#### Consigne

Vous devez écrire une fonction unaire nommée prixTTC qui :

-   prend un seul paramètre, représentant le prix hors taxe (ht) ;
-   retourne le prix TTC, calculé à l’aide du taux de TVA contenu dans l’objet catalogue (catalogue.tva) ;
-   arrondit le résultat à deux décimales ;
-   ne modifie en aucun cas les données existantes.

Ensuite, vous devez :

1. Appliquer cette fonction à tous les produits présents dans catalogue.produits à l’aide de la méthode map().

2. Produire un nouveau tableau d’objets contenant pour chaque produit :

    - son identifiant (id),

    - son nom (nom),

    - son prix hors taxe (ht),

    - et son prix TTC (ttc).

3. Afficher ce tableau dans la balise `<pre id="output">` de la page Web grâce à la fonction `afficherObjet`.

```json
[
   {
      "id": "P1001",
      "nom": "Pommes Gala",
      "ht": 6.49,
      "ttc": 6.99
   },
   {
      "id": "P1002",
      "nom": "Bananes",
      "ht": 6.72,
      "ttc": 7.24
   },
    ...
   {
      "id": "P1050",
      "nom": "Lait de soja",
      "ht": 6.39,
      "ttc": 6.88
   },
   {
      "id": "P1051",
      "nom": "Beurre de cacahuète",
      "ht": 11.22,
      "ttc": 12.08
   }
]
```

<details>
<summary>Critères d'évaluation</summary>

-   **Respect du concept de fonction unaire**
    La fonction prixTTC prend un seul paramètre et ne dépend d’aucune variable externe autre que catalogue.tva.

-   **Pureté de la fonction**
    La fonction ne produit aucun effet de bord (pas de modification de données, pas d’affichage direct).

-   **Exactitude du calcul**
    Le prix TTC est correctement calculé selon la formule (ht \* (1 + catalogue.tva)), puis arrondi à deux décimales.

-   **Immuabilité des données**
    Le tableau original catalogue.produits n’est pas modifié ; un nouveau tableau est créé à l’aide de map().

-   **Lisibilité du résultat**
    Le contenu affiché dans la balise `<pre>` est bien structuré, clair et facilement compréhensible.

</details>

### Rapport A02 - Afficher les fruits

#### Objectif

Mettre en œuvre le currying afin de transformer une fonction à plusieurs paramètres en une chaîne de fonctions unaires réutilisables pour filtrer des produits par catégorie.

#### Consigne

Vous devez écrire une fonction curryfiée nommée filtrerParCategorie qui :

-   prend d’abord un unique paramètre categorie (ex. "fruits", "legumes", "epicerie") et retourne une fonction ;

-   la fonction retournée prend à son tour une liste de produits et renvoie uniquement les produits dont p.categorie === categorie ;

-   n’altère en aucun cas les données originales (travail en immuable).

Ensuite, vous devez :

1. Appliquer filtrerParCategorie à une catégorie donnée (par exemple "fruits"), ce qui doit retourner une fonction ;

2. Appliquer cette fonction retournée à jsonData.produits pour obtenir le sous-ensemble filtré ;

3. Afficher le résultat filtré au format JSON lisible dans l’élément prévu de la page à l’aide de afficherObjet().

```json
[
   {
      "id": "P1001",
      "nom": "Pommes Gala",
      "categorie": "fruits",
      "marque": "Montagne Pure",
      "prixCHF": 6.49,
      "unite": "kg",
      "stock": 109,
      "bio": true,
      "allergenes": [],
      "ingredients": [],
      "origine": "Brésil",
      "datePeremption": null,
      "poidsGrammes": 500,
      "caloriesPour100g": 91,
      "etiquettes": []
   },
   ...
   {
      "id": "P1051",
      "nom": "Beurre de cacahuète",
      "categorie": "fruits",
      "marque": "Montagne Pure",
      "prixCHF": 11.22,
      "unite": "paquet",
      "stock": 107,
      "bio": true,
      "allergenes": [
         "fruits à coque"
      ],
      "ingredients": [
         "eau",
         "sucre"
      ],
      "origine": "France",
      "datePeremption": null,
      "poidsGrammes": 750,
      "caloriesPour100g": 444,
      "etiquettes": []
   }
]
```

<details>

<summary>Critères d'évaluation</summary>

-   **Usage correct du currying**
    filtrerParCategorie est appelée en deux temps : filtrerParCategorie('fruits') puis (jsonData.produits).

-   **Respect des fonctions unaires**
    Chaque niveau de la fonction curryfiée prend un seul paramètre.

-   **Pureté et immuabilité**
    Aucune mutation de jsonData.produits ; la fonction retourne un nouveau tableau filtré.

-   **Exactitude du filtre**
    Le résultat ne contient que des produits dont categorie correspond à la valeur fournie.

-   **Lisibilité du résultat**
    Le contenu est affiché clairement via afficherObjet().

</details>

### Rapport A03 - Filtrer en fonction d'un stock minimum

#### Ojectif

Mettre en œuvre une closure afin de créer un filtre de produits paramétrable qui mémorise un seuil de stock minimal.

#### Consigne

Vous devez écrire une fonction _closure_ nommée creerFiltreStockMin qui :

-   prend d’abord un unique paramètre min (seuil de stock minimal), stocke localement ladite valeur min et retourne une fonction ;

-   la fonction retournée prend une liste de produits et renvoie uniquement ceux dont stock >= min ;

-   n’altère pas les données originales (travail en immuable) ;

-   illustre le concept de closure : la valeur min doit rester disponible dans la fonction retournée, même après la fin de l’appel initial.

Ensuite, vous devez :

1. Créer une fonction spécialisée avec un seuil (ex. min = 10) : const filtrerStock10 = creerFiltreStockMin(10);

2. Appliquer cette fonction à jsonData.produits ;

3. Afficher le résultat au format JSON lisible dans l’élément prévu de la page à l’aide de afficherObjet() (par exemple, ne montrer que id, nom, stock).

```json
[
   {
      "id": "P1001",
      "nom": "Pommes Gala",
      "stock": 109
   },
   {
      "id": "P1003",
      "nom": "Tomates grappe",
      "stock": 108
   },
   ...
   {
      "id": "P1050",
      "nom": "Lait de soja",
      "stock": 68
   },
   {
      "id": "P1051",
      "nom": "Beurre de cacahuète",
      "stock": 107
   }
]
```

<details>

<summary>Critères d'évaluation</summary>

-   **Mise en œuvre correcte d’une closure**
    La valeur min est mémorisée et utilisée ultérieurement par la fonction retournée.

-   **Respect des fonctions unaires**
    Chaque niveau de la fonction renvoie une fonction à un seul paramètre : d’abord min, puis la liste.

-   **Pureté et immuabilité**
    Aucune mutation de jsonData.produits ; la fonction retourne un nouveau tableau filtré.

-   **Exactitude du filtre**
    Le résultat contient uniquement les produits dont stock >= min.

-   **Lisibilité du résultat**
    Le contenu est affiché clairement via afficherObjet() (champs pertinents et format JSON lisible).

-   **Réutilisabilité**
    Possibilité de créer aisément d’autres filtres (creerFiltreStockMin(1), creerFiltreStockMin(20), etc.).

</details>

### Rapport A04 - Produits bio

#### Objectif

Réécrire des callbacks en fonctions fléchées afin d’obtenir un code plus concis et lisible, sans modifier les données sources.

#### Consigne

Vous devez, à partir de l’objet jsonData, réaliser les opérations suivantes exclusivement avec des fonctions fléchées :

1. Lister les noms de tous les produits (via map), sous la forme d’un tableau de chaînes.

2. Filtrer les produits bio en stock (via filter) et projeter le résultat sous la forme d’objets { id, nom, stock }.

3. Calculer le total TTC du stock (via reduce). Arrondir le total à deux décimales.

Contraintes :

-   Utilisez la syntaxe fléchée partout où c’est pertinent (y compris corps concis sans _return_ lorsque possible).

-   Respectez la pureté et l’immuabilité (ne modifiez pas jsonData).

-   N’utilisez pas _function_ ni _this_ dans ces callbacks.

```json
{
    {
   "nomsProduits": [
      "Pommes Gala",
      "Bananes",
      "Tomates grappe",
      "Pâtes Penne",
      ...
      "Vinaigre balsamique",
      "Lait de soja",
      "Beurre de cacahuète"
   ],
   "produitsBioEnStock": [
      {
         "id": "P1001",
         "nom": "Pommes Gala",
         "stock": 109
      },
      ...
      {
         "id": "P1051",
         "nom": "Beurre de cacahuète",
         "stock": 107
      }
   ],
   "totalStockTTCCFH": 29257.46
}
}
```

<details>

<summary>Critères d'évaluation</summary>

-   **Usage correct des fonctions fléchées**
    Callbacks écrits avec la syntaxe =>, corps concis lorsque c’est approprié.

-   **Pureté et immuabilité**
    Aucune mutation de jsonData; création de nouveaux tableaux/valeurs.

-   **Exactitude des résultats**
    Noms correctement extraits; filtrage strictement bio && stock > 0; total TTC arrondi à deux décimales avec la TVA de jsonData.tva.

-   **Lisibilité**
    Code clair, projection minimale des champs nécessaires; affichage structuré via afficherObjet().

-   **Conformité aux contraintes**
    Pas d’usage de function ni de this dans les callbacks.

</details>

### Rapport A05 - Marquer les produits chers

#### Objectif

Mettre en œuvre une fonction pure qui enrichit des objets sans modifier les données sources (respect de l’immuabilité).

#### Consigne

Vous devez écrire une fonction pure nommée marquerCher qui :

-   prend un produit en paramètre ;

-   retourne un nouvel objet produit :

    -   inchangé si prixCHF <= 4,

    -   ou avec l’étiquette "cher" ajoutée dans etiquettes si prixCHF > 4 (sans doublon) ;

-   ne modifie pas l’objet reçu en entrée (copie immuable).

Ensuite, vous devez :

1. Appliquer marquerCher à tous les produits de jsonData.produits à l’aide de map() pour produire un nouveau tableau ;

2. Afficher un résultat structuré via afficherObjet() contenant :

    - le nombre de produits marqués "cher",

    - un aperçu des produits (champs : id, nom, prixCHF, etiquettes).

```json
{
   "nbMarques": 41,
   "apercu": [
      {
         "id": "P1001",
         "nom": "Pommes Gala",
         "prixCHF": 6.49,
         "etiquettes": [
            "cher"
         ]
      },
      {
         "id": "P1002",
         "nom": "Bananes",
         "prixCHF": 6.72,
         "etiquettes": [
            "saison",
            "local",
            "cher"
         ]
      },
    ...
      {
         "id": "P1051",
         "nom": "Beurre de cacahuète",
         "prixCHF": 11.22,
         "etiquettes": [
            "cher"
         ]
      }
   ]
}
```

<details>

<summary>Critères d'évaluation</summary>

-   **Pureté**

    La fonction ne produit aucun effet de bord (pas d’écriture ni sur l’argument ni sur des variables globales).

-   **Immuabilité**

    Aucune mutation in-place : utilisation de la copie ({ ...obj }, [...]) pour tout enrichissement.

-   **Exactitude**

    Ajout de "cher" uniquement si prixCHF > 4 et sans doublon dans etiquettes.

-   **Utilisation correcte de map()**

    Création d’un nouveau tableau de produits enrichis.

-   **Lisibilité de la sortie**

    Affichage clair (objet contenant nbMarques et un aperçu des produits).

</details>

### Rapport A06 - Transformer les produits

#### Objectif

Utiliser la méthode map() pour transformer une collection d’objets produits en :

-   une liste de libellés lisibles,

-   une liste d’identifiants,

-   une projection d’objets ne contenant que certains champs pertinents.

#### Consigne

À partir de jsonData.produits, vous devez :

1. Écrire une fonction pure et unaire versLibelle(p) qui retourne une chaîne de la forme :
   "`<nom>` — `<prixCHF>` CHF — stock: `<stock>`".
   Le prix peut être formaté à deux décimales si vous le jugez utile.

2. Produire, à l’aide de map() uniquement :

    - libelles : un tableau de chaînes obtenu en appliquant versLibelle à chaque produit ;
    - ids : un tableau des identifiants (champ id) ;
    - projection : un tableau d’objets ne contenant que les champs { id, nom, prixCHF, bio, stock }.

3. Afficher un objet regroupant ces trois résultats avec afficherObjet().

**Contraintes** :

Respecter la pureté (aucune modification de jsonData) et l’immuabilité (création de nouvelles valeurs).
N’utiliser que map() pour les transformations demandées (pas de for, pas de forEach).

```json
{
   "libelles": [
      "Pommes Gala — 6.49 CHF — stock: 109",
      ...
      "Beurre de cacahuète — 11.22 CHF — stock: 107"
   ],
   "ids": [
      "P1001",
      ...
      "P1051"
   ],
   "projection": [
      {
         "id": "P1001",
         "nom": "Pommes Gala",
         "prixCHF": 6.49,
         "bio": true,
         "stock": 109
      },
      ...
      {
         "id": "P1051",
         "nom": "Beurre de cacahuète",
         "prixCHF": 11.22,
         "bio": true,
         "stock": 107
      }
   ]
}
```

<details>

<summary>Critères d'évaluation</summary>

-   **Usage correct de map()**
    Les trois résultats sont construits par transformation 1→1 sans effets de bord.

-   **Pureté et immuabilité**
    jsonData n’est jamais modifié ; seules des nouvelles valeurs sont produites.

-   **Exactitude des transformations**

    -   libelles suit le format indiqué ;
    -   ids contient uniquement les identifiants ;
    -   projection expose exactement { id, nom, prixCHF, bio, stock }.

-   **Lisibilité**
    Fonctions petites et explicites ; code clair et correctement indenté.

-   **Affichage**
    L’objet final { libelles, ids, projection } est transmis à afficherObjet().

</details>

### Rapport A07 - Calculer le total TTC du stock

#### Objectif

Utiliser reduce() pour calculer une valeur agrégée à partir de la collection de produits.

#### Consigne

À partir de jsonData.produits, vous devez :

1. Écrire une fonction pure et unaire valeurStockTTCPour(p) qui retourne, pour un produit p, la valeur TTC de son stock :

    - valeur pour p = p.prixCHF × (1 + jsonData.tva) × p.stock

1. Écrire une fonction reduce qui calcule le total TTC du stock de tous les produits, en :

    - initialisant correctement l’accumulateur à 0,
    - additionnant la valeur TTC de chaque produit,
    - arrondissant le total à deux décimales à la fin du calcul.

1. Afficher un objet JSON contenant :

    - totalTTCCFH : le total TTC arrondi à deux décimales,
    - nbProduits : le nombre de produits pris en compte.

Utilisez la fonction fournie afficherObjet() pour l’affichage.
Vous n’êtes pas autorisé à modifier jsonData (travail en immuable).

```json
{
    "totalTTCCFH": 29257.46,
    "nbProduits": 51
}
```

<details>

<summary>Critères d'évaluation</summary>

-   **Utilisation correcte de reduce()**
    -   Accumulateur initialisé à 0.
    -   Fonction réductrice pure (pas d’effets de bord).
-   **Exactitude du calcul**
    -   Formule TTC correcte avec jsonData.tva.
    -   Arrondi à deux décimales effectué après l’agrégation.
-   **Pureté et immuabilité**
    -   Aucune mutation de jsonData ou des éléments du tableau.
-   **Lisibilité**
    -   Noms de fonctions explicites ; code clair et correctement indenté.
-   **Affichage**
    -Résultat structuré via afficherObjet().

</details>

### Rapport A08 - Filtrer les produits bio en stock

#### Objectif

Utiliser filter() pour sélectionner un sous-ensemble de produits répondant à des critères donnés.

#### Consigne

À partir de jsonData.produits, vous devez :

1. Écrire un filtrage qui retient uniquement les produits :

    - bio (p.bio === true),
    - en stock (p.stock > 0).

2. Projeter le résultat sous forme d’objets réduits contenant uniquement les champs : { id, nom, stock }.

3. Afficher le tableau filtré à l’aide de la fonction afficherObjet().

**Contraintes** :

-   Vous ne devez pas modifier jsonData (travail en immuabilité).
-   Vous devez utiliser filter() pour la sélection et map() pour la projection (pas de for, pas de mutation).

```json

```

<details>
<summary>Critères d'évaluation</summary>

-   **Utilisation correcte de filter()**
    Le prédicat retient strictement les produits bio dont stock > 0.
-   **Projection limitée**
    La projection ne contient que { id, nom, stock }.
-   **Pureté et immuabilité**
    Aucune modification des objets sources ; production d’un nouveau tableau.
-   **Lisibilité**
    Code clair, prédicat explicite, projection concise.
-   **Affichage**
    Résultat affiché proprement via afficherObjet().

</details>

### Rapport A09 - Nombre de produits bio en stock et chiffre d'affaires TTC

#### Objectif

Composer des opérations fonctionnelles pour calculer un chiffre d’affaires TTC potentiel sur un sous-ensemble de produits.

#### Consigne

À partir de jsonData.produits, vous devez :

1. Filtrer les produits selon deux critères :

    - appartenant à la catégorie "fruits"),

    - bio (p.bio === true).

2. Transformer (map) chaque produit retenu en une valeur numérique correspondant à sa valeur TTC de stock :

    valeur TTC = p.prixCHF × (1 + jsonData.tva) × p.stock

3. Réduire (reduce) ces valeurs pour obtenir le chiffre d’affaires TTC potentiel total pour cette catégorie et uniquement pour les produits bio. Arrondissez le résultat à deux décimales.

4. Afficher un objet structuré contenant :

    - categorie : la catégorie utilisée,
    - nbProduitsRetenus : le nombre de produits bio de cette catégorie,
    - caTTCCategorieBio : le total TTC arrondi.

Utilisez afficherObjet() pour l’affichage. Vous ne devez pas modifier jsonData (travail en immuabilité).

```json
{
    "categorie": "fruits",
    "nbProduitsRetenus": 6,
    "caTTCCategorieBio": 4864.65
}
```

<details>

<summary>Critères d'évaluation</summary>

-   **Chaînage correct des opérations**
    filter (catégorie & bio) → map (valeur TTC) → reduce (somme).

-   **Exactitude du calcul**
    Formule TTC correcte avec jsonData.tva, arrondi final à deux décimales.

-   **Pureté et immuabilité**
    Aucune mutation de jsonData ; création de nouvelles valeurs/tableaux.

-   **Lisibilité**
    Code clair, prédicats explicites, variables nommées de façon descriptive.

-   **Affichage**
    Objet final conforme : { categorie, nbProduitsRetenus, caTTCCategorieBio }.

</details>

### Rapport A10 - Nombre de produits bio en stock et chiffre d'affaires TTC avec un pipe

#### Objectif

Implémenter une fonction pipe qui compose des fonctions unaires de gauche à droite, puis réécrire le calcul de l’action n°9 (catégorie + bio → CA TTC) sous forme de pipeline lisible et réutilisable.

#### Consigne

Vous devez :

1. Écrire une fonction pipe générique qui :

    - prend une liste de fonctions unaires en paramètres,
    - retourne une nouvelle fonction qui, pour une entrée x, applique successivement chaque fonction du pipeline et renvoie le résultat final.

2. Définir des étapes unaires réutilisables :

    - parCategorie(categorie) : retourne une fonction qui filtre une liste de produits par categorie ;
    - bioOnly : filtre une liste de produits pour ne garder que ceux dont bio === true ;
    - versValeursTTCPieces : mappe chaque produit vers sa valeur TTC de stock p.prixCHF × (1 + jsonData.tva) × p.stock ;
    - somme : réduit une liste de nombres en leur somme.

3. Construire une fonction caBioCat(categorie) avec pipe, puis l’appliquer à jsonData.produits pour :

    - utiliser "fruits" pour la catégorie,
    - produire le chiffre d’affaires TTC total pour la catégorie et les produits bio,
    - arrondir le résultat à deux décimales.

4. Afficher un objet contenant :

    - categorie,
    - nbProduitsRetenus,
    - caTTCCategorieBio.

Vous ne devez pas modifier jsonData (respect de l’immuabilité).

```json
{
    "categorie": "fruits",
    "nbProduitsRetenus": 6,
    "caTTCCategorieBio": 4864.65
}
```

<details>

<summary>Critères d'évaluation</summary>

-   **Implémentation correcte de pipe**
    Composition gauche → droite sur des fonctions unaires.

-   **Modularité des étapes**
    Étapes séparées, nommées et pures (parCategorie, bioOnly, versValeursTTCPieces, somme).

-   **Exactitude du calcul**
    Formule TTC correcte avec jsonData.tva, arrondi final à deux décimales.

-   **Pureté et immuabilité**
    Aucune mutation de jsonData ; création de nouveaux tableaux/valeurs à chaque étape.

-   **Lisibilité**
    Code clair, pipeline explicite ; même résultat que l’action n°9.

-   **Affichage**
    Objet final conforme : { categorie, nbProduitsRetenus, caTTCCategorieBio }.

</details>

---

<img src="res/EMF_logo_RVB_Info_long.png" width="25%" style="margin-left:-20px;">
