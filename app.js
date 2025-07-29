// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let campoTexto = document.getElementById('amigo').value;
  if (campoTexto.trim() == ''){
    alert('Por favor, inserte un nombre');
  }else{
    amigos.push(campoTexto.trim());
    console.log(amigos);
    mostrarListaAmigos();
    document.getElementById('amigo').value = '';
  }
}

function mostrarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++){
    let elementoLista = document.createElement('li');
    elementoLista.innerHTML = amigos[i];
    lista.appendChild(elementoLista);
  }
}