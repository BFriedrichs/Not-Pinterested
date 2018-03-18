if (location.host.indexOf('.google.') != -1) {
    document.addEventListener('click', function(event) {
        var isPin = event.target.parentElement.href.indexOf('pinterest.com') != -1 &&
                    !event.target.classList.contains('rg_i');
        if (isPin) {
            event.preventDefault();
            event.stopPropagation();

            window.open(event.target.src,'_blank');
        }
    })
}
