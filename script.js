// document.addEventListener('DOMContentLoaded', function(){
//     let currentIndex = 0;

//     const reviews = document.querySelector('.reviews');
//     const totalSlides = document.querySelectorAll('.review').length;

//     function showSlide(index) {
//         if (index >= totalSlides) {
//             currentIndex = 0;
//         } else if (index < 0) {
//             currentIndex = totalSlides - 1;
//         } else {
//             currentIndex = index;
//         }

//         const offset = -currentIndex * 100;
//         reviews.style.transform = `translateX(${offset}%)`;
//     }

//     setInterval(function() {
//         showSlide(currentIndex + 1);
//     }, 3000);
// });


const toggleBtn = document.querySelector('.toggle_btn');
const sidebar = document.querySelector('.side_bar');
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