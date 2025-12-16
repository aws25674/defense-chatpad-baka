$(() => {
    removeAd();
    setTimeout(() => {
        removeAd();
    }, 3000);
});

function removeAd() {
    remove('.style-scope.ytd-watch-next-secondary-results-renderer');
}

function remove(selector) {
    var obj = $(selector);
    if (obj.length > 0) {
        obj[0].remove();
    }
    const iframe = $('iframe');
    if (iframe.length > 0) {
        obj = iframe.contents().find(selector);
        if (obj.length > 0) {
            obj[0].remove();
        }
    }
}
