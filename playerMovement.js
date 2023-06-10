AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Add the condition to play sound
        var entity=document.querySelector("#sound2")
        entity.components.sound.playSound()


      });
    },
  });


  