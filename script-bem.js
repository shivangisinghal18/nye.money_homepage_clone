document.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelector('.reviews');
    const review=document.querySelectorAll('.reviews__review')
    const dots = document.querySelectorAll('.dot');
    const totalSlides=dots.length;
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;
    

    function updateSliderPosition(showtransition = true) {

        if(!showtransition){
            reviews.style.transition = 'none'
        }

        else{
            reviews.style.transition = 'transform 0.5s ease-in-out';
        }
        const offset = currentIndex * -70; 
        reviews.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

     
      reviews.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Record the initial touch position
    });

    reviews.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX; // Update the end position as the finger moves
    });

    reviews.addEventListener('touchend', () => {
        if (startX > endX + 50) { 
            moveToNextSlide();
        } else if (startX < endX - 50) {
            moveToPrevSlide();
        }
    });

    function moveToNextSlide(){
        currentIndex=(currentIndex+1)%totalSlides;
        if (currentIndex === 0) {
            updateSliderPosition(false)
            console.log("inside")
        }

        else updateSliderPosition();
    }
    function moveToPrevSlide(){
        currentIndex=(currentIndex-1+totalSlides)%totalSlides;

        if(currentIndex===5){
            updateSliderPosition(false)
            console.log("why isnde")
        }

        else
        updateSliderPosition();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index; 
            updateSliderPosition(); 
            
        });
    });

    updateSliderPosition(); 
});



const toggleBtn = document.querySelector('.nav__toggle-btn');
const sidebar = document.querySelector('.side-bar');
const contentArea = document.querySelector('.content-area');
const overlay = document.querySelector('.overlay')
 
contentArea.addEventListener('click', () => {
    console.log("content clicked")
    if ((sidebar.classList.contains('open')) && (!toggleBtn.classList.contains('opened'))) {
        sidebar.classList.remove('open');
        overlay.classList.toggle('active')
    }
 
   else if(toggleBtn.classList.contains('opened')){
    toggleBtn.classList.remove('opened');
   }
});
 
toggleBtn.addEventListener('click', () => {
    console.log("Toggle clicked")
    overlay.classList.toggle('active');
    toggleBtn.classList.toggle('opened')
    sidebar.classList.toggle('open');
});