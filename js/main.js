$(function(){
    $("#slider").slick({
        dots: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        draggable: false,
        touchThreshold: 5,
    });
    // $(".header-top__number").hover(
    //     function(){
    //       $(".menu__number-list").css('visibility', 'visible')
    //     },
    //     function(){
    //       $(".menu__number-list").css('visibility', 'hidden')
    //     }
    //   );
})