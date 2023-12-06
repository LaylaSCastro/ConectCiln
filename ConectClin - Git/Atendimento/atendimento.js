const buttonHst = document.querySelector('#btn-hst')
const inputHst = document.querySelector('#input-hst')
const ulLista =document.querySelector('#Hstlista')
 
let listHst = []
function addHst() {
    listHst.push(inputHst.value)
    viewHst()
}
function viewHst() {
    let Hstli = ''
    listHst.forEach( tarefa => {
        Hstli = Hstli + `
        <li id="Hst">
            <h3>${tarefa}</ph3>
        </li>
        `
    })

    ulLista.innerHTML = Hstli
}
buttonHst.addEventListener('click', addHst)

const buttonMed = document.querySelector('#btn-med')
const inputMed = document.querySelector('#input-med')
const medLista =document.querySelector('#Medlista')
 
let listMed = []
function addMed() {
    listMed.push(inputMed.value)
    viewMed()
}
function viewMed() {
    let Medli = ''
    listMed.forEach( tarefa => {
        Medli = Medli + `
        <li id="Med">
            <h3>${tarefa}</ph3>
        </li>
        `
    })

    medLista.innerHTML = Medli
}
buttonMed.addEventListener('click', addMed)

const buttonVac = document.querySelector('#btn-vac')
const inputVac = document.querySelector('#input-vac')
const VacLista =document.querySelector('#Vaclista')
 
let listVac = []
function addVac() {
    listVac.push(inputVac.value)
    viewVac()
}
function viewVac() {
    let Vacli = ''
    listVac.forEach( tarefa => {
        Vacli = Vacli + `
        <li id="Vac">
            <h3>${tarefa}</ph3>
        </li>
        `
    })

    VacLista.innerHTML = Vacli
}
buttonVac.addEventListener('click', addVac)
