function twitterTimeChange() {
  var t = new Date();
  var h = t.getHours();
  var twitterLight = "socialicons/twitterlogo.png";
  var twitterDark = "socialicons/twitterlogoBlack.png";
  var el = document.getElementById('twitterLogo')

  el.src = (h>=5 && h<22) ? twitterDark : twitterLight;
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
  twitterTimeChange();
});
