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

if ($(window).width() < 650){
  $('.top_button').hide();
}
