$(function(){

    $('.info-tabs__item').on('click', function (e) {
        e.preventDefault();

        $('.info-tabs__item').removeClass('info-tabs__item--active');
        $(this).addClass('info-tabs__item--active');

        $('.info-tabs__content').removeClass('info-tabs__content--active');
        $($(this).attr('href')).addClass('info-tabs__content--active');

    });

    $('.info-slider, .clients-slider').slick({
        fade: true,
        prevArrow: '<img class="slick-left" src="../images/Arrow 2.svg"/>',
        nextArrow: '<img class="slick-right" src="../images/Arrow 1.svg"/>'
    });


});