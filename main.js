$(document).ready(function() {
  $('.tab').on('click', function(evt){
    $('ol').toggleClass('hidden');
    $('li').toggleClass('hidden');
    $('.counter').toggleClass('hidden');
  });

//   var $tab=$('.tab');
// $tab.on('click', function(){
//   $('.container').slideDown();
// });
});
