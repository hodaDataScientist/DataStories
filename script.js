var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop:true,
  freeMode: true,
  hashNavigation: {
    replaceState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    750:{
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 7,
    },
    950: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});


var acc = document.getElementsByClassName("Wdatastory");
var img = document.getElementById("data-story-default");

var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
      this.classList.remove("active");
		} else {
			for (i = 0; i < acc.length; i++) {
				acc[i].classList.remove("active");
				acc[i].nextElementSibling.style.maxHeight = null;
			}
      this.classList.toggle("active");
			panel.style.maxHeight = panel.scrollHeight * 0.56 + "px";
		}
	});
}


gsap.from('#data-story-default',{opacity:0, y:-200, duration: 2.5,ease: "elastic"});
document.getElementById("what").addEventListener('click', () =>{
  gsap.to('#data-story-default',{opacity:0, y:200, duration: 1.5})
  gsap.to("#write-data-story",{opacity:0,x:-10,duration:1.5})
  gsap.to('#how-write-data-story',{opacity:0,y:300,duration:1.5})
  gsap.to("#data-story",{opacity:1,y:360,duration:1.5})
  
});
document.getElementById("who").addEventListener('click', () =>{
  gsap.to('#data-story-default',{opacity:0, y:200, duration: 1.5})
  gsap.to("#data-story",{opacity:0,y:-200,duration:1.5})
  gsap.to('#how-write-data-story',{opacity:0,y:300,duration:1.5})
  gsap.to("#write-data-story",{opacity:1,x:20,duration:1.5})
  
});
document.getElementById("how").addEventListener('click', () =>{
  gsap.to('#data-story-default',{opacity:0, y:200, duration: 1.5})
  gsap.to("#data-story",{opacity:0,y:-200,duration:1.5})
  gsap.to("#write-data-story",{opacity:0,x:-20,duration:1.5})
  gsap.to('#how-write-data-story',{opacity:1,y:-360,duration:1.5})
  
});


document.addEventListener('click', function(event) {
  if (event.target.matches('.project-filter .list')) {
    var projectFilter = document.querySelectorAll('.project-filter li');
    for (var i = 0; i < projectFilter.length; i++) {
      projectFilter[i].classList.remove('project-filter-active');
    }
    event.target.classList.add('project-filter-active');
  }
}, false);


$(document).ready(function(){
  $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if(value == 'all'){
          $('.project-item').show('1000');
      }
      else{
          $('.project-item').not('.'+value).hide('1000');
          $('.project-item').filter('.'+value).show('1000');
      }
  });
});