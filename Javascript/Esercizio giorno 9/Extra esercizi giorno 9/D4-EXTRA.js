// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkArray (n) {
    let numeri = [];
    for (var i = 0; i < n; i++){
        let numeri2 = Math.floor(Math.random() * 10);
        numeri.push(numeri2);
}
        for (let i = 0; i < numeri.length; i++) {
            let valor = numeri[i];
            if (valor > 5) {
              console.log(valor + " è maggiore di 5");
            } else {
              console.log(valor + " non è maggiore di 5");
            }
        }
        let sum = 0;
        for (y = 0; y < numeri.length; y++){
       if (numeri[y] > 5){
        (sum += numeri[y])
       }
}
return(sum)
}
console.log(checkArray(10))


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var shoppingCart = [
    {
      price: 120,
      name: "Microwave",
      id: 934,
      quantity: 10,
    },
    {
        price: 70,
        name: "Shoes",
        id: 835,
        quantity: 5,
    },
    {
        price: 36,
        name: "Headphones",
        id: 138,
        quantity: 5,
    },
]

function shoppingCartTotal() {
    let sum = 0;
    for (i = 0; i < shoppingCart.length; i++){
    sum += shoppingCart[i].price * shoppingCart[i].quantity
}
return(sum)
}
console.log(shoppingCartTotal())
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let obj = [
    {
        price: 40,
        name: "VR",
        id: 475,
        quantity: 3
    }
]
function addToShoppingCart() {
shoppingCart.push(obj)
for (i = 0; i < shoppingCart.length; i++) {
total = shoppingCart[i]
}
return(total)
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(shoppingCart) {  
    let objmax = shoppingCart[0];
  
    for (let i = 1; i < shoppingCart.length; i++) {
      if (shoppingCart[i].price > objmax.price) {
        objmax = shoppingCart[i];
      }
    }
  
    return objmax;
  }
console.log(maxShoppingCart(shoppingCart))

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const getLastArrItem = () => {
        let lastItem = shoppingCart.pop();
       return(lastItem)
}
console.log(getLastArrItem())

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function loopUntil(n) {
let numc = 0;
for (i = 0; i < n ; i++) {
numeri = Math.floor(Math.random()*10)
numc.push(numeri)
}
return(numc)
}
let n = loopUntil(9);
console.log(n)
*/
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function average(array1) {
  let numeri = array1.filter(item => typeof item === 'number');
  if (numeri.length === 0) {
return(0);
  }
let somma = 0;
for(let i = 0; i<array1.length; i++){
somma += array1[i]
}
return(somma /= array1.length)
}

let array1 = [1, 2, 3, 4];
console.log(average(array1))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/*function longest(array) {

}

let array = ["Ciao mi chiamo", "Francesco", "E mi sto esercitando", "Con Javascript"];
/*
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function AntiSpam(emailContent) {
  if (emailContent.includes('SPAM') || emailContent.includes('SCAM')){
  return false; 
} else {
  return true;
}
}

let emailContent = ("Colloquio di lavoro", "Messaggio spostato nella casella SPAM", "Attenzione! - SCAM")

console.log(AntiSpam(emailContent))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function clock() {
  let bdate = new Date (2023, 11, 5)
  let now = new Date ();
  let giorni = bdate - now;
}
 
console.log(clock())
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
