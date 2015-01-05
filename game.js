/* globals */
var plays = 0;
var to0, int, int2, timeleft;
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

function onClick(e, f, s) {
  var hasTouch = 'ontouchstart' in window;
  if (hasTouch) {
    if (s) {
      e.ontouchstart = f;
    } else {
      e.ontouchend = f;
    }
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
    g('verb').style.color = "white";
    g('lloc').style.color = "white";
    g('com').style.color = "white";
    g('quan').style.color = "yellow";
  } else {
    g('verb').style.color = "#E62EB8";
    g('lloc').style.color = "#E62EB8";
    g('com').style.color = "#E62EB8";
    g('quan').style.color = "#E62EB8";
  }
}

function flashScreen(reset) {
  var inverse = false;
  clearInterval (bgflash);
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
  /* vibrate if possible */
  var hasVibrate = get('vibrate') == "true";
  if (hasVibrate) {
    try {
      window.navigator.vibrate(200);
    } catch ( e ) {}
  }
  /* ding if selected */
  var hasSound = get('sound') == "true";
  if (hasSound) {
    var audio = g('ding');
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch ( e ) {
      /* do nothing */
    }
    audio.play();
  }
}

function clearIntervals() {
  try {
    clearTimeout (to0);
  } catch ( e ) {}
  try {
    clearInterval (int);
  } catch ( e ) {}
  try {
    clearInterval (int2);
  } catch ( e ) {}
  try {
    clearInterval (bgflash);
  } catch ( e ) {}
  flashScreen (true);
  setColors (true);
}

window.addEventListener("load", function() {
  g('bubble').innerHTML = getString ('bubble');
  g('bubble2').innerHTML = getString ('bubble2');
  g('rating').style.visibility = 'hidden';
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
  function disablePlayButton() {
    g('bubble').style.visibility = 'hidden';
    g('bubble2').style.visibility = 'hidden';
    g('rating').style.visibility = 'hidden';
    g('jugar').style.position = 'relative';
    g('jugar').style.top = '4px !important';
    g('jugar').style['color'] = "#a0a0a0";
    g('jugar').style['background-color'] = "#808080";
    g('jugar').style['box-shadow'] = '0px 0px 0px #B379B3';
    g('quan').style.visibility = 'visible';
    running = true;
  }
  function activatePlayButton() {
    g('quan').style.visibility = 'hidden';
    g('jugar').style['position'] = '';
    g('jugar').style['top'] = '0px !important';
    g('jugar').style['color'] = "black";
    g('jugar').style['background-color'] = "#c0c0c0";
    g('jugar').style['box-shadow'] = '0px 4px 0px #B379B3';
    running = false;
  }
  var doNext = false;

  onClick (g('jugar'), function() {
    if (doNext) {
      doCanvi ();
      doNext = false;
    } else {
      setStars(0);
    }
    if (running)
      return false;
    g('jugar').value = getString ('jugar_shuffle');
    clearIntervals (); // avoid mobile safari crash :D
    disablePlayButton();
    setColors (true);
    counter = 0;
    timeleft = -1;
    int = setInterval (function() {
      g('verb').innerHTML = randomVerb();
      g('lloc').innerHTML = randomLloc();
      g('com').innerHTML = randomCom();
      counter++;
      if (counter == 30) {
        activatePlayButton();
        clearIntervals ();
        timebase = +get("duration");
        timeleft = (Math.random() * plays) | 0;
        if (timebase < 1) {
	  set("duration", "40");
          timebase = 40;
        }
        timeleft += timebase;
        g('quan').style.visibility = 'visible';
        g('quan').innerHTML = timeleft;
        timeleft--;
        to0 = setTimeout(function() {
          clearInterval (int2);
          g('quan').innerHTML = timeleft;
          int2 = setInterval(function() {
            timeleft--;
            if (timeleft < 0) {
              clearInterval (int2);
              timeleft = -1;
              plays++;
	      g('quan').style.visibility = 'hidden';
              g('rating').style.visibility = 'visible';
              doNext = true;
            } else {
              if (timeleft == 0) {
                ding();
                flashScreen ();
                activatePlayButton();
                g('jugar').value = getString ('jugar_next');
                g('quan').style.visibility = 'hidden';
              } else {
                g('quan').innerHTML = timeleft;
              }
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
  function doCanvi() {
    setStars(0);
    clearIntervals ();
    activatePlayButton();
    g('jugar').value = getString ('jugar');
    g('rating').style.visibility = 'hidden';

    g('nom').innerHTML = curnom = (curnom == nom1) ? nom2 : nom1;
    g('verb').innerHTML = "";
    g('lloc').innerHTML = "";
    g('com').innerHTML = "";
    g('quan').innerHTML = "";
  }
  onClick (g('canvi'), function() {
    doNext = false;
    doCanvi ();
  });
  onClick (g('sortir'), function() {
    clearIntervals (); // avoid mobile safari crash :D
    location.href = "index.html";
  });

  function setStars(n) {
    for (i = 1; i < n + 1; i++) {
      g('star' + i).src = 'img/star_gold.png';
    }
    for (; i < 6; i++) {
      g('star' + i).src = 'img/star_grey.png';
    }
  }
  onClick(g('star1'), function() {
    setStars (1);
  }, true);
  onClick(g('star2'), function() {
    setStars (2);
  }, true);
  onClick(g('star3'), function() {
    setStars (3);
  }, true);
  onClick(g('star4'), function() {
    setStars (4);
  }, true);
  onClick(g('star5'), function() {
    setStars (5);
  }, true);

});
