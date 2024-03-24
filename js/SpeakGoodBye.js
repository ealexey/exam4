(function(window){
var speakWord="Good Bye"
 var byeSpeaker={};
  byeSpeaker.speak=function (i){
    console.log(speakWord+" "+names[i]);
  }
  window.byeSpeaker=byeSpeaker
}(window))


