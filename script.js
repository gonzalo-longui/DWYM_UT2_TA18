const markup = `
  <h1>Bienvenido al UT2 TA18</h1>
  <hr>
  <input id="busquedaPersonas" placeholder="Buscar..." />
  <ul id="listaPersonas">
    <li>Alexandra Bright</li>
    <li>Maxwell Harper</li>
    <li>Sophie Carter</li>
    <li>Jackson Ellis</li>
    <li>Isabella Grant</li>
    <li>Ryan Bennett</li>
    <li>Chloe Davis</li>
    <li>Aiden Thompson</li>
    <li>Emma Walker</li>
    <li>Lucas Reed</li>
    <li>Olivia Mitchell</li>
    <li>Gabriel Adams</li>
    <li>Ella White</li>
    <li>Benjamin King</li>
    <li>Grace Lewis</li>
    <li>William Green</li>
    <li>Mia Scott</li>
    <li>Daniel Foster</li>
    <li>Avery Cooper</li>
    <li>James Parker</li>
    <li>Charlotte Hill</li>
    <li>Henry Morgan</li>
    <li>Amelia Carter</li>
    <li>Samuel Turner</li>
    <li>Harper Nelson</li>
    <li>Michael Brooks</li>
    <li>Lucy Allen</li>
    <li>David Walker</li>
    <li>Hazel Adams</li>
    <li>Elijah Wright</li>
    <li>Aria Johnson</li>
    <li>Matthew Collins</li>
    <li>Emily Hughes</li>
    <li>Jack Morris</li>
    <li>Nora Bailey</li>
    <li>Christopher Rivera</li>
    <li>Zoe Howard</li>
    <li>Joshua Lewis</li>
    <li>Lily Simmons</li>
    <li>Oliver Bennett</li>
    <li>Scarlett Gray</li>
    <li>Ryan Ortiz</li>
    <li>Ellie Reynolds</li>
    <li>John Murphy</li>
    <li>Victoria Rivera</li>
    <li>Logan Walker</li>
    <li>Madison Ross</li>
    <li>Henry Jenkins</li>
    <li>Leah Sanders</li>
    <li>Charles Miller</li>
    <li>Grace Morgan</li>
  </ul>
`

document.body.innerHTML = markup;

const lista = document.getElementById("listaPersonas");
const elementosLista = lista.getElementsByTagName("li");
const input = document.getElementById("busquedaPersonas");

input.addEventListener("input", () => {
  const inputvalue = input.value;
  for (const elemento of elementosLista) {
    if (elemento.innerHTML.toLocaleLowerCase().includes(inputvalue)) {
      elemento.style.display = "list-item"
    } else {
      elemento.style.display = "none";
    }
  }
})