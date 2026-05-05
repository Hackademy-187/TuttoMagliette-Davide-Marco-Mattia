// FETCH()
// 1. fetch() -- > collegarsi al file json
// 2. .then() -- > estrarre dalla Promise il contenuto
// mediante il metodo json()
// 3. .then() -- > ottenere un oggetto in modo da
// poterlo manipolare

console.log("Funziona");

let allData = [];
let containercards = document.querySelector("#containerCards");

// 🔹 FUNZIONE PER CREARE CARDS (RIUTILIZZABILE)
function createCards(array) {
    containercards.innerHTML = ""; // pulisce prima

    array.forEach((annuncio) => {
        let div = document.createElement("div");
        div.classList.add("col-12", "col-md-3");

        div.innerHTML = `
            <div class="card card-prodotto text-center p-3 h-100 shadow">
                <img src="${annuncio.url}" class="img-fluid mb-3" />
                <h6 class="text-primary-emphasis">${annuncio.name}</h6>
                <span class="text-decoration-line-through text-muted">${annuncio.price} €</span>
                <h5 class="fw-bold">${annuncio.category}</h5>
                <p>${annuncio.location}</p>
                <button class="btn btn-dark mt-auto">Compra</button>
            </div>
        `;

        containercards.appendChild(div);
    });
}


// 🔹 FETCH DATI
fetch("../SerieA.json")
    .then((response) => response.json())
    .then((data) => {

        // SALVI I DATI GLOBALI
        allData = data;

        // ORDINA
        allData.sort((a, b) => b.price - a.price);

        // MOSTRA
        createCards(allData);
    });


// 🔹 FILTRO CATEGORIA
function categoryByFilter(category) {

    if (category === "All") {
        createCards(allData);
    } else {

        let filtered = allData.filter(
            (annuncio) => annuncio.location === category
        );

        createCards(filtered);
    }
}


// 🔹 EVENT LISTENER RADIO
let radioCategories = document.querySelectorAll(".form-check-input");

radioCategories.forEach((radio) => {
    radio.addEventListener("click", () => {

        let categoria = radio.nextElementSibling.textContent.trim();

        categoryByFilter(categoria);
    });
});