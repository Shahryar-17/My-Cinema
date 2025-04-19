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
            slidesPerView: 3
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 7
        }
    }
});

const tabsBox = document.querySelector(".tabs-box");
allTabs = document.querySelectorAll(".tab");
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = () => {
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // If clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        tabsBox.scrollLeft += icon.id === "left" ? -200 : 200;
        setTimeout(() => handleIcons(), 50); // Calling handleIcons after 50 miliseconds
    })
})

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Removing active class from the previous tab & adding to current clicked tab
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    })
})

const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);