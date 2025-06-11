(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

function sendToWhatsapp(){
    const number = +8801744564310;  

    let UserName = document.getElementById('name').value;
    let UserEmail = document.getElementById('email').value;
    let Subject = document.getElementById('subject').value;
    let UserMessage = document.getElementById('message').value;

    let url = "https://wa.me/" + number + "?text="
    + "Name : " + UserName + "%0a"
    + "Email : " + UserEmail + "%0a"
    + "Subject : " + Subject + "%0a"
    + "Message : " + UserMessage + "%0a%0a";

    window.open(url, '_blank').focus();

}

function sendRequestByWhatsapp(){
    const WhatAppNum = +8801744564310;  

    let name = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phoneNum = document.getElementById('phoneNumber').value;
    let projectDetails = document.getElementById('projectDetails').value;

    let url = "https://wa.me/" + WhatAppNum + "?text="
    + "Name : " + name + "%0a"
    + "Email : " + email + "%0a"
    + "Phone : " + phoneNum + "%0a"
    + "Project Details : " + projectDetails + "%0a%0a";

    window.open(url, '_blank').focus();
}

