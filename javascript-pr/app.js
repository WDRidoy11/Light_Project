'use strict'
let on = document.getElementById('On');
let off = document.getElementById('off');
let img = document.getElementById('img');
on.addEventListener('click', function() {
    img.src = 'on.gif';
});
off.addEventListener('click', function() {
    img.src = 'off.gif';
});