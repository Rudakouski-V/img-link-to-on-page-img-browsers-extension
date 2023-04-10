(function () {
    //const googleRegexp = /^(http|https):\/{2}\w.+google.com\/[\w\/]+.\w+/;
    const userapiComRegexp = /^(http|https):\/{2}sun\d+-\d+.userapi.com\/imp(f|g)\//;
    const formats = ['jpeg', 'jpg', 'png', 'webp'];
    let links = document.querySelectorAll('a[href]:not([itemprop])');

    links.forEach(function (link) {
        if (userapiComRegexp.test(link.toString())) {
            let url = link.getAttribute('href');
            let ext = _getUrlExt(url);

            if (formats.includes(ext)) {
                let image = document.createElement("img");
                image.setAttribute('class', 'iltopi');
                image.setAttribute('src', url);
                link.innerHTML = "";
                link.appendChild(image);
                link.setAttribute('target', '_blank');
            }
        }
    });

    function _getUrlExt(url) {
        let possibleUrl = url.split('.').pop();
        return possibleUrl.split('?')[0];
    }
})();