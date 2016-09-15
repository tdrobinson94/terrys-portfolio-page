import $ from 'jquery';

$('.portfolio_link').on('click', function(){
  $('body').animate({scrollTop: $('.portfolio').offset().top}, 750);
});

$('.about_link').on('click', function(){
  $('body').animate({scrollTop: $('.about').offset().top}, 750);
})

$('.contact_link').on('click', function(){
  $('body').animate({scrollTop: $('.contact').offset().top}, 750);
})

$('.title').on('click', function(){
  $('body').animate({scrollTop: '0px'}, 750);
})

$('.top_button').on('click', function(){
  $('body').animate({scrollTop: '0px'}, 750, "swing");
})

$(window).scroll(function(){
  var top = $(window).scrollTop();
  if (top > 300){
    $('.top_button').show();
  }
  else {
    $('.top_button').hide();
  }
})
