const ham = document.querySelector(".hamburger")
const close = document.querySelector(".close-btn")
const menu = document.querySelector(".menu-container")

ham.addEventListener ("click", ()=>{
 menu.classList.remove('hide')
 menu.classList.add('show')
 console.log("sss")
}
)

close.addEventListener ("click", ()=>{
    menu.classList.remove('show')
    menu.classList.add('hide')
   }
   )