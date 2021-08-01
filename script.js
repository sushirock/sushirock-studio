




$(function(){
  var count = $("#slide li").length;
  
  var current = 1;
  
    var next = 2;
    
    var interval = 4000;
    
    var duration = 1000;
    
    var timer;
    
    $("#slide li:not(:first-child)").hide();
    
    timer = setInterval(slideTimer, interval);
    
    function slideTimer(){
      $("#slide li:nth-child(+" + current + ")").fadeOut(duration);
      
      $("#slide li:nth-child(+" + next + ")").fadeIn(duration)
      
      current = next;
      
      next = ++next;
      
      if(next > count){
        next = 1;
      }
    }
  });
  
  
  
  $(function() {
    $(window).scroll(function() {
      $(".artist").each(function() {
        var scroll = $(window).scrollTop(); 
        var blockPosition = $(this).offset().top; 
        var windowHeihgt = $(window).height(); 
        if (scroll > blockPosition - windowHeihgt + 300) {
          $(this).addClass("fadein");
        }
      });
    });
  });
  
  
  $(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
  
  
  
  
  var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 1000,//時間指定(1000＝1秒)
    strokeWidth: 0.2,//進捗ゲージの太さ
    color: '#555',//進捗ゲージのカラー
    trailWidth: 0.2,//ゲージベースの線の太さ
    trailColor: '#bbb',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定				
      style: {//天地中央に配置
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '0',
        margin: '-30px 0 0 0',//バーより上に配置
        transform:'translate(-50%,-50%)',
        'font-size':'1rem',
        color: '#fff',
      },
      autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
  });
  
  //アニメーションスタート
  bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
  });  
  
  
  $(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
      
      $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
      
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() { 
      //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    


    $(function(){
        $("button").click(function(){
            $("#toggle ul").slideToggle(300);
        });
    
        
        
    });
    });



    $(".openbtn").click(function () {//ボタンがクリックされたら
      $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
        $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
    });
    
    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
        $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
    });


    
// $(function () {
//   $(window).scroll(function () {
//     $('.artist-image img').each(function () {
//       const targetElement = $(this).offset().top;
//       const scroll = $(window).scrollTop();
//       const windowHeight = $(window).height();
//       if (scroll > targetElement - windowHeight) {
//         $(this).addClass('view');
//       }
//     });
//   });
// });