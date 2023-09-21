document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('sorteador').addEventListener('submit', function(evento){
        evento.preventDefault()

        let numeromaximo = document.getElementById('numero-maximo').value;
        numeromaximo = parseInt(numeromaximo);

        let numeroAleatorio = Math.random() * numeromaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);


       document.getElementById('resultado-valor').innerText = numeroAleatorio;
       document.querySelector('.resultado').style.display = "block"
    })
})