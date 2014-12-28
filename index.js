/* DOM */
function g(x){
  return document.getElementById(x);
}
/* localStorage */
function get(x) {
  return localStorage.getItem (x);
}
function set(x,y) {
  localStorage.setItem (x, y);
}
function del(x) {
  localStorage.removeItem (x);
}

function onClick (e,f) {
//  e.onclick = f;
var hasTouch = 'ontouchstart' in window;
  if (hasTouch) {
    e.ontouchend = f;
  } else {
    e.onmouseup = f;
  }
}

function saveNoms() {
  var nom1 = g('nom1').value;
  var nom2 = g('nom2').value;
  set('noms',[nom1,nom2].join(','));
}

document.ontouchmove = function(event){
  event.preventDefault();
}

function validate() {
   if (g('nom1').value && g('nom2').value) {
     if (g('nom1').value == g('nom2').value) {
       alert ("No es poden dir igual");
       return false;
     }
     if (get('v1') && get ('v2')) {
       if (get('l1') && get ('l2')) {
         return true;
       }
     }
   }
   alert ("Falten dades");
   return false;
}

window.addEventListener("DOMContentLoaded", function() {
  /* load fields data */
  try {
    var noms = get('noms').split(',');
    g('nom1').value = noms[0];
    g('nom2').value = noms[1];
    // set strings
  } catch (e) {
  }
  
  g('text_firstplayer').innerHTML = getString ('firstplayer');
  g('text_secondplayer').innerHTML = getString ('secondplayer');
  g('config').value = getString ('configure');
  g('newgame').value = getString ('start');
  g('lloc1').value = g('lloc2').value = getString ('places');
  g('verb1').value = g('verb2').value = getString ('actions');

  /* add button callbacks */
  onClick (g('newgame'), function() {
    saveNoms();
    if (validate ()) {
      location.href="game.html";
    }
  });
  onClick (g('verb1'), function() {
    saveNoms();
    set("cur","v1");
    location.href="edit.html";
  });
  onClick (g('verb2'), function() {
    saveNoms();
     set("cur","v2");
     location.href="edit.html";
  });
  onClick (g('lloc1'), function() {
    saveNoms();
    set("cur","l1");
    location.href="edit.html";
  });
  onClick (g('lloc2'), function() {
    saveNoms();
    set("cur","l2");
    location.href="edit.html";
  });
  onClick (g('config'), function() {
    saveNoms();
    location.href="config.html";
  });
});
