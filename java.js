document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 130;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    });
});

// let atoz = document.getElementsByClassName('sticky')[0];
// let atoz_content = document.getElementsByClassName('atoz')[0];

// window.onscroll = () => {
//     let scrollTop = window.scrollY;
//     let viewportHeight = window.innerHeight;
//     let contentHeight = atoz_content.getBoundingClientRect().height;

//     if (scrollTop >= contentHeight - viewportHeight) {
//         atoz_content.style.transform = `translateY(-${contentHeight - viewportHeight}px)`;
//         atoz_content.style.position = 'fixed';
//         atoz_content.className = 'edit';
//     }
//     else {
//         atoz_content.style.transform = '';
//         atoz_content.style.position = '';
//     }
// }

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
        // el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 10
        },
        1024: {
            slidesPerView: 10
        }
    }
});