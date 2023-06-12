const logo = document.querySelector('.container');
const menu = document.querySelector('.main')

logo.addEventListener('click', function(){
    menu.classList.toggle('showmenu')
})