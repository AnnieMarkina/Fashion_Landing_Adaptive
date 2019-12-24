"use strict"; 

let dropdown = document.querySelectorAll('.footer__menu-dropdown');
let hiddenElements = document.querySelectorAll('.footer__menu-children');

dropdown.forEach(el => {
    el.addEventListener('mouseover', function() {
        let child = el.nextElementSibling;
        child.classList.add('active');
    })
});

dropdown.forEach(el => {
    el.addEventListener('mouseout', function() {
        let child = el.nextElementSibling;
        child.classList.remove('active');
    })
});

hiddenElements.forEach(el => {
    el.addEventListener('mouseover', function() {
        el.classList.add('active');
    })
});

hiddenElements.forEach(el => {
    el.addEventListener('mouseout', function() {
        el.classList.remove('active');
    })
});