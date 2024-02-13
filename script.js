// Add JavaScript functionality as needed
// For example, you might want to implement smooth scrolling for navigation links
const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks= document.querySelector('.nav-links li');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation = '';
          }
          else{
              link.style.animation = `navLinkFace 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      burger.classList.toggle('toggle');
  })
}

navSlide();//This block adds funtionality to he hamburguer button when on mobile


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});

let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  carousel.style.transform = `translateX(${-index * itemWidth}px)`;
  currentIndex = index;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
  showSlide(currentIndex);
}
