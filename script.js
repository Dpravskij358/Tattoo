document.addEventListener('DOMContentLoaded', function() {
    const infoBlocks = document.querySelectorAll('.info-block');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    infoBlocks.forEach(block => {
        observer.observe(block);
    });
});
