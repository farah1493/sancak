    /*stagePadding: 50,*/

/* price section */

$('.price-section .owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2500,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false

        },
        780:{
            items:2,
            nav:false

        },
        1100:{
            items:3
        }
    }
});

/* our-client */ 


$('.our-client .owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:false,
    autoplay: true,
    autoplayTimeout: 2500,
    /*stagePadding: 50,*/
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,

        },
        500:{
            items:3,

        },
        780:{
            items:4,

        },
        1100:{
            items:5
        }
    }
});
