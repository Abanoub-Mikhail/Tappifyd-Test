"use strict"
let container = document.querySelectorAll('.container.preparation')

window.onload = function() {
   for (let i = 0; i < container.length; i++) {
    container[i].classList.remove('preparation');
   }
};



const the_animation = document.querySelectorAll('.animation')
const the2_animation = document.querySelectorAll('.animationIMG')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.1
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 


  const anime2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animationIMG')
        }
            else {
                entry.target.classList.remove('scroll-animationIMG')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the2_animation.length; i++) {
   const elements = the2_animation[i];

   anime2.observe(elements);
  }