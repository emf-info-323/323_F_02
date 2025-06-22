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
    document.querySelector('#idActionA13').addEventListener('click', actionA13);
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

    afficherObjet(caMoyenParPeriode);

}
// ----------------------------------------------------------
// CONTINUER ICI !
// ----------------------------------------------------------
function actionA3() {
    const nbreJours = datesUniques.length;
    const produitsVendus = {};
    jsonData.ventes.forEach(v =>
        v.produits.forEach(p => {
            produitsVendus[p.nom] = (produitsVendus[p.nom] || 0) + 1;
        })
    );
    const moyenneParProduit = Object.entries(produitsVendus).map(
        ([nom, total]) => ({ nom, moyenne: total / nbreJours })
    );
    console.log("Moyenne par produit par jour :", moyenneParProduit);

}
function actionA4() {
    const ventesParClient = jsonData.ventes.reduce((acc, v) => {
        const id = v.client.id;
        if (!acc[id]) acc[id] = [];
        acc[id].push(v);
        return acc;
    }, {});
    console.log("Ventes par client :", ventesParClient);

}
function actionA5() {
    const caParClient = jsonData.ventes.reduce((acc, v) => {
        const id = v.client.id;
        const montant = v.produits.reduce((s, p) => s + p.prix, 0);
        acc[id] = (acc[id] || 0) + montant;
        return acc;
    }, {});
    console.log("CA par client :", caParClient);

}
function actionA6() {
    const joursSemaine = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    const statsParJour = jsonData.ventes.reduce((acc, v) => {
        const jour = joursSemaine[new Date(v.date).getDay()];
        if (!acc[jour]) acc[jour] = { ca: 0, ventes: 0 };
        acc[jour].ca += v.produits.reduce((s, p) => s + p.prix, 0);
        acc[jour].ventes += 1;
        return acc;
    }, {});
    console.log("Stats par jour de semaine :", statsParJour);

}
function actionA7() {
    const caParType = jsonData.ventes.flatMap(v => v.produits)
        .reduce((acc, p) => {
            acc[p.type] = (acc[p.type] || 0) + p.prix;
            return acc;
        }, {});
    console.log("CA par type de vente :", caParType);

}
function actionA8() {
    const produitsParTypeSet = jsonData.ventes.flatMap(v => v.produits)
        .reduce((acc, p) => {
            acc[p.type] = acc[p.type] || new Set();
            acc[p.type].add(p.nom);
            return acc;
        }, {});
    const produitsParType = Object.fromEntries(
        Object.entries(produitsParTypeSet).map(
            ([type, set]) => [type, Array.from(set)]
        )
    );
    console.log("Produits par type :", produitsParType);

}
function actionA9() {
    const nbVendusParTypeEtProduit = jsonData.ventes.flatMap(v => v.produits)
        .reduce((acc, p) => {
            acc[p.type] = acc[p.type] || {};
            acc[p.type][p.nom] = (acc[p.type][p.nom] || 0) + 1;
            return acc;
        }, {});
    console.log("Nb produits vendus par type et nom :", nbVendusParTypeEtProduit);

}
function actionA10() {
    const tousLesClients = Object.values(
        jsonData.ventes.reduce((acc, v) => {
            acc[v.client.id] = v.client;
            return acc;
        }, {})
    );
    const clientsTries = tousLesClients.sort((a, b) =>
        a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom)
    );
    console.log("Clients triés :", clientsTries);

}
function actionA11() {
    const ventesParProduit = {};
    jsonData.ventes.forEach(v =>
        v.produits.forEach(p => {
            ventesParProduit[p.nom] = (ventesParProduit[p.nom] || 0) + 1;
        })
    );
    const produitsTriesParVentes = Object.entries(ventesParProduit)
        .sort((a, b) => b[1] - a[1])
        .map(([nom, total]) => ({ nom, total }));
    console.log("Produits du plus vendu au moins vendu :", produitsTriesParVentes);

}
function actionA12() { }
function actionA13() { }
function actionA14() { }


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// function actionA2() {

//     const apprentisUniquesTries = Array.from(       // Retransformer en tableau
//         new Set(jsonData.evaluations                // Supprimer les doublons de ce tableau
//             // Ne retenir que le (P)+(rénom)+' '+(NOM)
//             .map(evaluation => evaluation.prenom.substring(0, 1).toUpperCase() + evaluation.prenom.substring(1).toLowerCase() + ' ' + evaluation.nom.toUpperCase())
//         )
//     ).sort();                                       // Trier le tableau

//     afficherObjet(apprentisUniquesTries);
// }

// // ---------------------------------------------------------------------------

// function actionB() {

