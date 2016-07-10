if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', excuteDomReadyCallBacks, false);
}

function excuteDomReadyCallBacks() {
    FastClick.attach(document.body);

    setTimeout(function() {
        document.body.classList.add('dom_ready');
    }, 500);
}