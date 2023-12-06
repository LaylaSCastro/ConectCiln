const principal = document.getElementById('inputs');
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

function emailValidate() {
    if(!emailRegex.test(campos[0].value)){
        setErro(0);
        document.getElementById('btn').disabled = true;   
    }
    else {
        removeErro(0)
        document.getElementById('btn').disabled = false;

}
}
function passwordValidate() {
    if(campos[1].value.length > 6){
        setErro(1);
        document.getElementById('btn').disabled = true;

    }
    else {
        removeErro(1)
        document.getElementById('btn').disabled = false;

}
}