window.addEventListener('DOMContentLoaded', function(){

  $('h1').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    },400);
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    },300);
  });

  $('.mainvisual a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    },300);
  });


  $('.menu-icon').click(function(){
        $('#slide-menu').toggleClass('active');
        //メニューを表示
        if($('#slide-menu').hasClass('active')) {
          // ハンバーガーアイコンを管理する
          $('.fa-bars').hide();
          $('.fa-times').show();
          //オーバーレイを管理する
          $('.overlay').addClass('open');
        //メニューを非表示
        }else {
          // ハンバーガーアイコンを管理する
          $('.fa-times').hide();
          $('.fa-bars').show();
          //オーバーレイを管理する
          $('.overlay').removeClass('open');
        }
      });

  //オーバーレイをクリックしてメニューを非表示
  $('.overlay').click(function(){
    if($('#slide-menu').hasClass('active')) {
      //メニューを非表示
      $('#slide-menu').removeClass('active');
      //アイコンを変更
      $('.fa-times').hide();
      $('.fa-bars').show();
      //オーバーレイを非表示
      $('.overlay').removeClass('open');
      $('.open').css('transition-duration', '5s')
    }
  });


  //実績 ホバーイベント
  var hoverIn = function() {
    $(this).children('.color-overlay').addClass('active');
    $(this).children('.description').fadeIn();
  }

  var hoverOut = function() {
    $(this).children('.color-overlay').removeClass('active');
    $(this).children('.description').fadeOut();
  }

  $('.works li').hover(hoverIn, hoverOut);

});
