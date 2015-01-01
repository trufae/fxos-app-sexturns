/* DOM */
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
function onClick(e, f) {
  //  e.onclick = f;
  var hasTouch = 'ontouchstart' in window;
  if (hasTouch) {
    e.ontouchend = f;
  } else {
    e.onmouseup = f;
  }
}
// TODO: Sound, options:
//   silence
//   flash
//   flash+vibrator
//   sound
//   sound+flash
//   sound+vibrator
//   sound+flash+vibrator
document.ontouchmove = function(event) {
  event.preventDefault();
}

function loadLanguage() {
  g('text_title').innerHTML = getString ('configure');
  g('idioma').innerHTML = getString ('idioma');
  g('text_duration').innerHTML = getString ('duration');
  g('audio').innerHTML = getString ('audio');
  g('datareset').value = getString ('reset');
  g('desar').value = getString ('save');
  if (get('sound') == "true") {
    g('sound').value = getString('withsound');
  } else {
    g('sound').value = getString ('silence');
  }
}

window.addEventListener("DOMContentLoaded", function() {
  /* load fields data */
  try {
    var d = get('duration');
    g('duration').value = d ? "" + d : "40";
    g('lang').selectedIndex = ["ca", "en", "es"].indexOf (get('lang'));

  } catch ( e ) {}
  g('lang').onchange = function() {
    var oldlang = get('lang');
    set('lang', g('lang').value);
    loadLanguage();
    set('lang', oldlang);
  }
  loadLanguage ();
  /* add button callbacks */
  try {
    onClick (g('datareset'), function() {
      if (confirm (getString('resetconfirm'))) {
        del('noms');
        del('duration');
        del('sound');
        del('v1'); del('v2');
        del('l1'); del('l2');
        location.reload();
      }
    });
  } catch ( e ) {
    alert(e);
  }
  onClick (g('sortir'), function() {
    location.href = "index.html";
  });
  onClick (g('sound'), function() {
    if (g('sound').value == getString ('silence')) {
      g('sound').value = getString ('withsound');
    } else {
      g('sound').value = getString ('silence');
    }
  });
  onClick (g('desar'), function() {
    set('sound', (g('sound').value == getString('silence')) ? "false" : "true");
    set('duration', g('duration').value);
    var oldlang = get('lang');
    var newlang = g('lang').value;
    var noms = (get ("noms") || "").split(',');
    if (noms.length) {
      if (!noms[0]) {
        noms[0] = "Foo";
      }
      if (!noms[1]) {
        noms[1] = "Bar";
      }
      set ('noms', noms.join(','));
    } else {
      set ('noms', "Foo,Bar");
    }
    if (oldlang != newlang) {
      set('lang', newlang);
      set ('v1', getLang().actions.join('\n'));
      set ('v2', getLang().actions.join('\n'));
      set ('l1', getLang().places.join('\n'));
      set ('l2', getLang().places.join('\n'));
    }
    location.href = "index.html";
  });
});
