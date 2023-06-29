// // Récupération des pieces depuis le fichier JSON 
// const reponse = await fetch("pieces-autos.json");
// const pieces = await reponse.json();



// // // Création des balises avant affichage 
// // const article = pieces[0];

// // const imageElement = document.createElement("img");
// // imageElement.src = article.image; 

// // const nomElement = document.createElement("h2");
// // nomElement.innerText = article.nom;

// // const prixElement = document.createElement("p");
// // prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`; // condition pour l'indicateur de  prix 

// // const categorieElement = document.createElement("p");
// // categorieElement.innerText = article.categorie ?? ("aucune catégorie");

// // const descriptionElement = document.createElement("p");
// // descriptionElement.innerText = article.description ?? ("Pas de description pour le moment."); // condition en cas de non description

// // const disponibiliteElement = document.createElement("p");
// // disponibiliteElement.innerText = `${article.disponibilite === true ? "En stock" : "Rupture de stock"}`; // condition pour la gestion des stocks 
  


// // // ratachement des élément au DOM avec le parent qui permet l'affichage 
// // const sectionFiches = document.querySelector(".fiches");
// // sectionFiches.appendChild (imageElement);
// // sectionFiches.appendChild (nomElement);
// // sectionFiches.appendChild (prixElement);
// // sectionFiches.appendChild (categorieElement);
// // sectionFiches.appendChild (descriptionElement);
// // sectionFiches.appendChild (disponibiliteElement);





   
//     for (let i = 0; i < pieces.length; i++) {

//         // Récupération de l'élément du DOM qui accueillera les fiches
//         const sectionFiches = document.querySelector(".fiches");
//         // Création d’une balise dédiée à une pièce automobile
//         const pieceElement = document.createElement("article");

//         // On crée l’élément img.
//         const imageElement = document.createElement("img");
//         // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
//         imageElement.src = pieces[i].image;

//         // Idem pour le nom, le prix et la catégorie...
//         const nomElement = document.createElement("h2");
//         nomElement.innerText = pieces[i].nom;

//         const prixElement = document.createElement("p");
//         prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`; // condition pour l'indicateur de  prix 

//         const categorieElement = document.createElement("p");
//         categorieElement.innerText =  `${pieces[i].categorie ?? "(Aucune catégorie)"} `; 

//         const descriptionElement = document.createElement("p");
//         descriptionElement.innerText = `${pieces[i].description ?? "Pas de description pour le moment"}`;

//         const disponibiliteElement = document.createElement("p");
//         disponibiliteElement.innerText =  `${pieces[i].disponibilite === true ? "En stock" : "Rupture de stock"}`; // condition pour la gestion des stocks 


//         // On rattache la balise article à la section Fiches
//         sectionFiches.appendChild(pieceElement);

//         // On rattache l’image à pieceElement (la balise article)
//         pieceElement.appendChild(imageElement);

//         // Idem pour le nom, le prix et la catégorie...
//         pieceElement.appendChild(nomElement);
//         pieceElement.appendChild(prixElement);
//         pieceElement.appendChild(categorieElement);
//         pieceElement.appendChild(descriptionElement);
//         pieceElement.appendChild(disponibiliteElement);
//     };

// // Gestion des boutons avec la fonction AddEvenListerner
// const boutonTrier = document.querySelector(".btn-trier");
// boutonTrier.addEventListener("click", function () {
//     const piecesOrdonnees = Array.from(pieces);
//     piecesOrdonnees.sort((a,b)=> a.prix - b.prix)
//     console.log(piecesOrdonnees);
// });

// const boutonfiltrer = document.querySelector(".btn-filtrer");
// boutonfiltrer.addEventListener("click", function () {
//     const piecesFiltrer = pieces.filter((piece)=> {
//         return piece.prix <= 35 
//     });
//     console.log(piecesFiltrer);
// });

// const boutonFiltreDescription = document.querySelector(".btn-description");
// boutonFiltreDescription.addEventListener("click", function (a,b) {
//     const piecesSansDescription = pieces.filter((piece)=> {
//         return piece.description });
//     console.log(piecesSansDescription);
// });

// const boutonDecroissant = document.querySelector ("btn-decroissant");
// // boutonDecroissant.addEventListener("click", () => {
// //         const piecesOrdonnees = Array.from(pieces);
// //         piecesOrdonnees.sort((a, b) => b.prix - a.prix);

// // //     });
// // console.log(piecesOrdonnees);

