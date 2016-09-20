import $ from 'jquery';

$('.portfolio_link').on('click', function(){
  $('body').animate({scrollTop: $('.portfolio').offset().top}, 1500);
});

$('.about_link').on('click', function(){
  $('body').animate({scrollTop: $('.about').offset().top}, 1500);
})

$('.contact_link').on('click', function(){
  $('body').animate({scrollTop: $('.contact').offset().top}, 1500);
})

$('.title').on('click', function(){
  $('body').animate({scrollTop: '0px'}, 1500);
})

$('.top_button').on('click', function(){
  $('body').animate({scrollTop: '0px'}, 750, "swing");
})
if ($(window).scrollTop() < 300 || $(window).width() < 650){
  $('.top_button').hide();
}

$(window).scroll(function(){
  var top = $(window).scrollTop();
  var width = $(window).width();
  if (top < 300 || width < 650){
    $('.top_button').hide();
  }
  else {
    $('.top_button').show();
  }
})

$(window).resize(function(){
  var width = $(window).width();
  var top = $(window).scrollTop();
  if (width < 650 || top < 300){
    $('.top_button').hide();
  } else {
    $('.top_button').show();
  }
})

$(window).resize(function(){
  var width = $(window).width();
  if (width <= 550){
    $('.link_box').hide();
  } else {
    $('.link_box').show();
  }
})

$('.menu_tab').on('click', function(){
  $('.link_box').slideToggle();
})

if($(window).width() <= 550){
  $('.link').on('click', function(){
    $('.link_box').slideToggle();
  })
}
