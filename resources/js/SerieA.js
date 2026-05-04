// FETCH()
// 1. fetch() -- > collegarsi al file json
// 2. .then() -- > estrarre dalla Promise il contenuto
// mediante il metodo json()
// 3. .then() -- > ottenere un oggetto in modo da
// poterlo manipolare



console. log('Funziona');

fetch(' .. /annunci. json')
. then ( response => response. json ())
.then (data => console. log (data) )