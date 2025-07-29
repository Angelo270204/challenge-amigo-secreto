// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let campoTexto = document.getElementById('amigo').value;
  if (campoTexto.trim() == ''){
    alert('Por favor, inserte un nombre');
  }else{
    amigos.push(campoTexto.trim());
    console.log(amigos);
    document.getElementById('amigo').value = '';
  }
}