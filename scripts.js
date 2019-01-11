var licznik = document.querySelector(".licznikT");
var licznikV = parseInt(licznik.textContent);

var dodaj = document.querySelector("#dodaj")
var odejmij = document.querySelector("#odejmij")

function Fdodaj() {
    var licznik = document.querySelector(".licznikT");
    var licznikV = parseInt(licznik.textContent);
    var ostrz = document.querySelector(".ostrz")
    if (licznikV >= 10) {
       ostrz.innerHTML = ("Nie można przekroczyć wartości 100!")
    }
    else {
        licznik.innerHTML = licznikV + 1
    }
    
}
function Fodejmij() {
    var licznik = document.querySelector(".licznikT");
    var licznikV = parseInt(licznik.textContent);
    var ostrz = document.querySelector(".ostrz")
    if (licznikV <= 0) {
        ostrz.innerHTML = ("Nie można przekroczyć wartości 0!")
     }
     else {
         licznik.innerHTML = licznikV - 1
     }

}
dodaj.onclick = Fdodaj
odejmij.onclick = Fodejmij