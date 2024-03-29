$(function() {
    const html = document.documentElement;
    const canvas = document.getElementById("intro"); //캔버스 id 불러와야함
    const context = canvas.getContext("2d");
    const intro = document.getElementById("intro1").documentElement;

    const frameCount = 94; //프레임 숫자 교정하세요

    const currentFrame = index => (
        `프레임셋/${index.toString().padStart(4, '0')}.jpeg` //경로 수정 , $구문은 남겨야함.

    )

    const preloadImages = () => {
        for (let i = 1; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i)
        }
    };
    // Create, load and draw the image
    const img = new Image()
    img.src = currentFrame(1); // we'll make this dynamic in the next step, for now we'll just load image 1 of our sequence
    // Set canvas dimensions
    canvas.width = 1920;
    canvas.height = 1080;

    img.onload = function() {
        context.drawImage(img, 0, 0);
    }

    const updateImage = index => {
        img.src = currentFrame(index);
        context.drawImage(img, 0, 0);
    }


    window.addEventListener('scroll', () => {
        const scrollTop = html.scrollTop; //scrollTop은 현재 수직위치
        const maxScrollTop = $("#n_1920__2").offset().top + 80; //문서 스크롤 높이 - 창 높이
        const scrollFraction = scrollTop / maxScrollTop; //현재 수직위치가 약 몇 %인지?
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        ) - Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        ) % 3;
        console.log((scrollTop - $(".slider").offset().top + window.innerHeight));
        if (scrollTop - $(".slider").offset().top > -window.innerHeight) {
            document.querySelector(".slider").scrollLeft = (scrollTop - ($(".slider").offset().top) + window.innerHeight);
        }

        requestAnimationFrame(() => updateImage(frameIndex))
    });

    preloadImages();
});
(function(document) {
    const markers = [...document.querySelectorAll('mark')];

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.8
    });

    markers.forEach(mark => {
        observer.observe(mark);
    });
})(document);
ScrollReveal().reveal('.n_15_', {
    distance: '40%',
    origin: 'bottom',
    duraiton: 500
});

ScrollReveal().reveal('.text', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
});

ScrollReveal().reveal('.button', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
});

ScrollReveal().reveal('.button_', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
});

ScrollReveal().reveal('.innerslider', {
    distance: '100%',
    origin: 'bottom',
    duraiton: 500
});
window.addEventListener('scroll', () => {

});