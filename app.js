"use strict";

let arrayAmigos = [];

//Funcion para limpiar la caja donde se ingresa el amigo
const limpiarCaja = function (id) {
  let valorCaja = document.querySelector(id);
  return (valorCaja.value = "");
};

//Funcion para limpiar la lista de amigos
const limpiarLista = function (id) {
  document.getElementById(id).innerHTML = " ";
};

//Funcion para agrega amigo y validar entrada
const agregarAmigo = function () {
  let amigo = (document.getElementById("amigo").value); //Obtengo el nombre dado por el usuario
  let amigoMinuscula = amigo.toLowerCase(); //Convierte todo el teto ingresado por el usuario en minusculas

  //Condicion para validar que el usuario ingrese un nombre y que este no este repetido
  if (!amigo) {
    alert("Por favor, inserte un nombre"); //El usuario no mostro ningún nombre
  } else if (arrayAmigos.includes(amigoMinuscula)){
    alert("El amigo agredado ya existe"); //El usuario agrego el mismo nombre
  }else{
    arrayAmigos.push(amigoMinuscula); //Agrego el nombre a mi arreglo
    limpiarCaja("#amigo"); //Limpiar la caja donde ingresa amigo
    limpiarLista("resultado"); //Limpiar el amigo sorteado
    agregarAmigosLista();
  }

  return arrayAmigos;
};

//Función para crear la lista en HTML y recorrer el arreglo de amigos
const agregarAmigosLista = function () {
  let listaAmigos = document.getElementById("listaAmigos"); //Obtener la lista de HTML
  listaAmigos.innerHTML = " "; //Vaciar la lista

  //Recorrer el arreglo de amigos
  for (let i = 0; i < arrayAmigos.length; i++) {
    let li = document.createElement("li"); //Crear el elemento de amigos
    li.textContent = arrayAmigos[i]; //Asignar posicion a la lista de amigos
    listaAmigos.appendChild(li); //Asignar amigo en la posicion
  }
  return listaAmigos;
};

const sortearAmigo = function () {
  if (arrayAmigos.length > 0) {
    let indiceAleatorio = Math.trunc(Math.random() * arrayAmigos.length);

    limpiarLista("listaAmigos");

    document.getElementById("resultado").innerHTML =
      "Amig@ Sorteado: " + arrayAmigos[indiceAleatorio];

  } else {
    alert("Por favor, inserte un nombre");
  }
};
