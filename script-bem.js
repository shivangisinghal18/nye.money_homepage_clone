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


// inserting scrolling code


const parent = document.querySelector('.services__desc-desktopview')

window.onscroll=()=>{
    let top = window.scrollY
    
    if(top>=1240 && top<1700){
        console.log("notdone")
        parent.style.position = "sticky"
        parent.style.top = "100px"
    }
}


const servicelist = document.querySelector('.services__desc-desktopviewlist')
const service = document.querySelectorAll('.services__service')

let previousactiveservice = service[0]
service.forEach((element,index)=>{

    element.addEventListener('click',()=>{

         previousactiveservice.classList.remove('serviceactive')
          element.classList.add('serviceactive')
          previousactiveservice = element

console.log("service clickesd")
        let serviceheading
        let points 
        let scrollingy
        scrollingy = element.offsetTop-100
        console.log("scrollingy upper",scrollingy)
        if(index==0){
           
            serviceheading = "A card that pays you back on every spend"
            points= ["Up to ₹2000 cashback on every spend",
                        "Pay directly from your NYE Prepaid",
                        "Online or offline, earn everywhere",
                        " A card powered by RuPay security"]
        }

        else if(index==1){
            serviceheading = "Freedom to choose banking partner from leading Indian banks"

            points = ["Instant and seamless digital account opening",
                      "Manage all your accounts on a single app",
                      "Interest rates that amplify your savings",
                      "Secure internet & mobile banking"]
                      scrollingy += 80
        }

        else if(index==2){
            serviceheading = "All your payments simplified on one app"
            points = ["Transfer money to anyone conveniently",
                      "Pay for utility bills - DTH, mobile, gas etc. instantly",          
                "Send money via UPI, wallet, or your bank account",  
                "Earn exciting cashback"]
        }

        else if(index==3){
            scrollingy += 80
            serviceheading = "Personal loans that bring you closer to your dreams"
            points = ["Pre-approved loans up to ₹10,00,000",
                "Paperless and transparent process",
                "Attractive interest rates",
                "Flexible loan payment options"]
        }
        servicelist.children[0].innerHTML = serviceheading;
        servicelist.children[1].children[0].childNodes.forEach((subelements,i)=>{

            if(subelements.nodeName!="#text")
             { console.log(subelements)
                let ind = Math.floor(i/2)
                console.log("check,",subelements);
            subelements.children[1].innerHTML= points[ind];
             }
        })
        console.log("scrollingy lower",scrollingy)

        window.scrollTo({
            top: scrollingy,
            left: 0,  // x-coordinate
            behavior: 'smooth' // Smooth scrolling
          });
      })
})