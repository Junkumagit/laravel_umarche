// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';
import 'swiper/swiper-bundle.css';

// const swiper = new Swiper(...);

// core version + navigation, pagination modules:
// import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

