$(document).ready(function () {

  var intro ="<-- Oh hi! I assume you are here to checkout my resume. Let's code one real fast shall we? -->\n";
  var epilogue = "\n<-- Well that was fast. Let's render the HTML now, let's see how it looks... -->\n";

  function printSentence(script, speed, renderAtTheEnd){

    delay = 0;
    for (var n = 0; n < script.length; n++) {

      sentence = script[n].text;
      speed = script[n].speed;
      console.log(sentence);
      console.log(speed);
      console.log();


      for(var i = 0; i < sentence.length; i++){
        (function(index, sentence) {
          setTimeout(function() {
            if (sentence[index] == '\n') {
              $("body").html($("body").html() + "<br>"); 
            } else if (sentence[index] == ' ') {
              $("body").html($("body").html() + "&nbsp;"); 
            } else {
              $("body").html($("body").html() + sentence[index]); 
            }
            window.scrollTo(0,document.body.scrollHeight);
          }, speed * i + delay);
        })(i, sentence);
      }
      delay += sentence.length * speed;
    }
      setTimeout(function() {
        $("body").html(body);
        $("body").animate({scrollTop:0},2000)
      },  delay);


}
var code = document.documentElement.outerHTML;
var body = $("body").html();

$("body").html("");
$("body").css("font-family", "courier");

var script = [{text: intro, speed : 100}, {text: code, speed:0.75}, {text: epilogue, speed:100}];
printSentence(script);


});
