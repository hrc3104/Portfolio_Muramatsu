//---------メインテキストここから---------//
function RollAnimeControl() {
    $('.rollAnime').each(function () {// rollAnimeにrollというクラス名を付ける定義
        var elemPos = $(this).offset().top - 50;//移動先の位置を指定
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var childs = $(this).children();  //rollAnimeの子要素を取得。今回の場合だと名前
        if (scroll >= elemPos - windowHeight) {
            $(childs).each(function (i) {   //子要素を1つ1つ処理をおこなう
            if (i < 10) {         //10未満の場合
            $(this).css("transition-delay","."+i+"s");  //子要素にcsstransition-delay(変化開始までの時間)を追加
            }else {             //10以上の場合
                var n = i / 10;       //ミリ秒指定なので10で割る
                $(this).css("transition-delay",n+"s");  //子要素にcsstransition-delayを追加
            }
            });
            $(this).addClass("roll"); //rollというアニメーションクラスを付与
    
        } else {
            $(childs).each(function () {    //子要素を1つ1つ処理をおこなう
            $(this).css("transition-delay","0s");//子要素にcsstransition-delayの秒を0とする
            });
            $(this).removeClass("roll");//rollというアニメーションクラスを除去
        }
        });
    }

  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        //spanタグを追加する
        var element = $(".rollAnime");
        element.each(function () {
        var text = $(this).text();
        var textbox = [];
        text.split('').forEach(function (t, i) {
            if (t !== " ") {
            if (i < 10) {
                textbox += '<span style="transition-delay:.' + i + 's;">' + t + '</span>';
            } else {
                var n = i / 10;
                textbox += '<span style="transition-delay:' + n + 's;">' + t + '</span>';
            }
            } else {
            textbox += t;
            }
        });
        $(this).html(textbox);
        });
    
        RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
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
const loading = document.querySelector( '.loading' );
window.addEventListener( 'load', () => {
    oading.classList.add( 'hide' );
}, false );

//---------スクロールここから---------//
$(document).ready(function() {
    $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3'],
    sectionsColor: ['#000', '#5c9291', '#000'],
    navigation: {
        'position': 'right',
        'tooltips': ['緑色', '桃色', '黒色']
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
// テキストの設定です。詳細なプロパティは公式のドキュメントにあります。
let Maintext = new Blotter.Text("HaruKa Muramatsu", {
    family : "serif",
    size : 120,
    fill : "#FFF",
});
// 仕様するエフェクトを定義。
let Mainmaterial = new Blotter.LiquidDistortMaterial();
Mainmaterial.uniforms.uSpeed.value = 0.5;
Mainmaterial.uniforms.uVolatility.value = 0.04;
Mainmaterial.uniforms.uSeed.value = 6.02;
// 設定したテキストとエフェクトをセット。
let Mainblotter = new Blotter(Mainmaterial, { texts : Maintext });
// ほぼおまじない。
let Mainscope = Mainblotter.forText(Maintext);
// 任意のDOMを用意
let Maintarget = document.getElementById('data-blotter');
Mainscope.appendTo(Maintarget);

//---------Aboutテキストここから---------//
// テキストの設定です。詳細なプロパティは公式のドキュメントにあります。
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

//---------Workテキストここから---------//
// テキストの設定です。詳細なプロパティは公式のドキュメントにあります。
let Worktext = new Blotter.Text("Works", {
    family : "serif",
    size : 80,
    fill : "#FFF"
});
// 仕様するエフェクトを定義。
let Workmaterial = new Blotter.LiquidDistortMaterial();
Workmaterial.uniforms.uSpeed.value = 0.6;
Workmaterial.uniforms.uVolatility.value = 0.05;
Workmaterial.uniforms.uSeed.value = 6.02;
// 設定したテキストとエフェクトをセット。
let Workblotter = new Blotter(Workmaterial, { texts : Worktext });
// ほぼおまじない。
let Workscope = Workblotter.forText(Worktext);
// 任意のDOMを用意
let Worktarget = document.getElementById('work-title');
Workscope.appendTo(Worktarget);
