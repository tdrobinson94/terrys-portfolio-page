import $ from 'jquery';

$('.portfolio_link').on('click', function(){
  $('body, html').animate({scrollTop: $('.portfolio').offset().top}, 750);
});

$('.about_link').on('click', function(){
  $('body, html').animate({scrollTop: $('.about').offset().top}, 750);
})

$('.skills_link').on('click', function(){
  $('body, html').animate({scrollTop: $('.skills_title').offset().top - 100}, 750);
})

$('.contact_link').on('click', function(){
  $('body, html').animate({scrollTop: $('.contact').offset().top}, 750);
})

$('.title').on('click', function(){
  $('body, html').animate({scrollTop: '0px'}, 750);
})

$('.top_button').on('click', function(){
  $('body, html').animate({scrollTop: '0px'}, 750);
})

// $('.one').on('click', function(){
//   $('.one').height(400);
//   $('.one').width(800);
//   $('.two').height(300);
//   $('.two').width(300);
//   $('.three').height(300);
//   $('.three').width(300);
//   $('.four').height(300);
//   $('.four').width(300);
// })
// $('.two').on('click', function(){
//   $('.one').height(300);
//   $('.one').width(300);
//   $('.two').height(400);
//   $('.two').width(800);
//   $('.three').height(300);
//   $('.three').width(300);
//   $('.four').height(300);
//   $('.four').width(300);
// })
// $('.three').on('click', function(){
//   $('.one').height(300);
//   $('.one').width(300);
//   $('.two').height(300);
//   $('.two').width(300);
//   $('.three').height(400);
//   $('.three').width(800);
//   $('.four').height(300);
//   $('.four').width(300);
// })
// $('.four').on('click', function(){
//   $('.one').height(300);
//   $('.one').width(300);
//   $('.two').height(300);
//   $('.two').width(300);
//   $('.three').height(300);
//   $('.three').width(300);
//   $('.four').height(400);
//   $('.four').width(800);
// })
