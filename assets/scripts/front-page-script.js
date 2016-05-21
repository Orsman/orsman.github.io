if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', excuteDomReadyCallBacks, false);
}

function excuteDomReadyCallBacks() {

    setTimeout(function() {
        document.body.classList.add('dom_ready');
    }, 500);
}