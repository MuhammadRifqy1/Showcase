document.addEventListener('DOMContentLoaded', function () {

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var Header = document.getElementById('Header');
  var AboutPerfume = document.getElementById('AboutPerfume');
  var TriangleBg = document.getElementById('TriangleBg');
  var FooterPerfume = document.getElementById('FooterPerfume');

  if (screenWidth >= 768) {
      TriangleBg.style.backgroundImage = 'url("./assets/select-triangle-bg.webp")';
      Header.src ='./assets/header-perfume.webp';
      AboutPerfume.src ='./assets/about-perfume.webp';
      FooterPerfume.src ='./assets/footer-perfume.webp';
    }else{
      TriangleBg.style.backgroundImage = 'url("./assets/select-triangle-bg-md.webp")';
      Header.src ='./assets/header-perfume-md.webp';
      AboutPerfume.src ='./assets/about-perfume-md.webp';
      FooterPerfume.src ='./assets/footer-perfume-md.webp';
  }

  const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterSlow = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-slow');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterSlower = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-slower');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterFast = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-fast');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerFadeUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-right-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  observerSlideLeft.observe(document.querySelector('.header-text'));
  observerSlideLeft.observe(document.querySelector('.about-img-container'));
  observerSlideLeft.observe(document.querySelector('.discount'));
  observerSlideLeft.observe(document.querySelector('.process-img-2'));
  observerSlideLeft.observe(document.querySelector('.process-text-2'));
  observerCenterFast.observe(document.querySelector('.red-button'));
  observerCenter.observe(document.querySelector('.header-img-container'));
  observerCenter.observe(document.querySelector('.white-button'));
  observerCenter.observe(document.querySelector('.ads'));
  observerCenterSlow.observe(document.querySelector('.drop-button'));
  observerCenterSlower.observe(document.querySelector('.orange-button'));
  observerSlideRight.observe(document.querySelector('.about-aside'));
  observerSlideRight.observe(document.querySelector('.process-img-1'));
  observerSlideRight.observe(document.querySelector('.process-text-1'));
  observerSlideUp.observe(document.querySelector('.triangle-bg'));
})
