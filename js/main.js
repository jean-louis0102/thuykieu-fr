// Menu hamburger mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var isOpen = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Fermer le menu si on clique sur un lien
  var links = document.querySelectorAll('.nav-list a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Sous-menu Pratiques : toggle au clic, fermeture au clic sur sous-item
  document.querySelectorAll('nav ul li:has(ul) > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var submenu = this.nextElementSibling;
      if (submenu) {
        var isOpen = submenu.style.display === 'block';
        document.querySelectorAll('nav ul ul, nav .submenu').forEach(function (s) {
          s.style.display = 'none';
        });
        submenu.style.display = isOpen ? 'none' : 'block';
      }
    });
  });

  // Clic sur un sous-item : ferme le sous-menu et navigue
  document.querySelectorAll('nav ul ul a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelectorAll('nav ul ul, nav .submenu').forEach(function (s) {
        s.style.display = 'none';
      });
    });
  });

  // Clic ailleurs sur la page : ferme tous les sous-menus
  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav')) {
      document.querySelectorAll('nav ul ul, nav .submenu').forEach(function (s) {
        s.style.display = 'none';
      });
    }
  });
});
