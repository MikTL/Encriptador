#  <center>Encriptador y Desencriptador</center>
Este proyecto es un challenge propuesto en el programa One de Oracle, se trata de un algoritmo para encriptar y desencriptar textos, la forma en la que encripta es reemplazando las vocales por otra cadena de texto:
  1. La letra "e" es convertida para "enter"
  2. La letra "i" es convertida para "imes"
  3. La letra "a" es convertida para "ai"
  4. La letra "o" es convertida para "ober"
  4. La letra "u" es convertida para "ufat"

Y para desencriptarlo se hace los contrario.

## Mi solución:
Para resolver el Algoritmo no usé métodos de manipulacion de arrays ni cadenas con excepcion del método push(). 
### Para encriptar: 
  Una vez obtenido el texto ingresado por el usuario:
  1. Con un ciclo for y el método push, añadí todos los caracteres del mensaje a un array (incluyendo los espacios).
  2. Con otro ciclo for e iterando sobre el array generado en el paso anterior, cambié todas las vocales del array por las cadenas de texto respectivas. 
  3. Por ultimo use otro ciclo for para concatenar en una variable cada elemento del array, una vez terminada el ciclo la variable contiene una cadena de texto con el mensaje encriptado.

### Para descencriptar:
  Una vez obtenido el texto encriptado que ingresó el usuario: 
  1. Con un ciclo for y el método push, añadí todos los caracteres del mensaje a un array.
  2. Con un segundo ciclo for e iterando sobre el array generado en el paso anterior, programé una condicion para que al encontrar una vocal, reemplace los siguientes caracteres por una cadena vacía, por ejemplo si encuentra la vocal "e" reemplazará los 4 siguientes caracteres "n" "t" "e" "r" por una cadena vacia "", ya que para encriptar reemplazamos la "e" por "enter".
  3. Para terminar usé un ciclo for para concatenar todos los elementos del array en una variable, pero solo se concatenará si el elemento es diferente a una cadena vacia. Asi solo se concatena cada vez que se encuentre una letra y/o un espacio.

### Función de copiar:
  Para copiar el texto generado por el algoritmo usé el objeto navigator.clipboard, Para más información sobre cómo usar navigator.clipboard, puedes consultar la documentación en el siguiente enlace:

  * MDN: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard

####  **Para ver mi código haz click [aquí](./js/app.js)** 
