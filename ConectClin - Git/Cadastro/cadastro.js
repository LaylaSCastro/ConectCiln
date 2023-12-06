const principal = document.getElementById('principal');
const spans = document.querySelectorAll('.span-required');
const campos = document.querySelectorAll('.required');
const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

function setErro(index){
    campos[index].style.border = '2px solid #e63636';
     spans[index].style.display = 'block';
}

function removeErro(index){
    campos[index].style.border = '';
     spans[index].style.display = 'none';
}
 
function nameValidate(){
    if(campos[0].value.length < 3){
        setErro(0);
        document.getElementById('btn').disabled = true;
    }
    else
    {
        document.getElementById('btn').disabled = false;
        removeErro(0)
    }
}
function emailValidate() {
    if(!emailRegex.test(campos[1].value)){
        setErro(1);
        document.getElementById('btn').disabled = true;
    }
    else {
        removeErro(1)
        document.getElementById('btn').disabled = false;
}
}
function passwordValidate() {
    if(campos[2].value.length > 6){
        setErro(2);
        document.getElementById('btn').disabled = true;

    }
    else {
        removeErro(2)
        document.getElementById('btn').disabled = false;

}
}
function cadastro() {
    window.location
}