// IIFE to avoid polluting global scope
(function(window) {
  // Create 'helloSpeaker' object
  var helloSpeaker = {};

  // Do not attach the speakWord variable to the 'helloSpeaker' object
  var speakWord = "Hello";

  // Attach 'speak' function to the 'helloSpeaker' object
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  // Expose the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);  // Pass 'window' object to make 'helloSpeaker' accessible in global scope
