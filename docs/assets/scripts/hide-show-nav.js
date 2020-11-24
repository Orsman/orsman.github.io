;(function(window, document) {
    'use strict';

    // This scroll thing only applies to mobilez
    if (window.innerWidth > 800) return;

    var lastScrollTop = window.scrollY;
    var isHidden = false;
    var nav;

    window.onscroll = function() {
        var scrollTop = this.scrollY;
        var offset = scrollTop - lastScrollTop;

        if (!nav) {
            nav = document.querySelector('.nav-top');
        }

        lastScrollTop = scrollTop;

        if (offset > 5 && scrollTop > 60) {
            if (!isHidden && nav) {
                nav.classList.add('nav-top--hidden');
                isHidden = true;
            }
        } else if (offset < -5 || scrollTop < 60) {
            if (isHidden) {
                nav.classList.remove('nav-top--hidden');
                isHidden = false;
            }
        }
    };

})(window, document);
