jQuery(document).ready(function($) {

  $(".search-container").children("form").children("div").children(".js-form-submit").attr('value',"Search");
  $(".search-container").children("form").children("div").children(".js-form-submit").addClass('fa fa-search');

  $(".father-menu").children("ul").children(".father-menu").slideToggle(0,function() {});
  $(".father-menu").click(function(){
    $(this).children("ul").children(".father-menu").slideToggle(200,function() {});
  })

  var url = document.URL;
  var currentPage = url.substr(url.lastIndexOf('/') + 1);

  $(".father-menu").children("ul").children(".father-menu").each(function(){
    var currentUrl = $(this).children("a").attr("data-drupal-link-system-path");
    var lastPart = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
    if (lastPart == currentPage) {
      $(this).addClass("selected");
      $(this).parent().children().each(function(){
        $(this).toggle();
      });
    }
  })

});

function pressAndGo(url) {
  window.location.href = url;
}
