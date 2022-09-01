
// class="detail" の処理
$(function() {
  $("#box03").hide();
  $('.detail').on('click', function() {
    console.log('hello');
    if($("#box03").is(":hidden")){
      $("#box03").show(500);
      $(this).text("閉じる");
    }else{
      $("#box03").hide(500);
      $(this).text("詳しく見る");
    }
  })
});