// main.js — interactions globales: carousel, back to top, nav behaviors

document.addEventListener('DOMContentLoaded', function () {
  // Forcer le mode sombre
  document.body.classList.add('dark');
  
  // Carousel (uniquement sur index.html)
  initCarousel();

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth navigation for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Ajouter la classe active au lien courant
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Initialiser le compteur du panier
  if (typeof updateCartCount === 'function') {
    updateCartCount();
  }
});

/* ---------------------------------------------------------
   Carousel
--------------------------------------------------------- */
function initCarousel() {
  const carousel = document.getElementById('homeCarousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.slide');
  const slidesWrap = carousel.querySelector('.slides');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');
  
  if (!slides.length || !slidesWrap || !nextBtn || !prevBtn) return;
  
  let idx = 0;
  let rotationInterval;

  function show(i) {
    if (i >= slides.length) i = 0;
    if (i < 0) i = slides.length - 1;
    
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
    const slideWidth = slides[0].offsetWidth;
    slidesWrap.style.transform = `translateX(-${i * slideWidth}px)`;
    idx = i;
  }

  function nextSlide() {
    show(idx + 1);
  }

  function prevSlide() {
    show(idx - 1);
  }

  nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    nextSlide();
    resetRotation();
  });

  prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    prevSlide();
    resetRotation();
  });

  function startRotation() {
    rotationInterval = setInterval(nextSlide, 5000);
  }

  function stopRotation() {
    if (rotationInterval) {
      clearInterval(rotationInterval);
    }
  }

  function resetRotation() {
    stopRotation();
    startRotation();
  }

  // Arrêter la rotation au survol
  carousel.addEventListener('mouseenter', stopRotation);
  carousel.addEventListener('mouseleave', startRotation);

  // Initialisation
  window.addEventListener('load', function () {
    show(0);
    startRotation();
  });

  // Redimensionnement
  window.addEventListener('resize', function() {
    const slideWidth = slides[0].offsetWidth;
    slidesWrap.style.transform = `translateX(-${idx * slideWidth}px)`;
  });
}