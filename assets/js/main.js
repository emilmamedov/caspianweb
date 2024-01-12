$(function () {
    // гамбургер меню
    $('.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let auth = $('.auth');

    if ($(window).width() < 993) {

        mobile = true;
        $('header .menu').append(auth);
    }

    $(window).on('resize', function () {
        if ($(window).width() < 993 && !mobile) {
            mobile = true;
            $('header .menu').append(auth);
        }

        if ($(window).width() >= 992 && mobile) {
            mobile = false;
            $('header .container').append(auth);
            $(this, 'header .menu').removeClass('active');
        }
    });


    $('.portfolio_right').slick({
        prevArrow: `<img class="arrow_left" src="/img/larrow.svg">`,
        nextArrow: `<img class="arrow_right" src="/img/rarrow.svg">`
    });

    $('.tarif_slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: `<img class="arrow_left" src="/img/larrow.svg">`,
        nextArrow: `<img class="arrow_right" src="/img/rarrow.svg">`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

document.addEventListener("DOMContentLoaded", function () {
    // Обработчик события для всех ссылок в списке
    document.querySelectorAll('.menu ul a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Получаем атрибут href и находим соответствующий элемент
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Прокручиваем страницу к выбранному элементу
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

