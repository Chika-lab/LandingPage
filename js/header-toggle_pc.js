$(function() {
  $('.navbar-toggle').on('click', function() {
    $('.header_pc').toggleClass('active');
    $(".header-dropdown").toggle(100);
  });
});