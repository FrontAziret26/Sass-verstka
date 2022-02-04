let openModal =document.querySelector('.modal-btn')
let modal = document.querySelector('.modal')

openModal.addEventListener("click",function (){
    modal.style.display ='flex'
})
let closeBtn =document.querySelector('.modal__content--btn')
let btn = document.querySelector('.modal')

closeBtn.addEventListener("click",function (){
    modal.style.display ='none'
})
window.onclick = (e) =>{
    if (e.target === modal) {
        modal.style.display = 'none'
    }
}