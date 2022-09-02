// navbar-toggle の処理
$(function() {
 $('.navbar-toggle').click(function () {
  $('.header_sp').toggleClass('active');
  $('.header_sp .header-dropdown').slideToggle();
 });
});
