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
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA2() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA3() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA4() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA5() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA6() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA7() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA8() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA9() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA10() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}

function actionA11() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}


function actionA12() {
    const resultat = jsonData.contenu.filter((element) => true);
    afficherObjet(resultat);
}
