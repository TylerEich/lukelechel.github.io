function iconTimeChange( h, datum ) {
  var pathLight = datum.light;
  var pathDark = datum.dark;
  var el = datum.el;

  el.src = (h>=5 && h<22) ? pathDark : pathLight;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function initialize() {
  var t = new Date();
  var h = t.getHours();

  var data = [{
    light: "socialicons/coasthouselogo.png",
    dark: "socialicons/coasthouselogoBlack.png",
    el: document.getElementById('coasthouseLogo')
  }, {
    light: "socialicons/instagramlogo.png",
    dark: "socialicons/instagramlogoBlack.png",
    el: document.getElementById('instagramLogo')
  }, {
    light: "socialicons/neverlandlogo.png",
    dark: "socialicons/neverlandlogoBlack.png",
    el: document.getElementById('neverlandLogo')
  }, {
    light: "socialicons/periscopelogo.png",
    dark: "socialicons/periscopelogoBlack.png",
    el: document.getElementById('periscopeLogo')
  }, {
    light: "socialicons/twitterlogo.png",
    dark: "socialicons/twitterlogoBlack.png",
    el: document.getElementById('twitterLogo')
  }];


  data.forEach( function( datum ) {
    iconTimeChange( h, datum );
  });
}

addLoadEvent( initialize );