//     // Objet avec les branches et nbre de notes
//     const brancheEtNbreDeNotesObj = jsonData.evaluations
//         .reduce((acc, evaluation) => {
//             acc[evaluation.branche] = (acc[evaluation.branche] || 0) + 1;
//             return acc;
//         }, {});

//     afficherObjet(brancheEtNbreDeNotesObj);
// }

// // ---------------------------------------------------------------------------

// function actionC() {

//     const brancheEtNbreDeNotesTableau = Object.entries( // Très pratique, transforme un objet avec des clés/valeur en un tableau de tableaux avec à chaque fois clé/valeur
//         // Objet avec les branches et nbre de notes
//         jsonData.evaluations
//             .reduce((acc, evaluation) => {
//                 acc[evaluation.branche] = (acc[evaluation.branche] || 0) + 1;
//                 return acc;
//             }, {}))
//         // Retransformer en un tableau d'objets branche->nbre
//         .map(([branche, count]) => ({ branche, count }))
//         // Trier les éléments du tableau par branche
//         .sort((a, b) => a.branche.localeCompare(b.branche));

//     afficherObjet(brancheEtNbreDeNotesTableau);
// }

// // ---------------------------------------------------------------------------

// function actionT1() {

//     const partieConnueEdit = document.getElementById("idContenuApprenti");
//     const partieConnue = partieConnueEdit.value.toLowerCase();

//     // Retransformer en tableau
//     const apprentisConcernesTries = Array.from(
//         // Pas de doublons
//         new Set(jsonData.evaluations
//             // Filtrer les évaluations dont le nom fourni n'est pas dans le prénom ou le nom
//             .filter(evaluation => (partieConnue.length <= 0) || evaluation.prenom.toLowerCase().includes(partieConnue) || evaluation.nom.toLowerCase().includes(partieConnue))
//             // Ne conserver que le (P)+(rénom)+' '+(NOM)
//             .map(evaluation => evaluation.prenom.substring(0, 1).toUpperCase() + evaluation.prenom.substring(1).toLowerCase() + ' ' + evaluation.nom.toUpperCase())
//         ))
//         // Trier
//         .sort();

//     afficherObjet(apprentisConcernesTries);
// }

// // ---------------------------------------------------------------------------

// function actionT2() {

//     const nomBrancheEdit = document.getElementById("idNomBranche");
//     const nomBranche = nomBrancheEdit.value.toLowerCase();

//     const amount = jsonData.evaluations.filter(evaluation => (nomBranche.length <= 0) || (evaluation.branche.toLowerCase() === nomBranche)).length;

//     afficherObjet(amount);
// }

// // ---------------------------------------------------------------------------

// function actionD() {

//     const moyenneParBranche =
//         // Supprime les clés, donc un tableau de {branche, total, n}
//         Object.values(
//             // Produit un objet avec branche->{branche, total, n}
//             jsonData.evaluations.reduce((acc, evaluation) => {
//                 if (!acc[evaluation.branche]) acc[evaluation.branche] = { branche: evaluation.branche, total: 0, n: 0 };
//                 acc[evaluation.branche].total += evaluation.note;
//                 acc[evaluation.branche].n += 1;
//                 return acc;
//             }, {})
//         )
//             // Supprime total et n et rajoute la moyenne
//             .map(({ branche, total, n }) => ({
//                 branche,
//                 moyenne: +(total / n).toFixed(2)
//             }))
//             // Tri par nom de branche
//             .sort((a, b) => a.branche.localeCompare(b.branche));

//     afficherObjet(moyenneParBranche);
// }

// // ---------------------------------------------------------------------------

// function actionE() {

//     const statsParBranche = Object.values(
//         jsonData.evaluations
//             .reduce((acc, evaluation) => {
//                 if (!acc[evaluation.branche]) acc[evaluation.branche] = {
//                     branche: evaluation.branche,
//                     count: 0,
//                     total: 0
//                 };
//                 acc[evaluation.branche].count += 1;
//                 acc[evaluation.branche].total += evaluation.note;
//                 return acc;
//             }, {})
//     ).map(({ branche, count, total }) => ({
//         branche,
//         count,
//         moyenne: +(total / count).toFixed(2)
//     })).sort((a, b) => a.branche.localeCompare(b.branche));

//     afficherObjet(statsParBranche);
// }

// // ---------------------------------------------------------------------------

// function actionF() {

