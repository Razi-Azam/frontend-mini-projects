let marqueeContainer = document.querySelector('#marquee-container');
let stickyCTABar = document.querySelector('#sticky-cta-trial-bar');

//calculate the position of the marquee section on the page
let marqueeAreaPosition = marqueeContainer.offsetTop + marqueeContainer.offsetHeight;

//check the position and show/hide sticky CTA bar
const detectScrollArea = () => {
    if(window.pageYOffset >= marqueeAreaPosition || window.scrollY >= marqueeAreaPosition) {
        stickyCTABar.style.visibility = 'visible';
        console.log("show CTA")
    } else {
        stickyCTABar.style.visibility = 'hidden';
        console.log("Hide CTA")
    }
}

//call the function on scroll event
window.addEventListener('scroll', detectScrollArea);

//detect the scroll position on page load as well
detectScrollArea();
