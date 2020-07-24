$('header a').click(function() {
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop':position
  },'slow');
});


$('#open_2').hover(
  function() {
    $('#open_2').animate({
      'width': '350px',
      'font-size':'30px'
    },)
  },
  function() {
    $('#open_2').animate({
      'width': '300px',
      'font-size':'25px'
    },)
  }
)

$('#open').hover(
  function() {
    $('#open').animate({
      'width': '350px',
      'font-size':'30px'
    },)
  },
  function() {
    $('#open').animate({
      'width': '200px',
      'font-size':'24px'
    },)
  }
)


$(function() {
  
  const images = $('.slide img');

  let counter = 0;

  let index = 0;

  images.eq(index).css('display','block');

  $('#next').click(() => {
    images.eq(index).css('display','none');
    index = ++counter % images.length;
    images.eq(index).fadeIn();
  });

  $('#prev').click(() => {
    images.eq(index).css('display','none');
    index = --counter % images.length;
    images.eq(index).fadeIn();
  });




  
  

 

   

});