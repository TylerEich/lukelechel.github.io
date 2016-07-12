function periscopeTimeChange() {
  var t = new Date();
  var h = t.getHours();
  var periscopeLight = "socialicons/periscopelogo.png";
  var periscopeDark = "socialicons/periscopelogoBlack.png";
  var el = document.getElementById('periscopeLogo')

  el.src = (h>=5 && h<22) ? periscopeDark : periscopeLight;
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
  periscopeTimeChange();
});
