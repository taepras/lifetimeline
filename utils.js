Utils = {
    startTypingEffect: function (node, textIn) {
      let i = 0;
      let text = textIn || node.getAttribute('data-text') || "Lorem ipsum typing effect!"; /* The text */
      let speed = 50; /* The speed/duration of the effect in milliseconds */
    
      function typeWriter(callback) {
        if (i < text.length) {
            node.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        } else {
          callback();
        }
      }
    
      return new Promise(function (resolve, reject) {
        typeWriter(resolve);
      });
    }
}
