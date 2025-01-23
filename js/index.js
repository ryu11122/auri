$(function () {
    $('.main1 .swiper-slide>div>a').hover(function () {
        $('.swiper-slide').toggleClass('on')
    })
    $('.main2>ul>li>a').hover(function () {
        $(this).toggleClass('on')
    })
    $('.main3-box').hover(function () {
        $('.main3-box').toggleClass('off')
        $(this).toggleClass('on')
        $(this).removeClass('off')
    })
    $('.footer>.footer-top>div>button').click(function () {
        $('.footer>.footer-top>div>ul , .footer>.footer-top>div>button').toggleClass('on')
    })
$(".test").mouseenter(function(){
   $(".test2").attr({src:"img/navertvlogo.png"});
})
$(".test").mouseleave(function(){
   $(".test2").attr({src:"img/navertvlogo2.png"});
})

$(".test3").mouseenter(function(){
   $(".test4").attr({src:"img/Untitled-2.png"});
})
$(".test3").mouseleave(function(){
   $(".test4").attr({src:"img/Untitled-3.png"});
})

})