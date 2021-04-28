$(document).ready(function(){
     $(window).scroll(function(){
        if(this.scrollY > 25){
          $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
     });
     //toggle menu/navbar script
     $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");

     });
     //animation
var typed = new Typed(".typing", {
  strings: ["Designer", "Developer", "Photographer", "freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});



     //owl carouse1
     $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimedOut: 2000,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }

    }
     });
});
