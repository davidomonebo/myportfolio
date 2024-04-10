let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top =window.scrollY;
    let offset =sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classlist.remove('active');
        document.querySelector('header nav a [href*=' + id + ']').classlist.add 
        ('active')

      })
    }
  })
}
menuIcon.onclick = () => {
  menuIcon.classList.toogle('bx-x');
  navbar.classList.toogle('active');
}
