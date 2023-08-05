let currentMenu = null;

function toggleMenu(index) {
    const options = document.querySelectorAll('.option');
    
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('active-option');
    }
    
    options[index].classList.add('active-option');

    const menu = document.getElementById(`menu${index}`);
    if (currentMenu && currentMenu !== menu) {
        currentMenu.classList.remove('active');
    }
    menu.classList.toggle('active');
    currentMenu = menu.classList.contains('active') ? menu : null;
}
