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
const buttonCreateTicket = document.getElementById('create-ticket');
const cancelButton = document.getElementById('cancel');
const generatedTicket = document.getElementById('generated-ticket')
// variabili per messaggi errore
const nameError = document.getElementById('name-error-message');
const kmError = document.getElementById('km-error-message');
const ageRangeError = document.getElementById('age-error-message');

const priceForKm = 0.21;
const discount20 = 0.2;
const discount40 = 0.4;

let finalPrice;

// raccolta dati dal form

const inputUserCompleteName = document.getElementById("nome-cognome");
const inputKm = document.getElementById("km-da-percorrere");
const inputAgeRange = document.getElementById('fascia-di-eta');




// calcolo dati del biglieto random
let offert = 'Standard';

let carriageNumber = Math.ceil(Math.random()* 9 + 1);
let cpCodeNumber = Math.ceil(Math.random()* 10000 + 1)
// funzionamento pulsanti del form

buttonCreateTicket.addEventListener('click', function () {

        // validazione dei dati inseriti
    let dataTypeOk = true;
    if (inputUserCompleteName.value === ''){
        dataTypeOk = false;
    } else {
        nameError.innerHTML = '';
    }

    if (inputKm.value < 0) {
        dataTypeOk = false;
    } else {
        kmError.innerHTML = '';
    }

    if (inputAgeRange.value === '') {
        dataTypeOk = false;
    } else {
        ageRangeError.innerHTML = '';
    }

    if (dataTypeOk) {

        // calcolo prezzo del biglietto

        finalPrice = priceForKm * inputKm.value;

        if (inputAgeRange.value === 'full-Price') {
            finalPrice -= finalPrice * discount20;
            offert = "Standard";
        }

        if (inputAgeRange.value === 'discount-20') {
            finalPrice -= finalPrice * discount20;
            offert = "Sconto 20%";
        }
    
        if (inputAgeRange.value === 'discount-40') {
            finalPrice -= finalPrice * discount40;
            offert = "Sconto 40%";
        }

        finalPrice = finalPrice.toFixed(2);

        

        if (generatedTicket.classList.contains('d-none')) {
            generatedTicket.classList.remove('d-none');
        } 

        // display dati nel form

        const passengerName = document.getElementById('nome-passeggero');
        const tiketOffert = document.getElementById('offerta');
        const carriage = document.getElementById('carrozza');
        const cpCode = document.getElementById('codice-cp');
        const ticketPrice = document.getElementById('costo-biglietto');

        passengerName.innerHTML = inputUserCompleteName.value;
        tiketOffert.innerHTML = offert;
        carriage.innerHTML = carriageNumber;
        cpCode.innerHTML = cpCodeNumber;
        ticketPrice.innerHTML = '€ ' + finalPrice;
    } else {
        

        if (inputUserCompleteName.value === ''){
            nameError.innerHTML = 'Inserire il vostro nome';
            if (!generatedTicket.classList.contains('d-none')) {
                generatedTicket.classList.add('d-none');
            }
        }
    
        if (inputKm.value < 0 || inputKm.value === '') {
            kmError.innerHTML = 'Inserire un numero positivo';
            if (!generatedTicket.classList.contains('d-none')) {
                generatedTicket.classList.add('d-none');
            }
        }
    
        if (inputAgeRange.value === '') {
            ageRangeError.innerHTML = 'Selezionare una fascia di eta';
            if (!generatedTicket.classList.contains('d-none')) {
                generatedTicket.classList.add('d-none');
            }
        }
    }


    console.log(inputUserCompleteName.value, inputKm.value, inputAgeRange.value,  finalPrice);
    
})

cancelButton.addEventListener('click', function () {
    if (!generatedTicket.classList.contains('d-none')) {
        generatedTicket.classList.add('d-none');
    }

    inputAgeRange.value = '';
    inputUserCompleteName.value = '';
    inputKm.value = '';

    kmError.innerHTML = '';
    nameError.innerHTML = '';
    ageRangeError.innerHTML = '';
})


