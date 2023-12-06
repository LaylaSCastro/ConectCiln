
// AGENDAMENTO
const arrow = document.querySelector(".arrow");
const agendamento = document.querySelector('.agendamento');

arrow.addEventListener('click', function(e){
    if(!agendamento.classList.contains('oculto')){
        agendamento.classList.add('oculto')
    }
    else{
        agendamento.classList.remove('oculto');
    }
});

// MODAL
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector('.containerModal');


const toggleModal = () =>{
    modal.classList.toggle("modalOculto");
}

[openModal,closeModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});
// CARROSSEL
let contador = 1;
document.getElementById("Radio1").checked = true;

setInterval ( function(){
    proxImagem();
},4000)

function proxImagem() {
    contador ++ 
    if(contador>4){
        contador = 1;
    }
    document.getElementById("Radio"+contador).checked = true
}
