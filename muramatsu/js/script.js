//---------フェードインここから---------//
$(function () {
    $(window).scroll(function () {
        $('.about-button-wrapper').each(function () {
            var elementTop = $(this).offset().top;//about-button-wrapper要素の位置取得
            var scroll = $(window).scrollTop();//どのくらいスクロールされたか取得
            var windowHeight = $(window).height();//ウィンドウの高さ取得
            if (scroll > elementTop - windowHeight + 200) {//がスクロール位置が(要素位置-ウィンドウ高さ+100)より大きければ
                $(this).addClass('scroll_in');//クラス追加する
            }
        });
    });
});

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

//---------ローティングここから---------//
const loading = document.querySelector('.loading');
window.addEventListener('load', () => {
    loading.classList.add('hide');
}, false);

//---------スクロールここから---------//
$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#000', '#71A0A0', '#000'],
        navigation: {
            'position': 'right',
            'tooltips': ['灰色', '緑色', '黒色']
        }
    });
});

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

//---------メインビジュアルテキストここから---------//
let Maintext = new Blotter.Text("Muramatsu Haruka", {
    family: "Antiqua Roman",
    size: 150,
    fill: "#FFF",
});
// 仕様するエフェクトを定義。
let Mainmaterial = new Blotter.LiquidDistortMaterial();
Mainmaterial.uniforms.uSpeed.value = 0.3;
Mainmaterial.uniforms.uVolatility.value = 0.04;
Mainmaterial.uniforms.uSeed.value = 6.02;
// 設定したテキストとエフェクトをセット。
let Mainblotter = new Blotter(Mainmaterial, { texts: Maintext });
let Mainscope = Mainblotter.forText(Maintext);
// 任意のDOMを用意
let Maintarget = document.getElementById('data-blotter');
Mainscope.appendTo(Maintarget);

//---------Aboutテキストここから---------//
let text = new Blotter.Text("About", {
    family: "serif",
    size: 80,
    fill: "#FFF"
});
// 仕様するエフェクトを定義。
let material = new Blotter.LiquidDistortMaterial();
material.uniforms.uSpeed.value = 0.6;
material.uniforms.uVolatility.value = 0.05;
material.uniforms.uSeed.value = 6.02;
// 設定したテキストとエフェクトをセット。
let blotter = new Blotter(material, { texts: text });
let scope = blotter.forText(text);
// 任意のDOMを用意
let target = document.getElementById('about-title');
scope.appendTo(target);

//---------Workテキストここから---------//
document.addEventListener("DOMContentLoaded", function() {
let Worktext = new Blotter.Text("Works", {
    family: "serif",
    size: 80,
    fill: "#FFF"
});
// 仕様するエフェクトを定義。
let Workmaterial = new Blotter.LiquidDistortMaterial();
Workmaterial.uniforms.uSpeed.value = 0.6;
Workmaterial.uniforms.uVolatility.value = 0.05;
Workmaterial.uniforms.uSeed.value = 6.02;
// 設定したテキストとエフェクトをセット。
let Workblotter = new Blotter(Workmaterial, { texts: Worktext });
let Workscope = Workblotter.forText(Worktext);
// 任意のDOMを用意
let Worktarget = document.getElementById('works-title');
Workscope.appendTo(Worktarget);
});

