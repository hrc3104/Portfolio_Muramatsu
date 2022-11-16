//---------カーソルここから---------//
var cursor = document.getElementById('cursor'); 
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

var link = document.querySelectorAll('a');// リンクにホバーした時にクラス追加、離れたらクラス削除
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');   
    });
}

//---------水滴ここから---------//
    $('#section1,#section2').ripples({
        resolution: 512,   //解像度
        dropRadius: 20,    //ドロップサイズ
        perturbance: 0.04, //屈折量
    });

//---------Contactスクロールここから---------//
(function ($) {
    'use strict';
    let scrollPosi = 0;
    $(window).scroll(function () {
    scrollPosi = $(document).scrollTop();
    $('#para1').stop(true, true).animate({
        'background-position-y': -scrollPosi / 3 + 'px'
    }, 100);
});
})

//---------Aboutテキストここから---------//
let text = new Blotter.Text("About", {
    family : "serif",
    size : 80,
    fill : "#FFF"
});
// 仕様するエフェクトを定義。
let material = new Blotter.LiquidDistortMaterial();
material.uniforms.uSpeed.value = 0.6;
material.uniforms.uVolatility.value = 0.05;
material.uniforms.uSeed.value = 6.02;
// 設定したテキストとエフェクトをセット。
let blotter = new Blotter(material, { texts : text });
// ほぼおまじない。
let scope = blotter.forText(text);
// 任意のDOMを用意
let target = document.getElementById('about-title');
scope.appendTo(target);

//---------About textここから---------//
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elementTop = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
        if (scroll > elementTop - windowHeight + 100){
            $(this).addClass('scrollin');
        }
    });
});
});