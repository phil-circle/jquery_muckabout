$(document).ready(function() {
  $('a').click(function() {
    alert('thanks for visiting');
    event.preventDefault();
    $(this).hide('slow');
  });
  $('a').addClass("test");
});
