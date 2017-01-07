;(function(window, document) {

    if (window.innerWidth < 800) return;

    var links = document.querySelectorAll('a');
    var toggle = document.querySelector('.nav-top__menu-link');
    var rightMenu = document.querySelector('.right-menu');
    var checkbox = document.querySelector('#right-menu__chkbox');

    if (toggle) {
        toggle.addEventListener('mouseenter', function() {
            checkbox.checked = true;
        });        
    }

    if (rightMenu) {
        rightMenu.addEventListener('mouseleave', function() {
            checkbox.checked = false;
        });
    }

    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }

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

})(window, document);
