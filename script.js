document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const images = document.querySelectorAll('.carousel-img');
  
    function showNextImage() {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }
  
    images[index].classList.add('active');
    setInterval(showNextImage, 3000); // Change image every 3 seconds
  });
  
// script.js

document.addEventListener("DOMContentLoaded", function () {
    var slideshows = document.querySelectorAll('.slideshow-container');
    
    slideshows.forEach(function (slideshow) {
      var images = slideshow.querySelectorAll('.slideshow-img');
      var currentIndex = 0;
  
      function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }
  
      setInterval(showNextImage, 3000);
    });
  });
  