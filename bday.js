const form = document.querySelector('form')
const pass = document.querySelector('.password')
const error = document.querySelector('.error-popup')
const correct = document.querySelector('.correct')


form.addEventListener('submit', (k)=>{
    if(pass.value !== "efren"){
        k.preventDefault()
        error.classList.add('open')
        form.classList.add('close')
    } else {
        k.preventDefault()
        correct.classList.add('open')
        form.classList.add('close')
    }
} )

function hidePop(){
    form.classList.remove('close')
    error.classList.remove('open')
}

function nextPage(){
    window.location = "bd.html"
}



