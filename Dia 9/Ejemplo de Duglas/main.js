/*Acceso al DOM */
/** Buscar en el DOM
 *  getElementById() #id
 *  querySelector() #id .class etiqueta ( div)
 * querySelectorAll() #id .class etiqueta ( div)
 * getElementByClassName() .class
 * getElementByTagName() etiqueta de html
 */

/** crear elementos DOM
 * createElement(tag)
 */
 const div = document.createElement("div");
 const texto = document.createTextNode("ejemploo");
 //div.textContent = "<b>Ejemplo</b> Contenido a la etiqueta";
 div.innerHTML = "<b>Ejemplo</b>  Contenido a la etiqueta";
 div.id = "prueba";
 div.classList.add("a", "b");
 //div.className = "a";
 //div.style = "color:red";
 console.log(div.hasAttributes());
 console.log(div.hasAttribute("ids"));
 console.log(div.getAttributeNames());
 console.log(div.getAttribute("id"));
 div.removeAttribute("id");
 div.setAttribute("data-id", 23);
 //document.getElementById("result").appendChild(div);
 document.getElementById("result").insertAdjacentElement("afterbegin", div);
 
 /* metodos de insercion en el dom
  * appendChild(node) añade como hijo
  * insertAdjacentElement
  * beforebegin inserta antes de la etiqueta de apertura
  * afterbegin inserta dentro de las etiquetas antes de su primer hijo
  * beforeend => appendChild
  * afterend despues de la etiqueta
  */
 //document.getElementById("result").remove();
 
 /* Navegar sobre los elementos
  * children array una lista de elementos hijos
  * parentElement devuelve el padre del elemento
  * firstElementChild devuelve el primer hijo
  * lastElementChild devuelve el ultimo hijo
  * nextElementSibling hermano siguiente
  * previousElementSibling hermano anterior
  */
 
 console.log(document.body.children[0]);
 const button = document.getElementById("result");
 /** eventos */
 /*button.onclick = function () {
   alert("hola");
 };
 */
 function hola() {
   alert("hola");
 }
 //button.setAttribute("onclick", "hola()");
 button.addEventListener("click", hola);
 