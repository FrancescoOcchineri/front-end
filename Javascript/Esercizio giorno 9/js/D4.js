/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
let a = l1 * l2;
return a;
}
let area1 = area(12, 7);
console.log("Area = " + area1);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {
    if (x === y) {
        return ((x + y) * 3)
    } else {
        return (x + y)
    }
}
console.log(crazySum(10, 10))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x) {
if (x > 19) {
    return (Math.abs((x - 19)*3))
} else {
    return (Math.abs (x - 19))
}
}
console.log(crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (n >= 20 && n<=100) {
        return ("true")
    } else {
        return ("false")
    }
}
console.log(boundary(19));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(String) {
if (String.startsWith("EPICODE")) {
    return (epify)
} else {
    return ("EPICODE" + String)
}
}
console.log(epify("Hello world"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n)  {
    if (n <= 0) {
        return ("ERROR")
} else if (n % 3===0) {
        return(n + " è un multiplo di 3")
    } else if (n % 7===0) {
        return(n + " è un multiplo di 7")
    }
}

console.log(check3and7(30));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(String){
    console.log(String.split("").reverse().join(""))
}
reverseString("Epicode")

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst() {
    return(upperFirst.toUpperCase().replace("h", "a", "w"))
}
console.log("hello", "all", "world");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(String) {
    return(String.slice(1,11));
}
console.log(cutString("Hello World!"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(x){
    let numc=[];
    for (var i = 0; i < x; i++){
    let numer = Math.floor(Math.random()*11);
    numc.push(numer);
}
 return numc;
}

let random= giveMeRandom(10);
console.log(random)
/* SCRIVI QUI LA TUA RISPOSTA */
