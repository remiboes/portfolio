/*
  Slidemenu
*/
(function () {
    var $body = document.body,
        $menu_trigger = $body.getElementsByClassName('menu-trigger')[0],
        $menu_links = $body.querySelectorAll('#slide-menu a');

    if (typeof $menu_trigger !== 'undefined') {
        $menu_trigger.addEventListener('click', function () {
            $body.classList.toggle('menu-active');
        });

        // Ajoutez un gestionnaire d'événements pour chaque lien du menu
        for (var i = 0; i < $menu_links.length; i++) {
            $menu_links[i].addEventListener('click', function () {
                $body.classList.remove('menu-active');
            });
        }
    }
})();