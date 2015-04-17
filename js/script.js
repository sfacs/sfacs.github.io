$(document).ready(function () {

  var intro ="<-- Oh, hi! I assume you're here to check out my resume. Let's code one real fast shall we? -->                      \n";
  var epilogue = "\n<-- Et voilà! Let's render the HTML now.  -->                                       \n";

  function printSentence(script, speed, renderAtTheEnd){

    delay = 0;
    for (var n = 0; n < script.length; n++) {

      sentence = script[n].text;
      speed = script[n].speed;

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

  var script = [{text: intro, speed : 100}, {text: code, speed:1.5}, {text: epilogue, speed:100}];
  printSentence(script);


});
