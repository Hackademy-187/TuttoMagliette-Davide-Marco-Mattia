// Inizio Mattia









































































































































































// Fine Mattia

// Inizio Marco

function aggiornacountdown() {
    let fine = new Date()
    fine.setHours(23, 59, 59, 0);
    let ora = new Date()
    let diff = fine - ora;

    let ore = Math.floor(diff / 1000 / 60 / 60);
    let minuti = Math.floor((diff / 1000 / 60) % 60);
    let secondi = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").textContent =
        `${String(ore).padStart(2, "0")}: ${String(minuti).padStart(2, "0")} : ${String(secondi).padStart(2, "0")}`;


}

setInterval(aggiornacountdown, 1000);
aggiornacountdown()

































































































// Fine Marco

//inizio davide
//prende tutti i prezzi nella pagina
let prezzoAttuale = '124.99';
let sconto = '70%'

document.querySelectorAll(".prezzo-nuovo").forEach(elementoPrezzo => {

    // 🔢 1. PREZZO ORIGINALE
    let prezzoAttuale = parseFloat(
        elementoPrezzo.getAttribute("data-prezzo")
    );

    // 🎯 2. PERCENTUALE DI SCONTO
    let sconto = parseFloat(
        elementoPrezzo.getAttribute("data-sconto")
    );

    // 🧮 3. CALCOLO PREZZO FINALE
    let prezzoFinale = prezzoAttuale * (1 - sconto / 100);

    // 🖥️ 4. MOSTRO IL RISULTATO
    elementoPrezzo.innerText =
        prezzoFinale.toFixed(2).replace(".", ",") + '€';
});