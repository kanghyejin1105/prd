$(document).ready(function(){

  $(".tab_bt>li").click(function(){
    let list = $(this).index();
    $(".tab_conts>li").stop().fadeOut();
    $(".tab_conts>li").eq(list).stop().fadeIn();
    $(".tab_bt>li").removeClass("on")
    $(this).addClass("on")
  });

  let auto = setInterval(function(){
    asd();
  },7000);

  $("#header .logo .menu").click(function(){
    $(".ham").stop().animate({"left":"0px"});
  });

  $("#header .ham .ham_gnb_home .close_bt").click(function(){
    $(".ham").stop().animate({"left":"-100%"});
  });

  $(".ham_gnb_gr").click(function(){
    if($(this).hasClass("active")){
        $(".ham_gnb_gr").removeClass("active").siblings().slideUp();
    }else{
        $(".ham_gnb_gr").removeClass("active").siblings().slideUp();
        $(this).addClass("active").siblings().slideDown();
    }
  });

  // $(".change_congroup .con_front .plus").click(function(){
  //   let li = $(".change_congroup").index();
  //   $(".con_back").
  // });


  function asd(){
    $(".main_img").stop().animate({"margin-top":"-200vh"},1000,function(){
        $(".main_img>li:first-child").appendTo(".main_img");
        $(".main_img").css({"margin-top":"-100vh"});
    });
  }
});