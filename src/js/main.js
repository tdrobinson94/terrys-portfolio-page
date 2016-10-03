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
  $('body').animate({scrollTop: '0px'}, 750);
})

// $('.menu_tab').click(function(){
//   $('.link_box').slideToggle();
// })
function menuTab(){
  if ($(window).width() <= 550){
    $('.menu_tab').click(function(){
      $('.link_box').slideToggle();
    })
    $('.link').click(function(){
      $('.link_box').slideUp();
    })
    $('.title').click(function(){
      $('.link_box').slideUp();
    })
  }
}
$(window).resize(menuTab());
