$(function() {
  $('.navbar-toggle').on('click', function() {
    $('.header_sp').toggleClass('active');
    $(".header-dropdown").toggle(100);
  });
});
