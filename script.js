document.addEventListener("keydown", function (event) {
  if (event.code == "KeyA") {
    let audio = new Audio("sound/noty-do.mp3");
    audio.play();
  } else if (event.code == "KeyS") {
    let audio = new Audio("sound/re.mp3");
    audio.play();
  } else if (event.code == "KeyD") {
    let audio = new Audio("sound/mi.mp3");
    audio.play();
  } else if (event.code == "KeyF") {
    let audio = new Audio("sound/fa.mp3");
    audio.play();
  } else if (event.code == "KeyG") {
    let audio = new Audio("sound/sol.mp3");
    audio.play();
  } else if (event.code == "KeyH") {
    let audio = new Audio("sound/lja.mp3");
    audio.play();
  } else if (event.code == "KeyJ") {
    let audio = new Audio("sound/si.mp3");
    audio.play();
  } else if (event.code == "KeyW") {
    let audio = new Audio("sound/fa.mp3");
    audio.play();
  } else if (event.code == "KeyE") {
    let audio = new Audio("sound/fa.mp3");
    audio.play();
  } else if (event.code == "KeyT") {
    let audio = new Audio("sound/fa.mp3");
    audio.play();
  } else if (event.code == "KeyY") {
    let audio = new Audio("sound/fa.mp3");
    audio.play();
  } else if (event.code == "KeyU") {
    let audio = new Audio("sound/fa.mp3");
    audio.play();
  } else {
    alert("Wrong button!");
  }
});