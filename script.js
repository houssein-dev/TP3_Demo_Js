
// ============Rectangle===============
let long ,larg,rayon
function saisirDonneesRec(){
     long=parseFloat(window.prompt("saisir la valeur de longeur : "))
     larg= parseFloat(window.prompt("saisir la valeur de largeur : "))
    
}

function calculeSurface() {
    window.alert(`La surface de rectangle de largeur : ${larg} ,Longeur ${long} est : ${(long * larg)/2 }`)
}

function calculePerimetre() {
    window.alert(`La perimetre de rectangle de largeur : ${larg} ,Longeur ${long} est : ${(long + larg) * 2 }`)
}

// ========================end rectangle===================

// ==================cercle=====================
function saisirDonneesRayon(){
     rayon=parseFloat(window.prompt("saisir la valeur de Rayon : "))
    
}



function calculeSurfaceCercle() {
    window.alert(`La surface de cercle de Rayon : ${rayon}  est : ${(rayon * rayon) * 3.14}`)

}
// ======================exo3=============
