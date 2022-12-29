import responsiveMedia from "./responsible_responsive.js"

const d = document

d.addEventListener("DOMContentLoaded",()=>{
  responsiveMedia("cont-img-munieco", "(min-width: 1025px)")
})

const btnEncriptar=d.getElementById("encriptar") 
const btnDesencriptar=d.getElementById("desencriptar") 

/* ****** Encriptar ******* */
function encriptar(){
  let mensaje=d.getElementById("input-text").value
  let arrSalida=[]
  let mensajeSalida=""

  if(mensaje!==""){ // Todo el codigo se ejecutará solo si el usuario ingresa algo en la caja de texto
    
    for(let i=0 ; i<mensaje.length ; i++){
      // llenamos el Array con cada caracter del texto ingresado
      arrSalida.push(mensaje[i])
    }
  
    for (let i=0 ; i<arrSalida.length ; i++) {
      /* Al recorrer el arreglo, si se encuentra una vocal, se le sustituye 
      por una cadena de texto diferente */
      if(arrSalida[i]==="a") arrSalida[i]="ai"
      if(arrSalida[i]==="e") arrSalida[i]="enter"
      if(arrSalida[i]==="i") arrSalida[i]="imes"
      if(arrSalida[i]==="o") arrSalida[i]="ober"
      if(arrSalida[i]==="u") arrSalida[i]="ufat"
    }
  
    for(let i=0 ; i<arrSalida.length ; i++){
      /* Aqui creamos una cadena de texto con el mensaje ya encriptado, concatenando uno por uno
      cada caracter del array*/
      mensajeSalida=mensajeSalida+arrSalida[i]
    }

    imprimirEnElDom(mensajeSalida) 

    d.getElementById("input-text").value="" //vaciamos la caja de texto

    /* Para copiar en el Portapapeles el resultado*/
    d.getElementById("btn-copiar").addEventListener("click", function(){
      let text=d.querySelector(".text-result").textContent
      navigator.clipboard.writeText(text).then(()=>{
        console.log("copiado")
      })
    })
  } 
}
function desencriptar(){
  let mensaje=d.getElementById("input-text").value
  let arrSalida=[]
  let mensajeSalida=""
  if(mensaje!==""){
    for(let i=0 ; i<mensaje.length ; i++){
      arrSalida.push(mensaje[i])
    }
    for (let i=0 ; i<arrSalida.length ; i++) {

      /*al encontrarse con una vocal, dejamos la vocal pero
      los siguientes caracteres son reemplazados por una cadena vacia
      esto dependiendo de cuantos caracteres se uso para encriptar*/
      if(arrSalida[i]==="a"){ //ai
        //aqui solo se reemplaza un caracter por solo esta la i despues de la a  
        arrSalida[i+1]="" 
      }
      if(arrSalida[i]==="e"){ //enter
        // aqui se reemplaza 4 caracteres "nter" despues de la e
        arrSalida[i+1]=""
        arrSalida[i+2]=""
        arrSalida[i+3]=""
        arrSalida[i+4]=""
      }
      if(arrSalida[i]==="i"){ //imes
        arrSalida[i+1]=""
        arrSalida[i+2]=""
        arrSalida[i+3]=""
      }
      if(arrSalida[i]==="o"){ //ober
        arrSalida[i+1]=""
        arrSalida[i+2]=""
        arrSalida[i+3]=""
      }
      if(arrSalida[i]==="u"){ //ufat
        arrSalida[i+1]=""
        arrSalida[i+2]=""
        arrSalida[i+3]=""
      }
    }
    
    for(let i=0 ; i<arrSalida.length ; i++){

      // para que no haga nada si encuentra cadenas vacias.
      if(arrSalida[i]==="")continue 

      //concatena los elementos del array si el caracter en dicho indice no es una cadena vacia.
      if(arrSalida[i]!==""){ 
        // OJO: una cadena con un espacio dentro " " no es una cadena vacia.
        mensajeSalida=mensajeSalida+arrSalida[i]
      }
    }

    imprimirEnElDom(mensajeSalida)

    d.getElementById("input-text").value=""

    d.getElementById("btn-copiar").addEventListener("click", function(){
      let text=d.querySelector(".text-result").textContent
      navigator.clipboard.writeText(text).then(()=>{
        console.log("copiado")
      })
    })
  }
}

function imprimirEnElDom(mensaje){
  const outputResponse=d.querySelector(".output-text")
  outputResponse.innerHTML=`
    <div class="results">
      <div class="text-result">${mensaje}</div>
      <button id="btn-copiar" class="bn30">Copiar</button>
    </div>`
}

let letra=document.getElementById("input-text")

function corregirMayus(){
  letra.value=letra.value.replace(/[^a-zA-Z0-9\s.]/g,"").toLowerCase()
}
letra.addEventListener("input", corregirMayus)
btnEncriptar.addEventListener("click", encriptar)
btnDesencriptar.addEventListener("click", desencriptar)



