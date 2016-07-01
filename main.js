$(document).ready(function() {
    $('#myFiles').on('click', function(evt) {
        $('ol').addClass('hidden');
        $('#myFiles ol').removeClass('hidden');
        $('#myFiles ol').slideDown();

    });
    $('#cloud').on('click', function(evt) {
        $('ol').addClass('hidden');
        $('#cloud ol').removeClass('hidden');
    });
    $('#mail').on('click', function(evt){
      $('ol').addClass('hidden');
    });
    $('#signOut').on('click', function(evt){
      $('ol').addClass('hidden');
    });
});
