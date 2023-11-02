console.log('espressione');   // Stampa in console il contenuto delle parentesi tonde
let scelta = confirm("Ti piace Javascript?");   //Confirm mi chiede di rispondere ad una domanda, dandomi un valore booleano (true) - (false)
let nome = prompt('Inserisci il tuo nome', 'Mario');  // Prompt chiede di inserire un valore tramite una finestra, associandolo alla variabile nome
let cognome = prompt('Inserisci il tuo cognome', 'Rossi');
let età = prompt("Inserisci la tua età", 20);

console.log("Ciao " + nome + " " + cognome);
console.log(Number(età) + 2);
console.log(parseInt(età) + 2);   // Number forzo l'uscita di un numero e non string, parseInt mi da un valore intero senza virgole
console.log(parseFloat(età) +2);  // parseFloat mi da un numero decimale con virgola
console.log(età * 2);
console.log(+età * 2)  //Il + mi da un numero decimale con virgola

