window.addEventListener("keydown", (e) => {
    let code = e.keyCode;

     let audio = document.querySelector(`audio[data-key= "${code}"]`);
     audio.currentTime = 0;
     audio.play();
});