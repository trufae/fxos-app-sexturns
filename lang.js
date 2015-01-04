
var lang = {
  'ca': {
    name: 'Català',
    how: ['fort', 'suau', 'rapid', 'lent'],
    actions: ['mossegar', 'xuclar', 'petons', 'apretar', 'pessigar', 'massatge'],
    places: ['pits', 'genitals', 'mugrons', 'coll', 'llavis', 'orella', 'cli/gland', 'cul'],
    strings: {
      firstplayer: 'Primer Jugador',
      secondplayer: 'Segon Jugador',
      actions: 'Accions',
      places: 'Llocs',
      configure: 'Configurar',
      start: 'Començar',
      idioma: 'Idioma',
      duration: 'Duració de les accions (en segons)',
      audio: 'Senyalització Auditiva',
      silence: 'Silenci',
      withsound: 'So Habilitat',
      reset: 'Esborrar-ho Tot',
      resetconfirm: 'Esborrar totes les dades?',
      save: 'Desar',
      canvi: 'Canvi!',
      jugar: 'A Jugar!'
    }
  },
  'en': {
    name: 'English',
    how: ['hard', 'soft', 'quick', 'slow'],
    actions: ['bite', 'suck', 'kiss', 'tighten', 'pinch', 'massage'],
    places: ['tits', 'genitals', 'nipples', 'neck', 'lips', 'ear', 'cli/gland', 'ass'],
    strings: {
      firstplayer: 'First Player',
      secondplayer: 'Second Player',
      actions: 'Actions',
      places: 'Places',
      configure: 'Options',
      start: 'Start!',
      idioma: 'Language',
      duration: 'Duration of actions (in seconds)',
      audio: 'Audio Ding',
      silence: 'Silence',
      withsound: 'Sound Enabled',
      reset: 'Reset',
      resetconfirm: 'Confirm Reset?',
      save: 'Save',
      canvi: 'Change',
      jugar: 'Play!'
    }
  },
  'eo': {
    name: 'Esperanto',
    how: ['maldolĉe', 'dolĉe', 'rapide', 'malrapide'],
    actions: ['mordi', 'suĉi', 'kisi', 'stringi', 'pinĉi', 'masaĝi'],
    places: ['la mamon', 'la testikon', 'la cicon', 'la kolon', 'la lipon', 'la orelon', 'la clitoron/glanon', 'la pugon'],
    strings: {
      firstplayer: 'Unua ludanto',
      secondplayer: 'Dua ludanto',
      actions: 'Agoj',
      places: 'Lokoj',
      configure: 'Opcioj',
      start: 'Ek!',
      idioma: 'Lingvoj',
      duration: 'Daŭro de agoj (sekundojn)',
      audio: 'Sonorilo',
      silence: 'Silentigi',
      withsound: 'Sonoj enŝaltitaj',
      reset: 'Rekomencigi',
      resetconfirm: 'Ĉu vi konfirmas rekomencigon?',
      save: 'Konservi',
      canvi: 'Ŝanĝi',
      jugar: 'Ludi!'
    }
  },
  'es': {
    name: 'Español',
    how: ['fuerte', 'suave', 'rápido', 'lento'],
    actions: ['morder', 'chupar', 'besos', 'apretar', 'pellizcar', 'masaje'],
    places: ['pechos', 'genitales', 'pezones', 'cuello', 'labios', 'oreja', 'cli/glande', 'culo'],
    strings: {
      firstplayer: 'Primer Jugador',
      secondplayer: 'Segundo Jugador',
      actions: 'Acciones',
      places: 'Sitios',
      configure: 'Configurar',
      start: 'Empezar',
      idioma: 'Idioma',
      duration: 'Duración de las acciones (en segundos)',
      audio: 'Señal Auditiva',
      silence: 'Silencio',
      withsound: 'Sonido Habilitado',
      reset: 'Eliminar Datos',
      resetconfirm: 'Eliminar Datos?',
      save: 'Grabar',
      canvi: 'Cambio!',
      jugar: 'A Jugar!'
    }
  },
  'it': {
    name: 'Italiano',
    how: ['forte', 'dolcemente', 'velocemente', 'lentamente'],
    actions: ['mordi', 'succhia', 'bacia', 'premi', 'pizzica', 'massaggia'],
    places: ['le tette', 'i genitali', 'i capezzoli', 'il collo', 'le labbra', 'l\'orecchio', 'il clitoride/il glande', 'il culo'],
    strings: {
      firstplayer: 'Primo giocatore',
      secondplayer: 'Secondo giocatore',
      actions: 'Azioni',
      places: 'Luoghi',
      configure: 'Opzioni',
      start: 'Incomincia!',
      idioma: 'Lingua',
      duration: 'Durata delle azioni (in secondi)',
      audio: 'Suono',
      silence: 'Muto',
      withsound: 'Suoni attivati',
      reset: 'Reset',
      resetconfirm: 'Confermi il reset?',
      save: 'Salva',
      canvi: 'Cambia',
      jugar: 'Gioca!'
    }
  },
  'tp': {
    name: 'Tokipona',
    how: ['wawa', 'wawa ala', 'wawa tawa', 'wawa tawa lili'],
    actions: ['moku', 'uta', 'pana e uta', 'o kama jo', 'pakala lili', 'pona e sijelo'],
    places: ['nena sike', 'anpa lawa', 'uta', 'kute', 'palisa mije/lupa meli', 'monsi'],
    strings: {
      firstplayer: 'jan pi nanpa wan',
      secondplayer: 'jan pi nanpa tu',
      actions: 'kama',
      places: 'wan sijelo',
      configure: 'nasin mute',
      start: 'open!',
      idioma: 'toki',
      duration: 'tenpo pi pali e kama',
      audio: 'kalama',
      silence: 'kalama ala li lon',
      withsound: 'kalama li lon',
      reset: 'weka',
      resetconfirm: 'sina wile ala wile weka e ijo?',
      save: 'awen sona',
      canvi: 'ante',
      jugar: 'open!'
    }
  }
}

var langs = [];
for (var a in lang) {
  langs[langs.length] = a;
}

///////////////////////////////////////////////////////////////////////////////
function setCurLang(n) {
  if (lang[n]) {
    localStoraget.setItem('lang', n);
  }
}

function getCurLang() {
  var curlang = localStorage.getItem ('lang');
  if (!curlang) {
    var navlang = window.navigator.language.substring(0, 2);
    if (lang[navlang]) {
      curlang = navlang;
    } else {
      curlang = 'en';
    }
    localStorage.setItem ('lang', curlang);
  }
  return curlang;
}

function getLang() {
  var l = lang[getCurLang()];
  return l ? l : lang.en;
}

function getString(s) {
  return getLang().strings[s];
}
