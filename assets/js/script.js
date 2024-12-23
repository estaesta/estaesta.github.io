const showMore = document.querySelectorAll('.show-more');
const clamp = document.querySelectorAll('.clamp');

for (let i = 0; i < showMore.length; i++) {
    if (clamp[i].offsetHeight < clamp[i].scrollHeight ||
        clamp[i].offsetWidth < clamp[i].scrollWidth) {
            showMore[i].addEventListener('click', () => {
                clamp[i].classList.toggle('clamp');
                if (clamp[i].classList.contains('clamp')) {
                    showMore[i].textContent = 'Show More ...';
                } else {
                    showMore[i].textContent = 'Show Less ...';
                }
            });
    } else {
        showMore[i].style.display = 'none';
    }
}
