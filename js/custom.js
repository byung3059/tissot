$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 4) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0, }, 300)
    });


    $('.content_left_slide').slick({
        arrows: false,
        asNavFor: '.content_right_slide',
        fade: true,
    });

    $('.content_right_slide').slick({
        arrows: false,
        slidesToShow: 3,
        asNavFor: '.content_left_slide'
    });

    $('.right .arrows .prev').on('click', function () {

        $('.content_left_slide').slick('slickPrev')

    })
    $('.right .arrows .next').on('click', function () {

        $('.content_left_slide').slick('slickNext')

    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })


})