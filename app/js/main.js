$(document).ready(function () {
  $('.js-header-slider').slick();
        $('.js-review-slider').slick();
        $('.navigation-button').click(function(e){
  e.preventDefault();
  $('.navigation-list').toggleClass('opened');
});
});