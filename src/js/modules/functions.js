/* Checking for webp browser support, adding a webp class or no-webp HTML */
export function isWebp() {
    //Checking webp support
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    //Adding class _webp or _no-webp HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        console.log('log:', className)
        document.documentElement.classList.add(className);
    });
}
