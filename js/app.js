const shareIcon = document.getElementById('shareIcon');

shareIcon.addEventListener('load', () => {
    const svgDoc = shareIcon.contentDocument;
    const path = svgDoc.firstElementChild.firstElementChild;

    document.querySelector('.user-iconContainer').addEventListener('click', () => {
        if (shareIcon.classList.contains('iconActive')) {
            path.style.fill = 'hsl(214, 17%, 51%)';
            shareIcon.classList.remove('iconActive');
        } else {
            path.style.fill = 'hsl(210, 46%, 95%)';
            shareIcon.classList.add('iconActive');
        }
    });
});
