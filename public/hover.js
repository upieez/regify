$(document).ready(function() {
      $( ".card" ).hover(
      function() {
        $(this).addClass('shadow-lg').css('cursor', 'pointer');
      }, function() {
        $(this).removeClass('shadow-lg');
      }
    );
});

$(document).ready(function() {
      $( ".list-group-item" ).hover(
      function() {
        $(this).addClass('active').css('cursor', 'pointer');
      }, function() {
        $(this).removeClass('active');
      }
    );
});