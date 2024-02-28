AOS.init();
var swiper = new Swiper('.my-swiper', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
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
    600: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 7,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
var acc = document.getElementsByClassName("Wdatastory");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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
      panel.style.maxHeight = (panel.scrollHeight / window.innerHeight) * 55 + "vh";
    }
  });
}
let datastoryHeaderImg = document.querySelector('.datastory-header-img')
let dataStoryDefault = document.querySelector('#data-story-default')
let dataStory = document.querySelector('#data-story')
let writeDataStory = document.querySelector('#write-data-story')
let howWriteDataStory = document.querySelector('#how-write-data-story')
gsap.to(dataStoryDefault,{
  x:-40
})
gsap.to(dataStory, {
  x: 40
})
gsap.to(writeDataStory,{
  y: 40
})
gsap.to(howWriteDataStory,{
  y:-40
})
document.querySelector('#what').addEventListener('click',()=>{
  gsap.to(dataStoryDefault, {
    duration: 1,
    x: -40,
    opacity:0,
    display:'none',
    width: 0+"%"
  })
  gsap.to(dataStory, {
    duration: 1,
    x: 0,
    opacity:1,
    display:'inline',
    width: 100+"%"
  })
  gsap.to(writeDataStory,{
    duration: 1,
    y: 40,
    opacity: 0,
    display: 'none',
    width: 0 + "%"
  })
  gsap.to(howWriteDataStory,{
    duration: 1,
    y: -40,
    opacity: 0,
    display: 'none',
    width: 0 + "%"
  })
})
document.querySelector('#who').addEventListener('click',()=>{
  gsap.to(dataStoryDefault, {
    duration: 1,
    x: -40,
    opacity:0,
    display:'none',
    width: 0+"%"
  })
  gsap.to(dataStory, {
    duration: 1,
    x: 40,
    opacity: 0,
    display: 'none',
    width: 0 + "%"
  })
  gsap.to(writeDataStory, {
    duration: 1,
    y: 0,
    opacity: 1,
    display: 'inline',
    width: 100 + "%"
  })
  gsap.to(howWriteDataStory, {
    duration: 1,
    y: -40,
    opacity: 0,
    display: 'none',
    width: 0 + "%"
  })
})
document.querySelector('#how').addEventListener('click',()=>{
  gsap.to(dataStoryDefault, {
    duration: 1,
    x: -40,
    opacity: 0,
    display: 'none',
    width: 0 + "%"
  })
  gsap.to(dataStory, {
    duration: 1,
    x: 40,
    opacity: 0,
    display: 'none',
    width: 0 + "%"
  })
  gsap.to(writeDataStory, {
    duration: 1,
    y: 40,
    opacity: 0,
    display: 'none',
    width: 0 + "%"
  })
  gsap.to(howWriteDataStory, {
    duration: 1,
    y: 0,
    opacity: 1,
    display: 'inline',
    width: 100 + "%"
  })
})
//filter projects


document.addEventListener('click', function(event) {
  if (event.target.matches('.project-filter .list')) {
    var projectFilter = document.querySelectorAll('.project-filter li');
    for (var i = 0; i < projectFilter.length; i++) {
      projectFilter[i].classList.remove('project-filter-active');
    }
    event.target.classList.add('project-filter-active');
  }
}, false);


$(document).ready(function() {
  $('.list').click(function() {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.project-item').show('1000');
    }
    else {
      $('.project-item').not('.' + value).hide('1000');
      $('.project-item').filter('.' + value).show('1000');
    }
  });
});




//scroll animation 
window.addEventListener('scroll',()=>{
  var dataStoryDefaultPosition = dataStoryDefault.getBoundingClientRect()
  if (dataStoryDefaultPosition.top < window.innerHeight) {
      gsap.to(dataStoryDefault, {
     duration: 0.5, x: 0
      })
    }else{
      gsap.to(dataStoryDefault, {
     duration: 0.5, x:-40})
    }
    let rowImg = document.querySelector('.row-img')
    let rowImgPosition = rowImg.getBoundingClientRect()
    if (rowImgPosition.top < window.innerHeight) {
      gsap.to(rowImg, {
     duration: 1, x: 0
      })
    }else{
      gsap.to(rowImg, {
     duration: 1, x:-60})
    }
    let rowContent = document.querySelector('.row-content')
    let rowContentPosition = rowContent.getBoundingClientRect()
    if (rowContentPosition.top < window.innerHeight) {
      gsap.to(rowContent, {
     duration: 1, y: 0
      })
    }else{
      gsap.to(rowContent, {
     duration: 1, y:-60})
    }
    let sloganBox = document.querySelector('.slogan-box')
    let sloganBoxPosition = sloganBox.getBoundingClientRect()
    if (sloganBoxPosition.top < window.innerHeight) {
      gsap.to(sloganBox,{
        duration: 1, x:0
      })
    }else{
      gsap.to(sloganBox, {
      duration: 1, x:-100})
    }
    let servicesBox = document.querySelectorAll('.flex-box-1')
    let servicesBoxPosition = servicesBox[0].getBoundingClientRect()
    for (element of [...servicesBox]) {
    if (servicesBoxPosition.top < window.innerHeight) {
      gsap.to(element, {
        duration: 1,
        y: 0
      })
    } else {
      gsap.to(element, {
        duration: 1,
        y: -55
      })
    }
    }
    let projectRow = document.querySelector('.project-row')
    let projectRowPosition = projectRow.getBoundingClientRect()
    if (projectRowPosition.top < window.innerHeight) {
      gsap.to(projectRow,{
        duration:1,
        x:0
      })
    } else {
      gsap.to(projectRow, {
        duration: 1,
        x: -100
      })
    }
})
function hImgAnimateUp(){
  gsap.to(datastoryHeaderImg, {
    y: -15,
    duration: .5,
    onComplete: hImgAnimateDown
  })
}
function hImgAnimateDown(){
  gsap.to(datastoryHeaderImg,{
  y:0,
  duration:.5,
  onComplete:hImgAnimateUp
})
}
hImgAnimateUp()
//type animation
new TypeIt("#main-title", {
  speed: 25,
  waitUntilVisible: true,
  cursor:false,
  html:true,
  afterComplete: async ()=>{
  new TypeIt("#middle-title", {
  speed: 25,
  waitUntilVisible: true,
  cursor:false,
  afterComplete: async ()=>{
  new TypeIt("#end-title", {
  speed: 25,
  waitUntilVisible: true,
  cursor:false,
}).go();
  }
}).go();
  }
}).go();