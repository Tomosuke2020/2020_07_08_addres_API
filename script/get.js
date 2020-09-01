'use strict'
$(function(){
    //ID=btnをクリック
    $('#btn').on('click', function(){

        /**/

    //ajaxでjsonpを扱う
    $.ajax({
        url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
        dataType:'jsonp',

    }).done(function(data){
    
    console.log(data); //取得できてるのかの確認

    //データが取得できた時の処理を書く
    if(data.results){
        setData(data.results[0]); //関数を呼び出し、住所の情報を指定する。
    } else {
    alert('入力したものが間違っているんやね。');
    }
    //↑もしデータの結果が出なければアラートを入れる

    }).fail(function(data){
    alert('通信に失敗したでやんす。');
    //↑通信に失敗したとき。
    });


    //JSONからデータを取り出し、取得が成功した時の関数を作る
    function setData(data){
    //取得したデータを各HTML要素に代入

    $('#prefecture').val(data.address1); //ID都道府県
    $('#city').val(data.address2);   //市区町村
    $('#address').val(data.address3);    //町域名
}
    });//２番目のFunction
    });//最初のFunction


    document.getElementById('act').onclick = function(){
    window.alert('発火なう');
    console.log('引火なう');
}