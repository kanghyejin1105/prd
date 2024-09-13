$(document).ready(function(){
  let i = 0;
  let count = $(".main_img>li").length;

  let autoSlide = setInterval(function(){
    if(i == count-1){
      i=0;
    }else{
      i++;
    }
      dongwoo()
  },5000);

  $(".main_img").mouseenter(function(){
    clearInterval(autoSlide);  
    });
    $(".main_img").mouseleave(function(){
      autoSlide = setInterval(function(){
        if(i == count-1){
          i=0;
        }else{
          i++;
        }
          dongwoo()
      },5000);
    });


  $(".nav>li").click(function(){
    i = $(this).index();
      dongwoo();
  });


function dongwoo(){
  $(".nav>li").removeClass("in");
  $(".nav>li").eq(i).addClass("in");
  $(".main_img>li").stop().fadeOut(100);
  $(".main_img>li").eq(i).stop().fadeIn(100);
}


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

  $(".ham_gnb_home>li:first-child").click(function(){
    if($(this).hasClass("run")){
      $(".ham_gnb_home>li:first-child").removeClass("run");
    }else{
      $(".ham_gnb_home>li:first-child").removeClass("run");
      $(this).addClass("run");
    }
  });

  $(".change_group>li").click(function(){
    if($(this).hasClass("acco")){
      $(".change_group>li").removeClass("acco");
    }else{
      $(".change_group>li").removeClass("acco");
      $(this).addClass("acco");
    }
  });

  $(".tab_bt>li").click(function(){
    let list = $(this).index();
    $(".tab_conts>li").stop().fadeOut();
    $(".tab_conts>li").eq(list).stop().fadeIn();
    $(".tab_bt>li").removeClass("on")
    $(this).addClass("on")
  });
});