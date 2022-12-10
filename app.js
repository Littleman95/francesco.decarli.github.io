//Strict mode make appearing 'silent errors' that JavaScript hides by defoult
'use strict';

// I'll extend theme switcher to all the pages in the future, when I'll have more experiences
const switcher = document.querySelector('.btn')

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const className = document.body.className;
    if(className == "dark-theme") {
        this.textContent =  "Light Theme";
    } else {
        this.textContent = "Dark Theme";
    }

    console.log('current class name: ' + className)
});
