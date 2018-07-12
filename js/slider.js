'use strict'

function slider(sSelector, slideInterval) {
  var s = this;
  s.wrapper = document.querySelector(sSelector);
  s.slider = s.wrapper.querySelector('.slider');
  s.sliderWrapper = s.slider.querySelector('.slider__wrapper');
  s.slide = s.slider.querySelectorAll('.slider__slide');
  s.prevSlideBtn = s.slider.querySelector('.slider__cntrl--prev');
  s.nextSlideBtn = s.slider.querySelector('.slider__cntrl--next');
  s.slideDescription = s.slider.querySelectorAll('.slide__description');
  s.progressBar = document.querySelector('.progress');
  s.progressDone = s.progressBar.querySelector('.progress__done');
  s.slidesQuantity = s.slide.length;
  s.slideInterval = slideInterval;
  s.currentSlide = 1;
    
  s.sliderWrapper.style.width = s.slidesQuantity*100 + '%';
  s.progressDone.style.width = 0;
  
  s.incraseProgressDone = function(){
    s.progressUpdate = setInterval(function(){
      s.progressDone.style.width = parseFloat(s.progressDone.style.width) + 0.2 + '%';
      if(s.progressDone.style.width === '100%'){
         s.showNextSlide();
         s.progressDone.style.width = 0 + '%';
       }
    }, s.slideInterval/500);
  };

  s.progressBar.style.backgroundColor = 'white';
  s.progressDone.style.backgroundColor = 'black';

  s.switchProgressBarColors = function(){
    if(s.progressBar.style.backgroundColor === 'black'){
      s.progressBar.style.backgroundColor = 'white';
      s.progressDone.style.backgroundColor = 'black';
    } else { 
      s.progressBar.style.backgroundColor = 'black';
      s.progressDone.style.backgroundColor = 'white';
    }
  }

  s.showNextSlide = function(){
    if (s.currentSlide == s.slidesQuantity || s.currentSlide <= 0 || s.currentSlide > s.slidesQuantity) {
      s.sliderWrapper.style.transform = 'translateX(0)';
      s.currentSlide = 1;
    } else {
      s.translateWidth = -s.slide[s.currentSlide-1].offsetWidth * (s.currentSlide);
      s.sliderWrapper.style.transform = 'translateX(' + s.translateWidth + 'px)';
      s.currentSlide++;
    }
    s.progressDone.style.width = 0 + '%';
    s.switchProgressBarColors();
  } 

  s.showPrevSlide = function(){
    if (s.currentSlide == 1 || s.currentSlide <= 0 || s.currentSlide > s.slidesQuantity) {
      s.translateWidth = -s.slide[s.currentSlide-1].offsetWidth * (s.slidesQuantity - 1);
      s.sliderWrapper.style.transform = 'translateX(' + s.translateWidth + 'px)'; 
      s.currentSlide = s.slidesQuantity;
    } else {
      s.translateWidth = -s.slide[s.currentSlide-1].offsetWidth * (s.currentSlide-2);
      s.sliderWrapper.style.transform = 'translateX(' + s.translateWidth + 'px)';
      s.currentSlide--;
    }
   s.progressDone.style.width = 0 + '%';
   s.switchProgressBarColors()
  }
      
  for(var i = 0; i < s.slideDescription.length; i++){
    s.slideDescription[i].addEventListener('mouseover', function(){
      clearInterval(s.progressUpdate); 
    });

    s.slideDescription[i].addEventListener('mouseleave', function(){ 
      s.incraseProgressDone();
    });
  }

  window.addEventListener('resize', s.showNextSlide);

  s.prevSlideBtn.addEventListener('click',s.showPrevSlide);
  s.nextSlideBtn.addEventListener('click',s.showNextSlide);

  s.incraseProgressDone();
}

var firstSlider = new slider('.main-part', 10000);


