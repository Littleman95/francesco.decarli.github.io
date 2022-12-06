//Strict mode make appearing 'silent errors' that JavaScript hides by defoult
'use strict';

const switcher = document.querySelector('.btn')

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Light Theme";
    } else {
        this.textContent = "Dark Theme";
    }

    console.log('current class name: ' + className)
});