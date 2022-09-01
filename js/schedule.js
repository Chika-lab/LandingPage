
// class="detail" の処理
$(function() {
  $("#schedule").hide();
  $('.benefit-schedule').on('click', function() {
    if($("#schedule").is(":hidden")){
      $("#schedule").show(500);
      $(this).text("閉じる");
    }else{
      $("#schedule").hide(500);
      $(this).text("特典付与スケジュールを見る");
    }
  })
});