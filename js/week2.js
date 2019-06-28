
const openMenu = () => {
  document.getElementById('side-menu').style.width = '20em';
};
const closeMenu = () => {
  document.getElementById('side-menu').style.width = '0';
}


const banner = document.querySelector('.banner');
const toggleList = document.getElementById('toggleList');
const container2 = document.querySelector('.container2');


banner.addEventListener('click', () => {
  Heading.style.color = 'orange';
  Heading.textContent = 'Yo in the house';
});

/*
function openSlideMenu() {
  var x = document.getElementById("side-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/

toggleList.addEventListener('click', () => {
  if (container2.style.display == 'none') {
    toggleList.textContent = 'Hide';
    container2.style.display = 'grid';
  } else {
    toggleList.textContent = 'Call to Action';
    container2.style.display = 'none';
  }
});



