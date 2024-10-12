const navbarButton = document.querySelector(".fa-bars-staggered")

const mobileMenu = document.querySelector(".mobile-menu")

const closeIcon = document.querySelector(".fa-circle-xmark")

navbarButton.addEventListener("click", function(){
    mobileMenu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function(){
    mobileMenu.classList.remove("aktiv")
})

const swiper = new Swiper(".companiesKarusel", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });