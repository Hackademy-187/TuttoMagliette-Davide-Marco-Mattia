// FETCH()
// 1. fetch() -- > collegarsi al file json
// 2. .then() -- > estrarre dalla Promise il contenuto
// mediante il metodo json()
// 3. .then() -- > ottenere un oggetto in modo da
// poterlo manipolare

console.log("Funziona");





// 🔹 FETCH DATI
fetch("../SerieA.json")
    .then((response) => response.json())
    .then((data) => {



        // ORDINA
        data.sort((a, b) => b.price - a.price);
        let containercards = document.querySelector("#containerCards");
        let containerRadio = document.querySelector('#containerRadio')
        // 🔹 FUNZIONE PER CREARE CARDS (RIUTILIZZABILE)
        function createCards(array) {
            containercards.innerHTML = ""; // pulisce prima

            array.forEach((annuncio) => {
                let div = document.createElement("div");
                div.classList.add("col-12", "col-md-3", "mb-5");

                div.innerHTML = `
            <div class= "card card-prodotto text-center p-3 h-100 shadow ">
                <img src="${annuncio.url}" class="img-fluid mb-3" />
                <h6 class="text-white">${annuncio.name}</h6>
                <span class="text-decoration-line-through text-white">${annuncio.price}€  </span>
                <span class="text-white">${annuncio.discountedPrice} €</span>
                <h5 class="text-white text-fw-bold">${annuncio.category}</h5>
                <p class="text-white">${annuncio.location}</p>
                <button class="btn btn-dark mt-auto">Compra</button>
            </div>
        `;

                containercards.appendChild(div);
            });
        }

        // MOSTRA
        createCards(data);

        let categories = []
        data.forEach((annuncio) => {
            if (!categories.includes(annuncio.category)) {
                categories.push(annuncio.category)

            }
        })
        categories.forEach(category => {
            let div = document.createElement('div')
            div.classList.add('form-check')
            div.innerHTML = `
             <input class="form-check-input" type="radio" name="categories" id="${category}"/>
                                    <label class="form-check-label" for="All">
                                        ${category}
                                    </label> 
            `
            containerRadio.appendChild(div)
        })
        // 🔹 FILTRO CATEGORIA
        function categoryByFilter(category) {

            if (category === "All") {
                createCards(data);
            } else {

                let filtered = data.filter(
                    (annuncio) => annuncio.category === category
                );
                console.log(filtered);

                createCards(filtered);
            }
        }


        // 🔹 EVENT LISTENER RADIO
        let radioCategories = document.querySelectorAll(".form-check-input");

        radioCategories.forEach((radio) => {
            radio.addEventListener("click", () => {

                let categoria = radio.id
                console.log(categoria);

                categoryByFilter(categoria);
            });
        });
    });





