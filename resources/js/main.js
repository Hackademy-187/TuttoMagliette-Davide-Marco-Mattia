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
    `${String(ore). padStart(2, "0")}: ${String(minuti). padStart(2, "0")} : ${String(secondi). padStart(2, "0")}`;
    
    
}

setInterval(aggiornacountdown, 1000);
aggiornacountdown()

































































































// Fine Marco

//inizio davide
// 1. Prendo tutti i prezzi dalla pagina
const listaPrezzi = document.querySelectorAll(".prezzo");

// 2. Per ogni prezzo
listaPrezzi.forEach(elemento => {

    // 3. Prendo il numero finale (es: 37.20)
    let prezzoFinale = parseFloat(elemento.dataset.prezzo);

    // 4. Parto da zero
    let numeroAttuale = 0;

    // 5. Creo un timer
    let timer = setInterval(() => {

        // 6. Aumento il numero
        numeroAttuale += 1;

        // 7. Se arrivo al numero finale
        if (numeroAttuale >= prezzoFinale) {

            // Mostro il numero finale
            elemento.innerText = prezzoFinale.toFixed(2);

            // Fermo il timer
            clearInterval(timer);

        } else {

            // Continuo a mostrare i numeri
            elemento.innerText = numeroAttuale;
        }

    }, 20);
});