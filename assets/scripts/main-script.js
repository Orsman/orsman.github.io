(function(document) {
    var toggle = document.querySelector('#menu_link');
    var sidebar = document.querySelector('#sidebar');
    var checkbox = document.querySelector('#sidebar_chkbox');

    document.addEventListener('click', function(e) {
        var target = e.target;

        if(!checkbox.checked ||
            sidebar.contains(target) ||
            (target === checkbox || target === toggle)) return;

        checkbox.checked = false;
    }, false);

    setTimeout(function() {
        document.body.classList.add('fade-in');
    }, 50);

    var links = document.querySelectorAll('a');

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

})(document);