let respuesta = prompt ("como te llamas")
alert ("debes aceptar los terminos y condiciones")
let confirmar = confirm ("confirmas que aceptas los terminos y condiciones")

let producto = "gabinete"

if(producto == "ram"){ 
    console.log("agregaste un ram")
} else if(producto =="gabinete") { 
    console.log("agregaste un gabinete")
} else{  
    console.log("agregaste mouse")
}

function saludar (){
    console.log("hola, bienvenido")
}

saludar ()

function sumar(){
    let productoA = 60000
    let productoB = 90000
    let resultado = productoA + productoB

    return resultado
}

console.log(sumar())

let calculo = sumar()
console.log("La suma del valor los productos es: "+calculo)

let productouno = parseInt(prompt("Ingrese el primer valor"))
let productodos = parseInt(prompt("Ingrese el segundo valor"))

function sumar(valorA, valorB){
    let resultado = valorA + valorB

    alert("Presupuesto "+resultado)
}

sumar(productouno, productodos)

let numero = 0

while (numero = 10){
    numero+
    alert (numero)
    break
}

const componente1 = "Placa de red"
const componente2 = "Placa de sonido"
const componente3 = "Ram"
const componente4 = "Placa de video"           
const componente5 = "Fuente de alimentacion"
const componente6 = "Disco duro"

const componentes = ["Placa de red", "Placa de sonido", "Ram", "Placa de video", "Fuente de alimentacion","Disco duro"]
console.log(componentes)

componentes.push("gabinete")
componentes.unshift("motherboard")
console.log(componentes.includes("Auriculares"))