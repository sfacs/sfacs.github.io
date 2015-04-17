$(document).ready(function () {


  function printSentence(sentence){
    setTimeout(function() {
      $("body").html(body);
      $("body").animate({scrollTop:0},2000)
    }, sentence.length * 0.75 + 5000);


  for(var i = 0; i < sentence.length; i++){
    (function(index) {
      setTimeout(function() {
        if (sentence[index] == '\n') {
          $("body").html($("body").html() + "<br>"); 
        } else if (sentence[index] == ' ') {
          $("body").html($("body").html() + "&nbsp;"); 
        } else {
          $("body").html($("body").html() + sentence[index]); 
        }
        window.scrollTo(0,document.body.scrollHeight);
      }, 0.75 * i);
    })(i);
  }
}
var code = document.documentElement.outerHTML;
var body = $("body").html();

$("body").html("");
$("body").css("font-family", "courier");
printSentence(code);


});
