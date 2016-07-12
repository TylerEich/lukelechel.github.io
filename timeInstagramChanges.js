function instagramTimeChange() {
  var t = new Date();
  var h = t.getHours();
  var instagramLight = "socialicons/instagramlogo.png";
  var instagramDark = "socialicons/instagramlogoBlack.png";
  var el = document.getElementById('instagramLogo')

  el.src = (h>=5 && h<22) ? instagramDark : instagramLight;
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
  instagramTimeChange();
});
