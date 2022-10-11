function unhideShare() {
    path.style.fill = 'hsl(210, 46%, 95%)';
    shareIcon.classList.add('iconActive');
    animate('unhide', 'ease-out');
}

function hideShare() {
    path.style.fill = 'hsl(214, 17%, 51%)';
    shareIcon.classList.remove('iconActive');
    animate('hide', 'ease-in');
}

function animate(animation, timing) {
    const element = document.querySelector('.footer-share');
    element.style.animationTimingFunction = timing;
    element.style.animationName = animation;
}

shareIcon.addEventListener('load', () => {
    const svgDoc = shareIcon.contentDocument;
    path = svgDoc.firstElementChild.firstElementChild;

    document
        .querySelector('.user-iconContainer')
        .addEventListener('click', () =>
            shareIcon.classList.contains('iconActive') ? hideShare() : unhideShare()
        );
});
