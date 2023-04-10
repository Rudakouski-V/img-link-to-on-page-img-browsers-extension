(function () {
    const formats = ['jpeg', 'jpg', 'png', 'webp'];
    let links = document.querySelectorAll('a[href]:not([itemprop])');

    links.forEach(function (link) {
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
    });

    function _getUrlExt(url) {
        return url.split('.').pop();
    }
})();