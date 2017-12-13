'use strict'
let participateLink = document.getElementById('participateLink');
let registrationForm = document.getElementById('registrationForm');

participateLink.addEventListener('click', scrollToRegistrationSection);
registrationForm.addEventListener('submit', formSubmit);

function scrollToRegistrationSection() {
    event.preventDefault();
}

function formSubmit(event) {
    event.preventDefault();
    if (registrationForm.checkValidity() !== false) {
        postToGoogle2();
    }
    registrationForm.classList.add('was-validated');
    return false;
}

function postToGoogle2() {
        let nameField = document.getElementById('nameField').value;
        let lastNameField = document.getElementById('lastNameField').value;
        let workOrStudyPlaceField = document.getElementById('workOrStudyPlaceField').value;
        let emailField = document.getElementById('emailField').value;
        $.ajax({
            // нужно установить расширение https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=ru
            url: "https://docs.google.com/forms/d/e/1FAIpQLSd6MuYYph5HIlvlJiF11t33DMGK0w8nmlGGp2u8dmoZgmvBGg/formResponse",
            data: { "entry.1135768056": nameField, "entry.1512671695": lastNameField, "entry.2080661211": workOrStudyPlaceField, "entry.1959877280": emailField },
            type: "POST",
            // crossDomain:true,

            // последнее что сделал - изменил dataType: "xml" на "text", а то запускался обработчик на error.
            dataType: "xml",
            // statusCode:{
            //     0:function(){
            //         alert('Ответ - 0');
            //     },
            //     404:function(){
            //       alert('Страница не найдена');
            //     }
            // },
            success: function (data, textStatus, jqXHR) {
                console.log('success');
            },
            // error: function (data, textStatus, jqXHR) {
            //     console.log(data);
            //     console.log(jqXHR.getResponseHeader);
            //     console.log(data.status + ' (jqXHR)');
            // }
        });    
}

(function () {
    $('a.page-scroll').on('click', function (e) {
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'swing');
    });
}());