window.addEventListener("load", (event) => {
    document.querySelector('#idActionA1').addEventListener('click', actionA1);
    document.querySelector('#idActionA2').addEventListener('click', actionA2);
    document.querySelector('#idActionA3').addEventListener('click', actionA3);
    document.querySelector('#idActionA4').addEventListener('click', actionA4);
    document.querySelector('#idActionA5').addEventListener('click', actionA5);
    document.querySelector('#idActionA6').addEventListener('click', actionA6);
    document.querySelector('#idActionA7').addEventListener('click', actionA7);
    document.querySelector('#idActionA8').addEventListener('click', actionA8);
    document.querySelector('#idActionA9').addEventListener('click', actionA9);
    document.querySelector('#idActionA10').addEventListener('click', actionA10);
    document.querySelector('#idActionA11').addEventListener('click', actionA11);
    document.querySelector('#idActionA12').addEventListener('click', actionA12);
});

// ---------------------------------------------------------------------------

function afficherObjet(resultat) {
    const container = document.getElementById("output");
    container.innerHTML = JSON.stringify(resultat, null, 3);
}

// ---------------------------------------------------------------------------

function actionA1() {

    const datesMinMax = jsonData.ventes.reduce((accumulateur, vente) => {
        accumulateur.dateMin = vente.date < accumulateur.dateMin ? vente.date : accumulateur.dateMin;
        accumulateur.dateMax = vente.date > accumulateur.dateMax ? vente.date : accumulateur.dateMax;
        return accumulateur;
    }, {
        dateMin: jsonData.ventes[0].date,
        dateMax: jsonData.ventes[0].date
    });

    afficherObjet(datesMinMax);
}

function actionA2() {

    const statsVentes = jsonData.ventes.reduce((accumulateur, vente) => {
        accumulateur.dates[vente.date] = accumulateur.dates[vente.date] ? accumulateur.dates[vente.date] + 1 : 1;
        accumulateur.caTotal += vente.produits.reduce((accumulateur, produit) => accumulateur + produit.prix, 0);
        return accumulateur;
    }, {
        caTotal: 0,
        dates: {}
    });

    const caMoyenParJour = statsVentes.caTotal / Object.keys(statsVentes.dates).length;

    afficherObjet(caMoyenParJour);
}

function actionA3() {

    const clientsUniques = jsonData.ventes.reduce((accumulateur, vente) => {
        if (!accumulateur[vente.client.id])
            accumulateur[vente.client.id] = { nom: vente.client.nom, prenom: vente.client.prenom };
        return accumulateur;
    }, {});

    afficherObjet(clientsUniques);
}

function actionA4() {

    const CAParClient = jsonData.ventes.reduce((accumulateur, vente) => {
        if (!accumulateur[vente.client.id])
            accumulateur[vente.client.id] = {
                id: vente.client.id,
                nom: vente.client.nom,
                prenom: vente.client.prenom,
                ca: 0.0
            };
        accumulateur[vente.client.id].ca += vente.produits.reduce((accumulateur, produit) => accumulateur + produit.prix, 0);
        return accumulateur;
    }, {});
    const listeDesClientsEtCA = Object.values(CAParClient);
    afficherObjet(listeDesClientsEtCA);
}

function actionA5() {

    const joursSemaine = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

    const statsParJour = jsonData.ventes.reduce((acc, v) => {
        const jour = joursSemaine[new Date(v.date).getDay()];
        if (!acc[jour]) acc[jour] = { ca: 0, nbre_ventes: 0 };
        acc[jour].ca += v.produits.reduce((s, p) => s + p.prix, 0);
        acc[jour].nbre_ventes += 1;
        return acc;
    }, {});

    afficherObjet(statsParJour);
}

function actionA6() {

    const CAParTypeDeProduit = jsonData.ventes
        .flatMap(vente => vente.produits)
        .reduce((accumulateur, produit) => {
            accumulateur[produit.type] = accumulateur[produit.type] ? accumulateur[produit.type] + produit.prix : produit.prix;
            return accumulateur;
        }, {});

    afficherObjet(CAParTypeDeProduit);
}

function actionA7() {

    const produitsParTypeSet = jsonData.ventes
        .flatMap(vente => vente.produits)
        .reduce((acc, produit) => {
            if (!acc[produit.type])
                acc[produit.type] = [];
            if (!acc[produit.type].includes(produit.nom))
                acc[produit.type].push(produit.nom);
            return acc;
        }, {});

    afficherObjet(produitsParTypeSet);
}

function actionA8() {

    const nbVendusParTypeEtProduit = jsonData.ventes
        .flatMap(vente => vente.produits)
        .reduce((acc, produit) => {
            if (!acc[produit.type])
                acc[produit.type] = {};
            acc[produit.type][produit.nom] = (acc[produit.type][produit.nom] || 0) + 1;
            return acc;
        }, {});

    afficherObjet(nbVendusParTypeEtProduit);
}

function actionA9() {

    const toutesLesVentes = jsonData.ventes.map(vente => vente.produits).flat();

    afficherObjet(toutesLesVentes);
}

function actionA10() {

    const TOP_VALUE = 6;

    const ventesParProduit = jsonData.ventes
        .map(vente => vente.produits)
        .flat()
        .reduce((accumulateur, produit) => {
            if (!accumulateur[produit.id]) {
                accumulateur[produit.id] = {
                    id: produit.id,
                    nom: produit.nom,
                    ca: produit.prix
                };
            }
            else {
                accumulateur[produit.id].ca += produit.prix;
            }
            return accumulateur;
        }, {});

    const topDesVentes = Object.values(ventesParProduit)
        .sort((produitA, produitB) => produitB.ca - produitA.ca)
        .slice(0, TOP_VALUE);


    afficherObjet(topDesVentes);
}

function actionA11() {

    const clientsParIdClient = jsonData.ventes
        .reduce((accumulateur, vente) => {
            if (!accumulateur[vente.client.id])
                accumulateur[vente.client.id] = {
                    nom: vente.client.nom.toUpperCase(),
                    prenom: vente.client.prenom.substring(0, 1).toUpperCase() + vente.client.prenom.substring(1).toLowerCase()
                };
            return accumulateur;
        }, {});

    const clientsTries = Object.values(clientsParIdClient)
        .sort((clientA, clientB) => {
            const nomCompare = clientA.nom.localeCompare(clientB.nom, 'fr');
            if (nomCompare !== 0) return nomCompare;
            return clientA.prenom.localeCompare(clientB.prenom, 'fr');
        });

    afficherObjet(clientsTries);
}


function actionA12() {

    const TOP_VALUE = 5;

    const CAParDate = jsonData.ventes.reduce((accumulateur, vente) => {
        if (!accumulateur[vente.date])
            accumulateur[vente.date] = {
                date: vente.date,
                ca: 0.0
            };
        accumulateur[vente.date].ca += vente.produits.reduce((accumulateur, produit) => accumulateur + produit.prix, 0);
        return accumulateur;
    }, {});
    const listeDesMeilleursCAParDate = Object.values(CAParDate)
        .sort((caParDateA, caParDateB) => caParDateB.ca - caParDateA.ca)
        .slice(0, TOP_VALUE);

    afficherObjet(listeDesMeilleursCAParDate);

}
