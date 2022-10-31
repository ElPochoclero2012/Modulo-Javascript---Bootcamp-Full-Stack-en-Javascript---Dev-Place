

const cargarPost = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const res = await fetch(url);
      if (res.ok) {
        const datos = await res.json();
        const post = document.getElementById("post");
        datos.forEach((element) => {
          let texto = element.title;
          let cuerpo = element.body;
          let id= element.id;
          texto = texto.toUpperCase();
  
          let columna = document.createElement("div");
          columna.classList.add("col-3", "p-3");
          let card = document.createElement("div");
          card.classList.add("card", "p-1");
          //arranca el card-body
          let cardBody = document.createElement("div"); 
          cardBody.classList.add("card-body"); //Card-Body
          let p = document.createElement("h5");
          p.classList.add("card-title"); //Card-Title
          p.innerHTML = texto;
          let cuerpodiv = document.createElement("div"); //Cuerpa Div
          cuerpodiv.innerHTML = cuerpo;
  
          let boton = document.createElement("button");
          boton.classList.add("btn", "btn-success");
          boton.textContent= "Comentarios"
          boton.setAttribute("type", "button");
          boton.setAttribute("data-bs-target", "#exampleModal");
          boton.setAttribute("data-bs-toggle", "modal")
          boton.setAttribute("onclick", "cargarComentario("+id +",'"+texto+"')")
          boton.setAttribute("data-content-"+ id,cuerpo)
          
          cardBody.appendChild(p);
          cardBody.appendChild(cuerpodiv);
          card.appendChild(cardBody);
          columna.appendChild(card);
  
          cardBody.appendChild(boton);
          //columna.innerHTML = p + cuerpodiv;
          post.appendChild(columna);
          
          let titulo= document.getElementsByClassName("modal-title");
          titulo.textContent="hola";
  
          //let body= document.getElementsByClassName("modal-body");
        });
  
        console.log(datos);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  };
  function cargarComentario(id,titulo){
  document.getElementById("exampleModalLabel").innerHTML=titulo;
  document.getElementById("mBody").innerHTML=document.getElementById("data-content-"+id).innerHTML;
  
  }
  cargarPost();
  