//     const elevesBranchesNotes = Object.values(
//         jsonData.evaluations
//             .reduce((acc, evaluation) => {
//                 const key = `${evaluation.prenom} ${evaluation.nom}`;
//                 if (!acc[key]) acc[key] = { eleve: key, branches: {} };
//                 if (!acc[key].branches[evaluation.branche]) acc[key].branches[evaluation.branche] = [];
//                 acc[key].branches[evaluation.branche].push(evaluation.note);
//                 return acc;
//             }, {})
//     ).map(eleveObj => ({
//         eleve: eleveObj.eleve,
//         branches: Object.entries(eleveObj.branches)
//             .map(([branche, notes]) => ({ branche, notes }))
//     })).sort((a, b) => a.eleve.localeCompare(b.eleve));

//     afficherObjet(elevesBranchesNotes);

// }

// // ---------------------------------------------------------------------------

// function actionG() {

//     const elevesBranchesStats = Object.values(
//         jsonData.evaluations
//             .reduce((acc, evaluation) => {
//                 const key = `${evaluation.prenom} ${evaluation.nom}`;
//                 if (!acc[key]) acc[key] = { eleve: key, branches: {} };
//                 if (!acc[key].branches[evaluation.branche]) acc[key].branches[evaluation.branche] = [];
//                 acc[key].branches[evaluation.branche].push(evaluation.note);
//                 return acc;
//             }, {})
//     ).map(eleveObj => ({
//         eleve: eleveObj.eleve,
//         branches: Object.entries(eleveObj.branches).map(([branche, notes]) => {
//             const min = Math.min(...notes);
//             const max = Math.max(...notes);
//             const nbre = notes.length;
//             const moyenne = +(notes.reduce((sum, n) => sum + n, 0) / notes.length).toFixed(2);
//             return { branche, nbre, min, max, moyenne, notes };
//         })
//     })).sort((a, b) => a.eleve.localeCompare(b.eleve));

//     afficherObjet(elevesBranchesStats);
// }

// // ---------------------------------------------------------------------------

// function actionH() {

//     const elevesBranchesStatsComplet = Object.values(
//         jsonData.evaluations
//             .reduce((acc, evaluation) => {
//                 const key = `${evaluation.prenom} ${evaluation.nom}`;
//                 if (!acc[key]) acc[key] = { eleve: key, branches: {} };
//                 if (!acc[key].branches[evaluation.branche]) acc[key].branches[evaluation.branche] = [];
//                 acc[key].branches[evaluation.branche].push({ date: evaluation.date, note: evaluation.note });
//                 return acc;
//             }, {})
//     ).map(eleveObj => ({
//         eleve: eleveObj.eleve,
//         branches: Object.entries(eleveObj.branches).map(([branche, notesList]) => {
//             // Trie les couples {date, note} par date croissante (format JJ.MM.AAAA)
//             notesList.sort((a, b) => {
//                 const [da, ma, ya] = a.date.split('.').map(Number);
//                 const [db, mb, yb] = b.date.split('.').map(Number);
//                 return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db);
//             });
//             const notesSansDates = notesList.map(obj => obj.note);
//             const min = Math.min(...notesSansDates);
//             const max = Math.max(...notesSansDates);
//             const nbre = notesSansDates.length;
//             const moyenne = +(notesSansDates.reduce((sum, n) => sum + n, 0) / notesSansDates.length).toFixed(2);
//             return { branche, min, max, nbre, moyenne, notes: notesList };
//         })
//     })).sort((a, b) => a.eleve.localeCompare(b.eleve));

//     afficherObjet(elevesBranchesStatsComplet);
// }

// // ---------------------------------------------------------------------------

// function actionA2() {


//     const branchesEvaluees = Array.from(            // Retransformer en tableau
//         new Set(jsonData.evaluations                // Supprimer les doublons de ce tableau
//             .map(evaluation => evaluation.prenom.substring(0, 1).toUpperCase() + evaluation.prenom.substring(1).toLowerCase() + ' ' + evaluation.nom.toUpperCase())  // Ne retenir que le NOM+Prénom
//         )
//     ).sort();

//     afficherObjet(branchesEvaluees);
// }







// ///////////////////////////////////////////
// /////////////////////////////////////////////

// // Peut-être utile pour entraîner "reduce"

// const initial = [
//     { ville: "Bulle", canton: "FR" },
//     { ville: "Lessoc", canton: "FR" },
//     { ville: "Lausanne", canton: "VD" },
//     { ville: "Riaz", canton: "FR" },
//     { ville: "Olten", canton: "BE" },
//     { ville: "Montreux", canton: "VD" },
//     { ville: "Zermatt", canton: "VS" },
//     { ville: "Bern", canton: "BE" }
// ];
// const final = [];
// const fff = initial.reduce((accumulateur, ville) => {
//     (ville.canton in accumulateur) ? accumulateur[ville.canton].push(ville.ville) : accumulateur[ville.canton] = [ville.ville];
//     return accumulateur;
// }, {}); // notez la valeur initiale => objet vide
// console.log(fff);

