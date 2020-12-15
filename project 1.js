"use strict";

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');


 const showBtn = document.querySelectorAll('.show-modal')
console.log(showBtn);

for ( let i = 0; i < showBtn.length; i++){;
showBtn[i].addEventListener('click', function (){
    console.log('Button Clicked')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
   
    
});
};

const closeModal = function()
{
    modal.classList.add('hidden');
overlay.classList.add('hidden');

};
closeBtn.addEventListener('click',  closeModal);
overlay.addEventListener('click', closeModal)
