    $('.images').slick({
        infinite: true,
        dots:true,
        centerMode: true,
        centerPadding:'20%',
        autoplay:true,
        arrows: true,
    });

    $(function(){
        $(window).scroll(function (){
            $('.fadein1, .fadein2').each(function(){
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + windowHeight/3){
                    $(this).css('opacity','1');
                    $(this).css('transform','translateY(0)');
                }
            });
        });
    });


    $(function(){
      $('a[href^="#"]').click(function(){
        var adjust = 60;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    });
