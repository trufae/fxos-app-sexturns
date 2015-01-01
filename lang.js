
var lang = {
  "ca": {
    how: ["fort", "suau", "rapid", "lent"],
    actions: ["mossegar", "xuclar", "petons", "apretar", "pessigar", "massatge"],
    places: ["pits", "genitals", "mugrons", "coll", "llavis", "orella", "cli/gland", "cul"],
    strings: {
      firstplayer: "Primer Jugador",
      secondplayer: "Segon Jugador",
      actions: "Accions",
      places: "Llocs",
      configure: "Configurar",
      start: "Començar",
      idioma: "Idioma",
      duration: "Duració de les accions (en segons)",
      audio: "Senyalització Auditiva",
      silence: "Silenci",
      withsound: "So Habilitat",
      reset: "Esborrar-ho Tot",
      resetconfirm: "Esborrar totes les dades?",
      save: "Desar",
      canvi: "Canvi!",
      jugar: "A Jugar!"
    }
  },
  "es": {
    how: ["fuerte", "suave", "rápido", "lento"],
    actions: ["morder", "chupar", "besos", "apretar", "pellizcar", "masaje"],
    places: ["pechos", "genitales", "pezones", "cuello", "labios", "oreja", "cli/glande", "culo"],
    strings: {
      firstplayer: "Primer Jugador",
      secondplayer: "Segundo Jugador",
      actions: "Acciones",
      places: "Sitios",
      configure: "Configurar",
      start: "Empezar",
      idioma: "Idioma",
      duration: "Duración de las acciones (en segundos)",
      audio: "Señal Auditiva",
      silence: "Silencio",
      withsound: "Sonido Habilitado",
      reset: "Eliminar Datos",
      resetconfirm: "Eliminar Datos?",
      save: "Grabar",
      canvi: "Cambio!",
      jugar: "A Jugar!"
    }
  },
  "en": {
    how: ["hard", "soft", "quick", "slow"],
    actions: ["bit", "suck", "kiss", "press", "pinch", "massage"],
    places: ["tits", "genitals", "nipples", "neck", "lips", "ear", "cli/gland", "ass"],
    strings: {
      firstplayer: "First Player",
      secondplayer: "Second Player",
      actions: "Actions",
      places: "Places",
      configure: "Options",
      start: "Start!",
      idioma: "Language",
      duration: "Duration of actions (in seconds)",
      audio: "Audio Ding",
      silence: "Silence",
      withsound: "Sound Enabled",
      reset: "Reset",
      resetconfirm: "Confirm Reset?",
      save: "Save",
      canvi: "Change!",
      jugar: "Play!"
    }
  }
}

/////////////////////////////////////////////////////////////////////////////
function setCurLang(n) {
  if (lang[n]) {
    localStoraget.setItem("lang", n);
  }
}

function getCurLang() {
  var curlang = localStorage.getItem ("lang");
  if (!curlang) {
    var navlang = window.navigator.language.substring(0, 2);
    if (lang[navlang]) {
      curlang = navlang;
    } else {
      curlang = "en";
    }
    localStorage.setItem ("lang", curlang);
  }
  return curlang;
}

function getLang() {
  return lang[getCurLang()];
}

function getString(s) {
  return getLang().strings[s];
}
