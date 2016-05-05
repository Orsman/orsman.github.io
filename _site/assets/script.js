
if (document.addEventListener ) {
    document.addEventListener('DOMContentLoaded', excuteDomReadyCallBacks, false);
}

function excuteDomReadyCallBacks() {

    setTimeout(function() {
        document.body.className = 'dom_ready';

    }, 500);
}