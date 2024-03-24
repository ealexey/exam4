(function(window){
var speakWord="Hello";
    var helloSpeaker={};
  helloSpeaker.speak=function (i){
    console.log(speakWord+" "+names[i]);
  }
  window.helloSpeaker=helloSpeaker;
}(window))