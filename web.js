document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('menuBar');
    const menuDropdown = document.getElementById('menuDropdown');
    let isMenuOpen = false;
  
    toggleButton.addEventListener('click', function () {
      // Toggle the state
      isMenuOpen = !isMenuOpen;
  
      // Update the SVG content based on the state
      if (isMenuOpen) {
        // Change to Close Icon SVG
        toggleButton.innerHTML = `
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
        `;
        menuDropdown.style.display = 'none';
      } else {
        // Change back to Hamburger Icon SVG
        toggleButton.innerHTML = `
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
        `;
        menuDropdown.style.display = 'block';
        
      }
    });
    
  });
  document.addEventListener('DOMContentLoaded', function () {
    // const enlargeEl = document.getElementById('enlarge');
    const enlargeEl1 = document.querySelector('.enlarge2');
      const img1 = document.getElementById('myImg11');
      // console.log(enlargeEl)
      img1.addEventListener('click', function () {
    
        // enlargeEl.src = `images/image-product-1.jpg`
        enlargeEl1.src = `images/image-product-1.jpg`
          
        
      });
  })
  document.addEventListener('DOMContentLoaded', function () {
    // const enlargeEl = document.getElementById('enlarge');
    const enlargeEl1 = document.getElementById('enlarge2');
      const img2 = document.getElementById('myImg12');
      // console.log(enlargeEl)
      img2.addEventListener('click', function () {
    
        // enlargeEl.src = `images/image-product-2.jpg`
        enlargeEl1.src = `images/image-product-2.jpg`
          
        
      });
  })
  document.addEventListener('DOMContentLoaded', function () {
    // const enlargeEl = document.getElementById('enlarge');
    const enlargeEl1 = document.getElementById('enlarge2');
      const img3 = document.getElementById('myImg13');
      // console.log(enlargeEl)
      img3.addEventListener('click', function () {
    
        // enlargeEl.src = `images/image-product-3.jpg`
        enlargeEl1.src = `images/image-product-3.jpg`
          
        
      });
  })
  document.addEventListener('DOMContentLoaded', function () {
    // const enlargeEl = document.getElementById('enlarge');
    const enlargeEl1 = document.getElementById('enlarge2');
      const img4 = document.getElementById('myImg14');
      // console.log(enlargeEl)
      img4.addEventListener('click', function () {
    
        // enlargeEl.src = `images/image-product-4.jpg`
        enlargeEl1.src = `images/image-product-4.jpg`
          
        
      });
  })

