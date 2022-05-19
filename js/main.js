/*
Il programma dovrà mostrare una form da compilare con cui chiedere all’utente:
nome e cognome
km da percorrere
eta (input testuale o number)
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo)
Al click sul tasto GENERA si genera il biglietto con i calcoli dovuti
Al click sul tasto ANNULLA si svuotano i campi
BONUS
la sezione del biglietto generato, all’avvio dovrebbe essere nascosta e comparire solo quando si preme il pulsante genera
Questo compare solo se i dati inseriti sono validi
per l’età inserire una select con 3 voci:
minorenne
maggiorenne
over 65
In base alla voce scelta dall’utente, fare i dovuti calcoli
N.B.
il responsive è opzionale!!!!
*/

// variabili const
const buttonCreateTicket = document.getElementById('create-ticket')

const priceForKm = 0.21;

// raccolta dati dal form

const inputUserCompleteName = document.getElementById('nome-cognome');
const inputKm = document.getElementById('km-da-percorrere');
const inputAgeRange = document.getElementById('fascia-di-eta');
// validazione dei dati inseriti

let dataTypeOk = true;

// calcolo prezzo del biglietto

// calcolo dati del biglieto random

// display dati nel form



// funzionamento pulsanti del form

buttonCreateTicket.addEventListener('click', function () {
    console.log(inputUserCompleteName.value, inputKm.value, inputAgeRange.value)
})