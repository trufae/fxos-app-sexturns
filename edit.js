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
var cur;

function onClick (e,f) {
//  e.onclick = f;
var hasTouch = 'ontouchstart' in window;
if (hasTouch) {
  e.ontouchend = f;
} else {
  e.onmouseup = f;
}
}
document.ontouchmove = function(event){
	event.preventDefault();
}

window.addEventListener("load", function() {
g('desar').value = getString('save');
  try {
    cur = get('cur');
    var data = get(cur);
    g('data').value = data;
  } catch (e) {
    alert("cur:"+e);
  }

  onClick (g('desar'), function() {
    set(cur, g('data').value);
    location.href = "index.html";
  });

  onClick (g('sortir'), function() {
    location.href = "index.html";
  });

  onClick (g('auto'), function() {
    if (cur[0]=='v') {
      g('data').value = getLang().actions.join ("\n");
    } else {
      g('data').value = getLang().places.join ("\n");
    }
  });
});
