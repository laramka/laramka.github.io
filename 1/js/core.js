$(document).ready(function(){

	$('#menu-btn').click(function(){  
   $('.nav-menu').slideToggle(700); 
   if ($(this).hasClass('not-active')) {
    $(this).addClass('is-active').removeClass('not-active');
   }else{
    setTimeout(function(){
     $('.is-active').addClass('not-active').removeClass('is-active')
    },600)   
   }  
  });

  $('.slider').slick({
   dots: false,
   autoplay: false,
   autoplaySpeed: 5000,
   arrows: false
 });

  $('.nav-menu .about').click(function(){
       $('html, body').animate({scrollTop:$('#about').position().top}, 2000);
  });
  $('.nav-menu .services').click(function(){
       $('html, body').animate({scrollTop:$('#services').position().top }, 2000);
  });
  $('.nav-menu .prices').click(function(){
       $('html, body').animate({scrollTop:$('#prices').position().top}, 2000);
  });


  $('.arrow-up').click(function(){
       $('html, body').animate({scrollTop:$('#home').position().top}, 2000);
  });

});