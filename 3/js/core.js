
$( function() {
  $( ".item-1 #slider-range-min" ).slider({
    range: "min",
    value: 12000,
    min: 3866,
    max: 51546,
    slide: function( event, ui ) {
      $( ".item-1 #amount" ).val(ui.value );
    }
  });
  $( ".item-1 #amount" ).val($( ".item-1 #slider-range-min" ).slider( "value" ) );

  $('.item-1 input#amount').change(function(){
    var value=$('.item-1 input#amount').val();
    $(".item-1 #slider-range-min").slider("value", value);
  });

  ////////////////////


  $( ".item-2 #slider-range-min" ).slider ({
    range: "min",
    value: 5300,
    min: 2688,
    max: 9000,
    slide: function( event, ui ) {
      $( ".item-2 #amount" ).val(ui.value );
    }
  });
  $( ".item-2 #amount" ).val($( ".item-2 #slider-range-min" ).slider( "value" ) );

  $('.item-2 input#amount').change(function(){
    var value=$('.item-2 input#amount').val();
    $(".item-2 #slider-range-min").slider("value", value);
  });


  ////////////

  $( ".item-3 #slider-range-min" ).slider({
    range: "min",
    value: 12,
    min: 9,
    max: 15,
    slide: function( event, ui ) {
      $( ".item-3 #amount" ).val(ui.value );
    }
  });
  $( ".item-3 #amount" ).val($( ".item-3 #slider-range-min" ).slider( "value" ) );

  $('.item-3 input#amount').change(function(){
    var value=$('.item-3 input#amount').val();
    $(".item-3 #slider-range-min").slider("value", value);
  });

});	



$(document).ready(function() {

	$('.slider').slick({
	   dots: true,
	   autoplay: false,
	   autoplaySpeed: 5000,
	   arrows: false
 	});
});

$(document).ready(function(){
    $(".tabs > div").click(function(){
    if (!($(this).hasClass("active"))){
      var name = $(this).attr("class");
      $(".bottom.clearfix").hide();
      $(".bottom.clearfix." + name).show();
      $(".tabs > div").removeClass("active");
      $(this).addClass("active"); 
    }
  })
});