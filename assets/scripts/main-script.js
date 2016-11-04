(function() {

    if (window.innerWidth < 800) return;

    var links = document.querySelectorAll('a');
    var toggle = document.querySelector('#menu_link');
    var rightMenu = document.querySelector('.right-menu');
    var checkbox = document.querySelector('#right-menu__chkbox');

    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }

    document.addEventListener('click', function(e) {
        if (!checkbox) return;

        var target = e.target;

        if(!checkbox.checked ||
            rightMenu.contains(target) ||
            (target === checkbox || target === toggle)) return;

        checkbox.checked = false;
    }, false);

    setTimeout(function() {
        document.body.classList.add('fade-in');
    }, 50);

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', delayLinkClick, false);
    }

    function delayLinkClick(event) {
        event.preventDefault();

        document.body.classList.add('fade-out');

        setTimeout(function() {
            // If we're on mobile device we need to remove the fade-out class before leaving the page
            // otherwise the browser back button will not work.
            if (window.innerWidth < 800) {
                document.body.classList.remove('fade-out');
            }

            window.location.href = event.target.href;
        }, 400);
    }

})();
