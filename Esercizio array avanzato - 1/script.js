/**
 * marco cabras 10:05 uscita
 * 
 * ESERCIZIO AVANZATO CON ARRAY
 * 
 * Data un array di nomi, ritorna il seguente oggetto
 * 
 * // Risposta della funzione
 *   {
 *       A: ["Alessio", "Anna", "Alessandro"],
 *       B: ["Bruno"]
 *       ... così via per tutti i nomi ...
 *   }
 * 
 * In Javascript ogni stringa la posso trattare come un array
 * 
 * Simona - 6 caratteri
 * 
 * Trattiamo il nome come se fosse un array:
 * S -> 0
 * i -> 1
 * m -> 2
 * o -> 3
 * n -> 4
 * a -> 5
 */

// La mia lista di lettere a cui posso accedere in ogni momento
const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// La mia lista di nomi
const nomi = ["Ilario", "Paolo", "Kevin", "Michele", "Alessio", "Eleonora", "Nicola", "Giancarlo", "Vincenzo", "Mattia", "Alessandra", "Anna", "Giacomo", "Flavio", "Davide", "Daniele", "Ugo", "Matteo", "Giovanni", "Marco", "Ezio", "Carlo", "John"];

// La mia funzione di ordinamento
function ordinaNomi(nomi) {
    // creo un oggetto vuoto che riempio dopo
    let oggettoNomi = {}; // potevo usare anche Object.create({}) per creare un oggetto vuoto
    
    alfabeto.forEach(lettera => {
        // console.log(lettera);

        oggettoNomi[lettera] = [];

        nomi.forEach(nome => {
            const primaLettera = nome[0]; // potevo fare anche nome.charAt(0) per ottenere la prima lettera
            
            // console.log(nome);

            if (primaLettera === lettera) {
                // console.log(lettera, nome);

                oggettoNomi[lettera].push(nome);
            }
        })
    });

    return oggettoNomi;
}

// BONUS 1: descrivere l'oggetto (la lettera A ha x nomi in console)
function descriviOggettoNomi(oggettoNomi) {
    // console.log("DESCRIVI OGGETTO NOMI");
    // console.log(oggettoNomi);

    for (const lettera in oggettoNomi) {
        const listaNomi = oggettoNomi[lettera];

        // console.log(`La lettera ${lettera} ha ${listaNomi.length} ${listaNomi.length === 1 ? "nome" : "nomi"}`);
    }
}

// BONUS 2: Stampare una lista in HTML con lettera e lista nomi
function generaListaNomiHtml(oggettoNomi) {
    const listaUtentiHtml = document.querySelector("#listaNomi");

    for (const lettera in oggettoNomi) {
        const listaNomi = oggettoNomi[lettera];

        listaUtentiHtml.innerHTML += `<li>${lettera}: ${listaNomi.join(",  ")}</li>`;
    }
}

/**
 * Qui invoco le funzioni che ho definito prima
 */

// 1) passo l'array "nomi" dentro ordinaNomi
const oggettoNomi = ordinaNomi(nomi);

// 2) descriviamo l'oggetto oggettoNomi con una funzione, passando l'oggetto come argomento
const descrizioneOggettoNomi = descriviOggettoNomi(oggettoNomi);

// 3) genera l'HTML per l'oggettoNomi con i nomi ordinati per lettera
generaListaNomiHtml(oggettoNomi);