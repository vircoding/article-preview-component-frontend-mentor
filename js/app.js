function drawAnimation(element) {
    // while timePassed goes from 0 to 2000
    // left gets values from 0px to 400px
    element.style.right = timePassed / 5 + 'px';
}

function unhideShare(element) {
    let start = Date.now(); // remember start time
    let timer = setInterval(() => {
        // How long has it been since the beginning?
        let timePassed = Date.now() - start;

        if (timePassed >= 2000) {
            clearInterval(timer); // end animation after 2 seconds
            return;
        }

        // draw the animation at timePassed
        element.style.left = timePassed / 5 + 'px';
    }, 20);
}

function hideShare(element) {
    let start = Date.now(); // remember start time
    let timer = setInterval(() => {
        // How long has it been since the beginning?
        let timePassed = Date.now() - start;

        if (timePassed >= 2000) {
            clearInterval(timer); // end animation after 2 seconds
            return;
        }

        // draw the animation at timePassed
        element.style.right = timePassed / 5 + 'px';
    }, 20);
}

document.querySelector('.footer-share').style.right = '396.2px';
const shareIcon = document.getElementById('shareIcon');

shareIcon.addEventListener('load', () => {
    const svgDoc = shareIcon.contentDocument;
    const path = svgDoc.firstElementChild.firstElementChild;

    document.querySelector('.user-iconContainer').addEventListener('click', () => {
        if (shareIcon.classList.contains('iconActive')) {
            path.style.fill = 'hsl(214, 17%, 51%)';
            shareIcon.classList.remove('iconActive');
            hideShare(document.querySelector('.footer-share'));
        } else {
            path.style.fill = 'hsl(210, 46%, 95%)';
            shareIcon.classList.add('iconActive');
            unhideShare(document.querySelector('.footer-share'));
        }
    });
});