// // Liste avec la fonction map / suppresion des indésirable avce la fonction splice
// const noms = pieces.map(piece => piece.nom);
// for(let i = pieces.length -1 ; i >= 0; i--){
//    if(pieces[i].prix > 35){
//        noms.splice(i,1)
//    }
// }
// console.log(noms)
// //Création de la liste
// const abordablesElements = document.createElement('ul');
// //Ajout de chaque nom à la liste
// for(let i=0; i < noms.length ; i++){
//     const nomElement = document.createElement('li');
//     nomElement.innerText = noms[i];
//     abordablesElements.appendChild(nomElement);
// }
// // Ajout de l'en-tête puis de la liste au bloc résultats filtres
// document.querySelector('.abordables')
//     .appendChild(abordablesElements)

// //Code Exercice 
// const nomsDisponibles = pieces.map(piece => piece.nom);
// const prixDisponibles = pieces.map(piece => piece.prix);

// for(let i = pieces.length -1 ; i >= 0; i--){
//     if(pieces[i].disponibilite === false){
//         nomsDisponibles.splice(i,1);
//         prixDisponibles.splice(i,1);
//     }
// }

// const disponiblesElement = document.createElement('ul');

// for(let i=0 ; i < nomsDisponibles.length ; i++){
//     const nomElement = document.createElement('li');
//     nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
//     disponiblesElement.appendChild(nomElement);
// }

// document.querySelector('.disponibles').appendChild(disponiblesElement);
// // //Création des éléménts 
// // const abordablesElements = document.createElement("ul")
// // for( let i=0; i < noms.length ; i++){
// //     const nomElement = document.createElement("li");
// //     nomElement.innerText = noms[i];
// //     abordablesElements.appendChild(nomElement)
// // }
// // // Ratachement des éléments
// // document.querySelector('.abordables')
// //     .appendChild(abordablesElements)


// //     const nomsDisponible = pieces.map (piece => piece.nom);
// //     const prixDisponible = pieces.map (piece => piece.prix); 

// //     // faire commencer la boucle de la fin vers le début 
// //     for(let i = pieces.length -1 ; i >= 0 ; i--){
// //         if(pieces[i].disponibilite === false ){
// //             nomsDisponible.splice(i,1)
// //             prixDisponible.splice(i,1)
// //         }
// //     }

// //     const disponibleElement = document.createElement("ul")

// //     for(let i = 0 ; nomsDisponible.length ; i++){
// //         const nomElement = document.createElement("li")
// //         nomElement.innerText =  `${nomsDisponible[i]} - ${prixDisponible[i]} €`
// //         disponibleElement.appendChild(nomElement)
// //     }
// //     document.querySelector(".disponibles").appendChild(disponibleElement);``

// // Efface le contenu de la balise body et donc l’écran
// document.querySelector(".fiches").innerHTML = '';

// Récupération des pièces depuis le fichier JSON


import { ajoutListenersAvis, ajoutListenerEnvoyerAvis } from "./avis.js";  // importation de avis.js

const reponse = await fetch('http://localhost:8081/pieces/');
const pieces = await reponse.json();

// On appel la fonction pour activer le listerEvent du formualaire 
ajoutListenerEnvoyerAvis();

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        // On rattache l’image à pieceElement (la balise article)
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        //Ajout des éléments au DOM pour l'exercice
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        // ;;;;
        pieceElement.appendChild(avisBouton);
    
     }
     ajoutListenersAvis(); // déclartion de la fonction qui se trouve dans avis 
}

genererPieces(pieces);

 //gestion des bouttons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

//Correction Exercice
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1);
    }
}
console.log(noms)
//Création de l'en-tête

const pElement = document.createElement('p')
pElement.innerText = "Pièces abordables";
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(pElement)
    .appendChild(abordablesElements);

//Gestion du tri des pieces. 
const nomsDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)

for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].disponibilite === false){
        nomsDisponibles.splice(i,1);
        prixDisponibles.splice(i,1);
    }
}
// création et gestion de la liste 
const disponiblesElement = document.createElement('ul');

for(let i=0 ; i < nomsDisponibles.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement);
}
// ratachement des éléments.
const pElementDisponible = document.createElement('p')
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement)

// Gestion de l'input type range 
const inputPrixMax = document.querySelector('#prix-max')
inputPrixMax.addEventListener('input', function(){
    const piecesFiltrees = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);  
})