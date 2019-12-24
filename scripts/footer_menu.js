"use strict"; 

let dropdown = document.querySelectorAll('.footer__menu-dropdown');
let hiddenElements = document.querySelectorAll('.footer__menu-children');

dropdown.forEach(el => {
    el.addEventListener('mouseover', function() {
        let child = el.nextElementSibling;
        console.log(child);
        child.classList.add('active');
    })
});

dropdown.forEach(el => {
    el.addEventListener('mouseout', function() {
        let child = el.nextElementSibling;
        console.log(child);
        child.classList.remove('active');
    })
});

hiddenElements.forEach(el => {
    el.addEventListener('mouseover', function() {
        el.classList.add('active');
    })
});