const header = document.querySelector(".nav-area");
const innerpagenav = document.querySelector(".banner-bg");

window.addEventListener("scroll", () => {
  const windowWidth = window.innerWidth;

  window.scrollY > 470
    ? (header.style.top = '-25px')
    : (header.style.top = 0);

  window.scrollY > 470
    ? header.classList.add("nav-bg-on-scroll")
    : header.classList.remove("nav-bg-on-scroll");

});

window.addEventListener("scroll", () => {
  const windowWidth = window.innerWidth;
     window.scrollY > 100
    ? innerpagenav.classList.add("nav-bg-on-scroll")
    : innerpagenav.classList.remove("nav-bg-on-scroll");

});
//
//document.addEventListener("DOMContentLoaded", function(){
//  // make it as accordion for smaller screens
//  if (window.innerWidth > 1024) {
//  
//    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
//  
//      everyitem.addEventListener('mouseover', function(e){
//  
//        let el_link = this.querySelector('a[data-bs-toggle]');
//  
//        if(el_link != null){
//          let nextEl = el_link.nextElementSibling;
//          el_link.classList.add('show');
//          nextEl.classList.add('show');
//        }
//  
//      });
//      everyitem.addEventListener('mouseleave', function(e){
//        let el_link = this.querySelector('a[data-bs-toggle]');
//  
//        if(el_link != null){
//          let nextEl = el_link.nextElementSibling;
//          el_link.classList.remove('show');
//          nextEl.classList.remove('show');
//        }
//  
//  
//      })
//    });
//  
//  }
//  // end if innerWidth
//  }); 
//  // DOMContentLoaded  end
//
//
//  
//// $(document).ready(function () {
////   $(".dropdown").hover(function () {
////     var dropdownMenu = $(this).children(".dropdown-menu");
////     if (dropdownMenu.is(":visible")) {
////       dropdownMenu.parent().toggleClass("open");
////     }
////   });
//// }); 