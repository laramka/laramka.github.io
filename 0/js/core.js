$(document).ready(function(){
	new WOW().init();
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		asNavFor: '.nav-slider',
		responsive: [
	   	{
		      breakpoint: 720,
		      settings: {
		      	arrows: false,
	      	}
	    	}
	   ]
	});
	$('.nav-slider').slick({
		slidesToShow: 12,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.main-slider',
		focusOnSelect: true,
		centerPadding: 0,
		responsive: [
	   	{
		      breakpoint: 1200,
		      settings: {
		      	slidesToShow: 12,
	      	}
	    	},{
	      	breakpoint: 1024,
	      	settings: {
	        		slidesToShow: 10,
	        		centerMode: true,
	      	}
	    	},{
	      	breakpoint: 860,
	      	settings: {
	        		slidesToShow: 8,
	        		centerMode: true,
	      	}
	    	},{
	      	breakpoint: 720,
	      	settings: {
	        		slidesToShow: 7,
	        		centerMode: true,
	      	}
	    	},{
	      	breakpoint: 620,
	      	settings: {
	        		slidesToShow: 6,
	        		centerMode: true,
	      	}
	    	},{
	      	breakpoint: 540,
	      	settings: {
	        		slidesToShow: 5,
	        		centerMode: true,
	      	}
	    	},{
	      	breakpoint: 460,
	      	settings: {
	        		slidesToShow: 4,
	        		centerMode: true,
	      	}
	    	},{
	      	breakpoint: 390,
	      	settings: {
	        		slidesToShow: 4,
	        		centerMode: true,
	      	}
	    	}
	   ]
	});
	$('.tabs-content > .tab-content').each(function(index){
		if (index != 0){
			$(this).css('display','none');
		}
	});
	$('.tab').click(function(){
		$('.tabs .tab').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').css('display','none');
		$('#tab-content-'+ $(this).attr('data-tabn')).css('display','block');
	});

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

});