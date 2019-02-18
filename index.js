function handleNavClicks() {
    $('.nav-links li a').on('click', function() {
        event.preventDefault;
        console.log('nav link clicked')        
        let targetHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top
        }, 1500);
    });
};

function handleJQFunctions() {
    handleNavClicks();
}

$(handleJQFunctions);