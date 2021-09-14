$(function() {
    var topBtn = $('#page-top');
    //ボタンを非表示にする
    // topBtn.hide();
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
    　　　　　　　//フェードインで表示
            topBtn.addClass('is_show');
        } else {
    　　　　　　　//フェードアウトで非表示
            topBtn.removeClass('is_show');
        }
    });
    //フッター手前でボタンを止める（ここを追加する）
    $(window).scroll(function () {
        var height = $(document).height(); //ドキュメントの高さ
        var position = $(window).height() + $(window).scrollTop(); //ページトップから現在地までの高さ
        var footer = $("#footer").height(); //フッターの高さ
        if ( height - position < footer ) {
            topBtn.css({
                position : "absolute",
            });
            topBtn.addClass('position');
        } else {
            topBtn.css({
                position : "fixed",
            });
            topBtn.removeClass('position');
        }
    });
    //スクロールしてトップへ戻る
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
