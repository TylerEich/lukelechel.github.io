function neverlandTimeChange() {
  var t = new Date();
  var h = t.getHours();
  var neverlandLight = "socialicons/neverlandlogo.png";
  var neverlandDark = "socialicons/neverlandlogoBlack.png";
  var el = document.getElementById('neverlandLogo')

  el.src = (h>=5 && h<22) ? neverlandDark : neverlandLight;
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
  neverlandTimeChange();
});
