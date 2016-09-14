import $ from 'jquery';

$('.portfolio_link').on('click', function(){
  $('body').animate({scrollTop: '900px'}, 250);
});

$('.about_link').on('click', function(){
  $('body').animate({scrollTop: '300px'}, 250);
})

$('.title').on('click', function(){
  $('body').animate({scrollTop: '0px'}, 250);
})

$('.top_button').on('click', function(){
  $('body').animate({scrollTop: '0px'}, 250);
})
