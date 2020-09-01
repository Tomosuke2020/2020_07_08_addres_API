//JavaScript

'use strict'
//ボタンをクリックした時の反応※onclickではなく2回以上の処理なため、listenerを用いる
document.getElementById('btn').addEventListener('click' ,function(){
    document.addEventListener("DOMContentLoaded" , function(){
        var zip = document.getElementById('zipcode').value;

//script要素を生成 ※htmlのIDを取得※：ValueがID内の値の取得

//変数zipにzipcodeと名前を付ける
    var zip = zipcode;

//zip取得チェック
    console.log(zip , 'zipcode内に記述された値を出力した');
}

//ajaxを定義していく。
//var search = url : https://zipcloud.ibsnet.co.jp/api/search;

/*
$.ajax({
    url: "http://zipcode.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
    dataType : 'jsonp',
    }).done(function(data){
    console.log(data); //取得できているかの確認
    });
*/

/*
//JavaScriptの繋がっているのかのテスト
document.getElementById('act').onclick = function(){
    console.log('引火なう');
    window.alert('発火なう');
}
*/

/*
function newFunction(zip) {
    document.getElementById('city');
    var zip = document.createElement('city');
    zip.body.appendChild(p);
    return zip;
}*/