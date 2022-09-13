$(function() {
  $('.navbar-toggle_pc').on('click', function() {
    $('.header_pc').toggleClass('active');
    $(".header-dropdown_pc").toggle(100);
  });

  $('.header-dropdown_pc > li').on('click', function() {
    $('.header_pc').removeClass('active');
    $(".header-dropdown_pc").hide(200);
  })
});
