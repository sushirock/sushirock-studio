$(function(){
    $("button").click(function(){
        $("#toggle ul").slideToggle(300);
    });

    
    
});





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





jQuery(function($) {
    $('main').bgSwitcher({
        images: ['01-02.jpg','02-KAMURA.jpg','03みいゆ.jpg'], // 切替背景画像を指定
	interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "blind", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
});