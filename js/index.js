document.addEventListener('DOMContentLoaded', function() {
  var menuMini = document.getElementById('menuMiniIcon');
  menuMini.addEventListener('click',function(){
    var menu = document.getElementById('menu');
    var hiddenState = menu.getAttribute('aria-hidden');
    menu.setAttribute('aria-hidden', hiddenState == 'false');
  });
});
