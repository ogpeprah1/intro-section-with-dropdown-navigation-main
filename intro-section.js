let OpenMenu = document.getElementById('menu-bar')
let MenuItems = document.getElementById('nav-item')
let CloseMenu = document.getElementById('close-menu')
let overlay = document.getElementById('overlay')

OpenMenu.addEventListener('click', function(){
    MenuItems.style.display = 'flex'
    overlay.style.display = 'block'
})

CloseMenu.addEventListener('click', function(){
    MenuItems.style.display = 'none'
    overlay.style.display = 'none'
})