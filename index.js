console.log('안녕');
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('.search input');
//function(){} 은 익명함수(함수명이 없는 함수를 말한다)
searchEl.addEventListener('click',function(){
  searchInputEl.focus();
}); 
searchInputEl.addEventListener('focus', function(){
  searchInputEl.setAttribute('placeholder','통합검색');
  searchEl.classList.add('focused');
});
searchInputEl.addEventListener('blur', function(){
  searchInputEl.setAttribute('placeholder','');
  searchEl.classList.remove('focused');
});
//응용: const searchInputEl = searchEl.querySelector('input');
//console.log(searchEl);
//console.log(searchInputEl);

const badgesE1 = document.querySelector('#head_layout .badges');
const totopEl = document.querySelector('#to-top');
/*throttle: lodach기능을 불러오기 위한 메서드*/ 
window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY > 500){
    //배지 숨기기
    /*badgesE1.style.display = 'none';*/
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgesE1, .6,{
      opacity:0
    })
    //상단버튼 보이기
    gsap.to(totopEl,.7,{
      x:0
    })
  }else{
    //배지 보이기
    /*badgesE1.style.display = 'block';*/
        gsap.to(badgesE1, .6,{
      opacity:1
    })
    //상단버튼 숨기기
    gsap.to(totopEl,3,{
      x:500
    })
  }
},300)); /*밀리세컨드: 300 = 0.3초 즉, 0.3초 마다 기능을 실행하게 하여서 버벅거림을 방지하는 요소*/

//상단으로 이동
totopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo:0
  })
})

const fadeinEls =document.querySelectorAll('section.banner .fade-in')
//console.log(fadeinE1);
fadeinEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl,.5,{
    opacity: 1, 
    delay: (index+1)*.3
  })
});

new Swiper('.notice-line .swiper-container',{
  direction: 'vertical', //수직 슬라이드
  autoplay:true ,//자동 재상 여부
  loop: true // 반복재상 여부
});

new Swiper('.promotion .swiper-container',{
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination:{
    el: '.promotion .swiper-pagination', 
    clickable: true
  },
  navigation:{
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

//251115
// promotion: 슬라이드 토글 기능
// 슬라이드 영역
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역 토글하는 버튼
const promotionToggleEl = document.querySelector('.toggle-promotion');

// console.log(promotionEl);
// console.log(promotionToggleEl);
promotionToggleEl.addEventListener('click', function(){
//  console.log(promotionEl.classList.contains('hide'));
if(promotionEl.classList.contains('hide')){
  //요소애 hide 클래스 존재
  promotionEl.classList.remove('hide');
}else{
  //요소에 hide 클래스 추가
  promotionEl.classList.add('hide');
}
});

//스크롤 영역 감지
const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEls);
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement:spyEls,
    triggerHook:.8
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller());
});

// AWARDS SWIPE
new Swiper('.awards .swiper-container',{
  slidesPerView: 5,
  loop: true,
  spaceBetween: 30,
  autoplay:{
    delay:3000
  },
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

