/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const myArea = function area(l1, l2) {
  return l1 * l2;
};
const result = myArea(5, 3);
console.log(result);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri
  è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const mySum = function crazySum(n1, n2) {
  let somma = n1 + n2;
  if (n1 === n2) {
    somma *= 3;
  }
  return somma;
};
const resultCrazySum = mySum(3, 5);
console.log(resultCrazySum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito 
 come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora 
 il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myCrazyDiff = function crazyDiff(n1) {
  let differenza = n1 - 19;
  if (n1 > 19) {
    differenza = differenza * 3;
  }
  return differenza;
};
const resultCrazyDiff = myCrazyDiff(50);
console.log(resultCrazyDiff);
const resultCrazyDiff2 = myCrazyDiff(3);
console.log(resultCrazyDiff2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(5));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (aWord) {
  let x = aWord.includes("EPICODE");
  if (x === true) {
    return aWord;
  } else {
    return "EPICODE " + aWord;
  }
};
console.log(epify("Ciao alessia"));
console.log();

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n % 7 === 0 || n % 3 === 0) {
    return "Questo è un multipo di 3 o 7";
  } else {
    return "Ritenta";
  }
};
console.log(check3and7(70));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita 
 come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (anotherWord) {
  let stringaGirata = "";
  for (let index = anotherWord.length - 1; index >= 0; index--) {
    const element = anotherWord[index];
    stringaGirata = stringaGirata + element;
  }
  return stringaGirata;
};
console.log(reverseString("edo"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (words) {
  let array = words.split(" ");
  let arrayCapitalized = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    arrayCapitalized.push(element.charAt(0).toUpperCase() + element.substr(1));
  }
  let stringa = arrayCapitalized.join(" ");
  return stringa;
};

console.log(upperFirst("oh madre mia"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
