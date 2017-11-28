jQuery(document).ready(function($) {

  $(".search-container").children("form").children("div").children(".js-form-submit").attr('value',"Search");
  $(".search-container").children("form").children("div").children(".js-form-submit").addClass('fa fa-search');

  $(".father-menu").children("ul").children(".child").slideToggle(0,function() {});

  $(".father-menu").click(function(e){
    if (e.target !== this) {
      return;
    }else{
      $(this).children("ul").children(".child").slideToggle(200,function(){});
      if ( $(this).children('img').hasClass('is_rotate') ){
        $(this).children('img').removeClass('is_rotate');
        AnimateToNormal($(this).children('img'));
      }else {
        $(this).children('img').addClass('is_rotate');
        AnimateRotate(180,$(this).children('img'));
      }
    }
  })

  $('.child').click(function() {
    window.location.href = $(this).children('a').attr('href');
  });

  var url = document.URL;
  var currentPage = url.substr(url.lastIndexOf('/') + 1);

  $(".father-menu").children("ul").children(".child").each(function(){
    var currentUrl = $(this).children("a").attr("href");
    var lastPart = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
    if (lastPart == currentPage) {
      $(this).addClass("selected");
      $(this).parent().parent().children('img').addClass('is_rotate');
      AnimateRotate(180,$(this).parent().parent().children('img'));
      $(this).parent().children().each(function(){
        $(this).parent().parent().addClass('father-menu-with-secected-child');
        $(this).toggle();
      });
    }
  })

});

function AnimateToNormal($elem) {
    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    jQuery({deg: 180}).animate({deg: 0}, {
        duration: 500,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

function AnimateRotate(angle,$elem) {
    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    jQuery({deg: 0}).animate({deg: angle}, {
        duration: 500,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

function pressAndGo(url) {
  window.location.href = url;
}
