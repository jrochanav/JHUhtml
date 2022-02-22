(function (window){

var helloSpeaker = {};


var speakWord = "Hello";
helloSpeaker.name = "x"

helloSpeaker.speak = function() {
  console.log(speakWord + " " + helloSpeaker.name);
}
window.helloSpeaker = helloSpeaker;
})(window)