document.addEventListener('DOMContentLoaded', function () {
  const enlargeEl = document.getElementById('enlarge');
  // const enlargeEl1 = document.getElementById('enlarge2');
    const img1 = document.getElementById('myImg1');
    // console.log(enlargeEl)
    img1.addEventListener('click', function () {
  
      enlargeEl.src = `images/image-product-1.jpg`
      // enlargeEl1.src = `images/image-product-1.jpg`
        
      
    });
})
document.addEventListener('DOMContentLoaded', function () {
  const enlargeEl = document.getElementById('enlarge');
  // const enlargeEl1 = document.getElementById('enlarge2');
    const img2 = document.getElementById('myImg2');
    // console.log(enlargeEl)
    img2.addEventListener('click', function () {
  
      enlargeEl.src = `images/image-product-2.jpg`
      // enlargeEl1.src = `images/image-product-2.jpg`
        
      
    });
})
document.addEventListener('DOMContentLoaded', function () {
  const enlargeEl = document.getElementById('enlarge');
  // const enlargeEl1 = document.getElementById('enlarge2');
    const img3 = document.getElementById('myImg3');
    // console.log(enlargeEl)
    img3.addEventListener('click', function () {
  
      enlargeEl.src = `images/image-product-3.jpg`
      // enlargeEl1.src = `images/image-product-3.jpg`
        
      
    });
})
document.addEventListener('DOMContentLoaded', function () {
  const enlargeEl = document.getElementById('enlarge');
  // const enlargeEl1 = document.getElementById('enlarge2');
    const img4 = document.getElementById('myImg4');
    // console.log(enlargeEl)
    img4.addEventListener('click', function () {
  
      enlargeEl.src = `images/image-product-4.jpg`
      // enlargeEl1.src = `images/image-product-4.jpg`
        
      
    });
})
/*
document.addEventListener('DOMContentLoaded', function () {
  const enlargeEl = document.getElementById('enlarge');
    
    // console.log(enlargeEl)
    enlargeEl.addEventListener('click', function () {
      console.log('yes')
      popup.src = `./manify.html`
        
      
    });
})
*/

  // ENLARGE THE PICTURESS
  document.addEventListener('DOMContentLoaded',function(){
    const leftSection2 = document.getElementById("lection");
    const enlargeEl = document.getElementById('enlarge');
    const section = document.getElementById('section1');
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    let enlargeWasClicked = false;
    const cancel = document.getElementById('cancel');
    enlargeEl.addEventListener('click', function(){

        console.log('clicked');
        leftSection2.style.display = "flex";
        section.style.filter = "blur(5px)";
        // section.style.background = "rgba(0, 0, 0, 0.75)";
        header.style.filter = "blur(2px)";
        // section.style.background = "rgba(0, 0, 0, 0.75)";
        // body.style.background = "rgba(0, 0, 0, 0.75)";
      
      
    });
    cancel.addEventListener('click', function(){
      console.log('cancelled');
      leftSection2.style.display = "none";
      // section.style.background = "transparent";
      section.style.cssText = "filter:blur(0); ";
      header.style.filter = "blur(0)";
      // body.style.background = "transparent";

    })

  })
  
//  document.addEventListener('DOMContentLoaded', function(){
//   const enlargeEl = document.getElementById('enlarge2');
//   const prevEl = document.getElementById('prev');
//   const nextEl = document.getElementById('next');
//   nextEl.addEventListener('click', function(){
//     // console.log('next image');
//     if (enlargeEl.src = 'images/image-product-1.jpg'){
//       enlargeEl.scr = 'images/image-product-2.jpg';
//       console.log('next image2');
//     }else if (enlargeEl.src = 'images/image-product-2.jpg'){
//       enlargeEl.scr = 'images/image-product-3.jpg';
//       console.log('next image3');
//     }else if (enlargeEl.src = 'images/image-product-3.jpg'){
//       enlargeEl.scr = 'images/image-product-4.jpg';
//       console.log('next image4');
//     }else if (enlargeEl.src = 'images/image-product-4.jpg'){
//       enlargeEl.scr = 'images/image-product-1.jpg';
//       console.log('next image1');
//     }
//   })
//  })

// SLIDER FOR MOBILE
const slides  =document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;
// initializeSlider();
document.addEventListener('DOMContentLoaded', initializeSlider());
function initializeSlider(){
  slides[slideIndex].classList.add('displaySlide');
  intervalId = setInterval(nextSlide, 5000);

}
function showSlide(index){
  if(index >= slides.length){
    slideIndex = 0;
  }else if(index < 0){
    slideIndex = slides.length - 1;
  }
  slides.forEach(slide => {
    slide.classList.remove('displaySlide')
  });
  slides[slideIndex].classList.add('displaySlide');
}
function prevSlide(){
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide(){
  clearInterval(intervalId);
  slideIndex++;
  showSlide(slideIndex);
}
let cartCalc = document.getElementById('cart-calc');


document.addEventListener('DOMContentLoaded', function () {
  const add = document.getElementById('add');
  let quantitY = document.getElementById('qantitY');
  const subtract = document.getElementById('subtract');
    
    // console.log(enlargeEl)
    add.addEventListener('click', function () {
     
    if (quantitY > 0 || quantitY <= 10) {
      quantitY++;

    }else{
      alert('Cart is full')
    }
        
      
    });
})
