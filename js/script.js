$(document).ready(function () {
 
  function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
      window.scrollBy(0,-50);
      timeOut=setTimeout('scrollToTop()',50);
    }
    else clearTimeout(timeOut);
  }


  function printSentence(sentence){
    setTimeout(function() {
      $("body").html(body);
      scrollToTop();
    }, sentence.length * 1 + 5000);


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
      }, 1 * i);
    })(i);
  }
}
var code = document.documentElement.outerHTML;
var body = $("body").html();

$("body").html("");
$("body").css("font-family", "courier");
printSentence(code);


});
