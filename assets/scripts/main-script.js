(function() {

    setTimeout(function() {
        document.body.classList.add('fade-in');
    }, 50);

    var links = document.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', delayLinkClick, false);
    }

    function delayLinkClick(event) {
        event.preventDefault();

        // document.body.addEventListener('transitionend', function(ev) {
        //     window.location.href = event.target.href;
        // });

        document.body.classList.add('fade-out');

        setTimeout(function() {
            window.location.href = event.target.href;
        }, 400);
    }

})();