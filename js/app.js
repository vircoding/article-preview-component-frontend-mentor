function animate(animation, timing) {
    const element = document.querySelector('.footer-share');
    element.style.animationTimingFunction = timing;
    element.style.animationName = animation;
}

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

shareIcon.addEventListener('load', () => {
    path = shareIcon.contentDocument.firstElementChild.firstElementChild;

    // hide share just clicking the share button

    // document
    //     .querySelector('.user-iconContainer')
    //     .addEventListener('click', () =>
    //         shareIcon.classList.contains('iconActive') ? hideShare() : unhideShare()
    //     );

    // hide share clicking anywhere
    document.addEventListener('click', (e) => {
        if (e.target.matches('.user-iconContainer'))
            shareIcon.classList.contains('iconActive') ? hideShare() : unhideShare();
        if (!e.target.matches('.user-iconContainer') & shareIcon.classList.contains('iconActive'))
            hideShare();
    });
});
