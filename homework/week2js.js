


/*
Assignment 4-1
*/

const mainTitle = document.getElementById('mainTitle');


mainTitle.addEventListener('click', (event) => {
    mainTitle.textContent = 'Have a good time!';
    resetCursor(event);
  });


/*
Assignment 4-2
*/

const icone = document.querySelector('.icone');
const across = document.querySelector('.across');
const main_nav = document.querySelector('.main-nav');

icone.addEventListener('click', (event) => {
    event.target.style.visibility = "hidden";
    event.target.nextElementSibling.style.visibility = "visible";
    main_nav.style.display = "block";
    main_nav.style.top = "0";
    main_nav.style.right = "0";
    main_nav.style.textAlign = "left";
    for (i = 0; i < main_nav.children.length; i++) {
    	main_nav.children[i].style.display = "block";
    	main_nav.children[i].style.margin = "0";	
    };
  });

across.addEventListener('click', (event) => {
    event.target.style.visibility = "hidden";
    event.target.previousElementSibling.style.visibility = "visible";
    main_nav.style.position = "static";
    for (i=0; i < main_nav.children.length; i++) {
        main_nav.children[i].style.display = "inline";
        main_nav.children[i].style.margin = "0";
    }
    main_nav.style.display = "none";
 
  });









