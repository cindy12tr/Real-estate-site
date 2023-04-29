/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('navMenu')
const navToggle = document.getElementById('navToggle') 
const navClose = document.getElementById('navClose') 

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('navMenu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header=document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular-con", {
    loop: true,
    spaceBetween:24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
    el: ".swiper-pagination",
    },
    breakpoints: {

        768: {
        slidesPerView: 3,
        },
        1024: {
        spaceBetween: 48,
        },
    },
    });

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */ 
const linkFeatured=document.querySelectorAll('.featured-item')
function activeFeatured(){
linkFeatured.forEach(l=>l.classList.remove('active-featured'))
this.classList.add('active-featured')
}
linkFeatured.forEach(l=>l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scrollUp')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
	    sectionTop = current.offsetTop - 58,
		sectionId = current.getAttribute('id'),
		sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive) 

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    //reset: true
})
sr.reveal('.home-title, .popular-con,.features-card, .featured-filters')
sr.reveal('.home-image',{delay: 500})
sr.reveal('.home-content',{delay: 900, interval:100, origin: 'bottom'})
sr.reveal('.start-btn',{delay: 1000, origin: 'bottom'})
sr.reveal('.about-left',{origin: 'left'})
sr.reveal('.about-right',{origin: 'right'})
sr.reveal('.featured-card,.footer-content',{interval: 100})
