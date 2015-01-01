/* globals */
var plays = 0;
var int, int2, timeleft;
var bgflash;

function g(x) {
  return document.getElementById(x);
}
/* localStorage */
function get(x) {
  return localStorage.getItem (x);
}
function set(x, y) {
  localStorage.setItem (x, y);
}
function del(x) {
  localStorage.removeItem (x);
}
var nom1, nom2, curnom;

function onClick(e, f) {
  var hasTouch = 'ontouchstart' in window;
  if (hasTouch) {
    e.ontouchend = f;
  } else {
    e.onmouseup = f;
  }
}
document.ontouchmove = function(event) {
  event.preventDefault();
}

function getUserNum() {
  if (curnom == nom1)
    return 1;
  return 2;
}

function getRandomLine(lines) {
  return lines[(Math.random() * lines.length) | 0];
}

function getVerbs() {
  return get("v" + getUserNum());
}
function randomVerb() {
  return getRandomLine(get("v" + getUserNum()).trim().split(/\n/g));
}
function randomLloc() {
  return getRandomLine(get("l" + getUserNum()).trim().split(/\n/g));
}

function randomCom() {
  return getRandomLine(getLang().how);
}

function setColors(inverse) {
  if (inverse) {
    document.body.style.background = "";
    g('content').style.background = "";
    g('bottom').style.background = "#303030";
    g('verb').style.color = "white";
    g('lloc').style.color = "white";
    g('com').style.color = "white";
    g('quan').style.color = "yellow";
  } else {
    document.body.style.background = "white";
    g('content').style.background = "white";
    g('bottom').style.background = "white";
    g('verb').style.color = "black";
    g('lloc').style.color = "black";
    g('com').style.color = "black";
    g('quan').style.color = "green";
  }
}

function flashScreen(reset) {
  var inverse = false;
  if (reset) {
    setColors (true);
  } else {
    bgflash = setInterval (function() {
      inverse = !inverse;
      setColors (inverse);
    }, 500);
  }
}

function ding() {
  var audio = g('ding');
  try {
    audio.pause();
    audio.currentTime = 0;
  } catch ( e ) {
    /* do nothing */
  }
  try { /* vibrate if possible */
    window.navigator.vibrate(200);
  } catch ( e ) {}
  audio.play();
}

function clearIntervals() {
  clearInterval (int);
  clearInterval (int2);
  clearInterval (bgflash);
}

window.addEventListener("load", function() {
  try {
    var noms = get('noms').split(',');
    nom1 = noms[0];
    nom2 = noms[1];
    curnom = nom.innerHTML = nom1;
  } catch ( e ) {
    alert(e);
    nom1 = "A";
    nom2 = "B";
  }

  g('canvi').value = getString('canvi');
  g('jugar').value = getString('jugar');

  var running = false;
  var counter = 0

  onClick (g('jugar'), function() {
    if (running)
      return false;
    clearIntervals ();
    setColors (true);
    running = true;
    counter = 0;
    timeleft = 0;
    int = setInterval (function() {
      g('verb').innerHTML = randomVerb();
      g('lloc').innerHTML = randomLloc();
      g('com').innerHTML = randomCom();
      counter++;
      if (counter == 50) {
        clearInterval (int);
        running = false;
        timebase = +get("duration");
        timeleft = 0 | ((Math.random() * plays) + 5);
        timeleft += timebase;
        setTimeout(function() {
          g('quan').innerHTML = timeleft;
          int2 = setInterval(function() {
            timeleft--;
            g('quan').innerHTML = timeleft;
            if (+timeleft < 1) {
              plays++;
              clearInterval (int2);
              flashScreen ();
              ding();
            }
          }, 1000);
        }, 1000);
      }
    }, 50);

    g('verb').innerHTML = "";
    g('lloc').innerHTML = "";
    g('com').innerHTML = "";
    g('quan').innerHTML = "";
  });
  onClick (g('canvi'), function() {
    running = false;
    setColors (true);
    try {
      clearInterval (int);
    } catch ( e ) {}
    try {
      clearInterval (int2);
    } catch ( e ) {}
    try {
      clearInterval (bgflash);
    } catch ( e ) {}

    g('nom').innerHTML = curnom = (curnom == nom1) ? nom2 : nom1;
    g('verb').innerHTML = "";
    g('lloc').innerHTML = "";
    g('com').innerHTML = "";
    g('quan').innerHTML = "";
  });
  onClick (g('sortir'), function() {
    clearIntervals (); // avoid mobile safari crash :D
    location.href = "index.html";
  });
});
