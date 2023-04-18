function playAudio(audioID) {
    if (audioID === "q" || audioID === "Q") {
    document.getElementById("display").innerHTML = "Heater 1";
  } else if (audioID === "w" || audioID === "W"){
    document.getElementById("display").innerHTML = "Heater 2";
  } else if (audioID === "e" || audioID === "E"){
    document.getElementById("display").innerHTML = "Heater 3"; 
  } else if (audioID === "a" || audioID === "A"){
    document.getElementById("display").innerHTML = "Heater 4";
  } else if (audioID === "s" || audioID === "S"){
    document.getElementById("display").innerHTML = "Clap";
  }  else if (audioID === "d" || audioID === "D"){
    document.getElementById("display").innerHTML = "Open-HH";
  } else if (audioID === "z" || audioID === "Z"){
    document.getElementById("display").innerHTML = "Kick-n'-Hat";
  } else if (audioID === "x" ||  audioID === "X"){
    document.getElementById("display").innerHTML = "Kick";
  } else if (audioID === "c" || audioID === "C"){
    document.getElementById("display").innerHTML = "Closed-HH";
  } 
    
   const audio = document.getElementById(audioID);
    audio.play();
  }

window.document.onkeyup = function (event) { 
  let keystroke = event.key
  if ( keystroke === "q" || keystroke === "Q") {
    playAudio("Q");
  } else if (keystroke === "w" || keystroke === "W"){
    playAudio("W");
  } else if (keystroke === "e" || keystroke === "E"){
    playAudio("E"); 
  } else if (keystroke === "a" || keystroke === "A"){
    playAudio("A");
  } else if (keystroke === "s" || keystroke === "S"){
    playAudio("S");
  }  else if (keystroke === "d" || keystroke === "D"){
    playAudio("D");
  } else if (keystroke === "z" || keystroke === "Z"){
    playAudio("Z");
  } else if (keystroke === "x" || keystroke === "X"){
    playAudio("X");
  } else if (keystroke === "c" || keystroke === "C"){
    playAudio("C");
 }
}