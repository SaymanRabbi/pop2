const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const open = document.querySelectorAll('.show-modal');

for( let i = 0; i<open.length;i++){
open[i].addEventListener('click',function (){
modal.classList.remove('hidden');
overlay.classList.remove('hidden');

})};
close.addEventListener('click',function (){
modal.classList.add('hidden');
overlay.classList.add('hidden');
});
overlay.addEventListener('click',function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})





