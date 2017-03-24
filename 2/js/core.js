$(document).ready(function(){

$('.slider').slick({
   dots: true,
   autoplay: false,
   autoplaySpeed: 5000,
   arrows: false
 });
	
	$('.nav-menu .features').click(function(){
       $('html, body').animate({scrollTop:$('#features').position().top}, 2000);
  });
  $('.nav-menu .works').click(function(){
       $('html, body').animate({scrollTop:$('#works').position().top}, 2000);
  });
  $('.nav-menu .contacts').click(function(){
       $('html, body').animate({scrollTop:$('#contacts').position().top}, 2000);
  });

  $('#contact').validate({
		validClass: "active",
		rules: {
			name : {
				required: true
			},
			email : {
				required: true
			},
			message : {
				required: true
			}
		},
		messages: {
			name : {
				required : false
			},
			email : {
				required : false,
				email : false
			},
			message : {
				required : false
			}
		}
	});
});

