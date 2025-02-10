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
$(".ttt1").mouseenter(function(){
   $(".tttt1").attr({src:"img/t1.png"});
})
$(".ttt1").mouseleave(function(){
   $(".tttt1").attr({src:"img/tt1.png"});
})
$(".ttt2").mouseenter(function(){
   $(".tttt2").attr({src:"img/t2.png"});
})
$(".ttt2").mouseleave(function(){
   $(".tttt2").attr({src:"img/tt2.png"});
})
$(".ttt3").mouseenter(function(){
   $(".tttt3").attr({src:"img/t3.png"});
})
$(".ttt3").mouseleave(function(){
   $(".tttt3").attr({src:"img/tt3.png"});
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