function coasthouseTimeChange() {
  var t = new Date();
  var h = t.getHours();
  var coasthouseLight = "socialicons/coasthouselogo.png";
  var coasthouseDark = "socialicons/coasthouselogoBlack.png";
  var el = document.getElementById('coasthouseLogo')

  el.src = (h>=5 && h<22) ? coasthouseDark : coasthouseLight;
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

addLoadEvent(function() {
  coasthouseTimeChange();
});
