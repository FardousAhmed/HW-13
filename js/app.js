// common js starts here
let btn = document.querySelector ('.part-1 button')
let headding = document.querySelector('.part-1 h1')
let offImage = document.querySelector( '.part-2 img')
let on = document.querySelector('.on')
let off = document.querySelector('.off')
// common js ends here

// section-1 starts here
function headdingCng(){
    headding.innerHTML= 'MA Fardous'
}
btn.addEventListener('click', headdingCng)
// section-1 ends here

// section-2 starts here
function onImg(){
    offImage.src='./images/on.jpg'
}
on.addEventListener('click', onImg)
function offImg(){
    offImage.src='./images/off.jpg'
}
off.addEventListener('click', offImg)
// section-2 ends here