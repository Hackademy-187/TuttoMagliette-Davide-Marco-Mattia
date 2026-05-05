// FETCH()
// 1. fetch() -- > collegarsi al file json
// 2. .then() -- > estrarre dalla Promise il contenuto
// mediante il metodo json()
// 3. .then() -- > ottenere un oggetto in modo da
// poterlo manipolare

console.log("Funziona");

let allData = [];
fetch(" ../SerieA.json")
.then((response) => response.json())
.then((data) => {
    let containercards = document.querySelector(`#containerCards`);
    console.log(data);
    

    // Creare le CARD di ANNUNCI
    data.sort((a, b) => b.price - a.price)
    .forEach((annuncio) => {
        let div = document.createElement("div");
        div.classList.add("col-12", "col-md-3");
        div.innerHTML = `
    <div class="card card-prodotto text-center p-3">
    <img src="${annuncio.url}" class="img-fluid mb-3" />
    <h6 class="text-primary-emphasis">${annuncio.name}</h6>
    <span class="prezzo-vecchio">${annuncio.price} €</span>
    <h4>${annuncio.category}</h4>
    <h4>${annuncio.location}</h4>
    <button class="btnCompra mt-3" data-bs-target="#modalInter">Compra</button>
    </div>
`;
        containercards.appendChild(div);
    });
});




// Implementazione filtro per CATEGORIA
    function categoryByFilter(category) {
        // l'utente ha selezionato Tutte le Categorie
        if (category === 'All') {
            // console.log(data);
            createCards(allData);
        } else { // l'utente ha selezionato una categoria specifica
            // Salviamo una nuovo array di annunci che hanno la stessa categoria selezionata dall'utente
            let filtered = allData.filter((annuncio) => annuncio.location.includes(category));

            // console.log(filtered);
            createCards(filtered);
            
        }
        
    }

    // Catturare tutti i radio button delle Categorie
    let radioCategories = document.querySelectorAll('.form-check-input');
    // console.log(radioCategories);

    radioCategories.forEach((radioCategory) => {
        radioCategory.addEventListener('click', () => {
            // console.log(radioCategory.id);
            let nameCategory = radioCategory.parentElement.querySelector("label").textContent.trim()
            categoryByFilter(nameCategory);
        })
    })

