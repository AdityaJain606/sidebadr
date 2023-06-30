const threedot=document.querySelector('.black-dot');
const container=document.querySelector('.container');
const cut=document.querySelector('.cut');

threedot.addEventListener("click",()=>{
     container.style.width='50vw';
})
cut.addEventListener("click",()=>{
    container.style.width='0'
})

