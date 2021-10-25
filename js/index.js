$(function () {
    var $menus = $('.wrap header a');
    var $sections = $('.wrap section');

    $menus.on('click', function (e) {
        var $target = $(e.target);
        var id = $target.attr('href');

        $menus.removeClass('active');
        $target.addClass('active');

        var $section = $('section[data-id="' + id + '"]');
        $('body, html').stop().animate(
            {
                scrollTop: $section.offset().top,
            },
            500
        );
    });

    var margin = 50;
    var active = $('a[href="#home"]');


    $(window).on('scroll', function (e) {
        $sections.each(function () {
            var $that = $(this);
            var posY = $that.offset().top;

            if (posY - window.scrollY <= margin) {
                active = $('a[href="' + $that.data('id') + '"]');
            }
        });

        if (!active.hasClass('active')) {
            $menus.removeClass('active');
            active.addClass('active');
        }
    });
    
    var typingBool = false;
        var typingIdx=0;
        var typingTxt = $(".typing-txt").text();
    
    typingTxt=typingTxt.split("");
    if(typingBool==false) {
        
        typingBool=true;
        
        var tyInt = setInterval(typing,100);
    }
    
    function typing(){
        if(typingIdx<typingTxt.length){
            
    $(".typing").append(typingTxt[typingIdx]);
            typingIdx++;
        } else{
            clearInterval(tyInt);
        }
    }
    
    //스크롤 연동 fade-in fade-out
  $(window).on("load", function () {
    function fade() {
      let animation_height = $(window).innerHeight() * 0.5;
      let ratio = Math.round((1 / animation_height) * 10000) / 10000;
      $(".fade").each(function () {
        let objectTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).innerHeight();
        if (objectTop < windowBottom) {
          if (objectTop < windowBottom - animation_height) {
            $(this).css({
              transition: "opacity 0.3s linear",
              transition: "left 0.3s linear",
              opacity: 1,
              left: "0px",
            });
          } else {
            $(this).css({
              transition: "opacity 0.5s linear",
              opacity: (windowBottom - objectTop) * ratio,
              transition: "left 0.5s linear",
              left: `${200 * (1 - (windowBottom - objectTop) * ratio)}px`,
            });
          }
        } else {
          $(this).css({
            opacity: 0,
            left: "200px",
          });
        }
      });
    }
    $(".fade").css({
      opacity: 0,
      left: "200px",
    });
    fade();

    $(window).scroll(function () {
      fade();
    });
  });
    
    /*popup*/
    $(document).ready(function () {
        $modal = $(".modal");

        $(".btn-popup01").click(function () {

            var imageName = $(this).attr('id');
            $modal.find('img').attr('src', './img/' + imageName + '-web.jpg');
            $modal.show();
            return false;
        });
        $(".dimmed").click(function () {
            $modal.hide();
        });
    });
    
});



