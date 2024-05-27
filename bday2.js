const cake = document.querySelector('.container')
const letter = document.querySelector('.letter-card')
const text = document.querySelector('.scrttext')

document.addEventListener('DOMContentLoaded',()=>{
    const music = new Audio("About You.mp3")
    music.play()
})

cake.addEventListener('click',()=>{
    cake.classList.add('close')
    letter.classList.add('show-letter')
})

letter.addEventListener('click',()=>{
    cake.classList.remove('close')
    letter.classList.remove('show-letter')
})
