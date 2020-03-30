$('ul').on('click', 'li', function(event) {
    // event.stopPropagation();
    if (!($(this).hasClass("striped"))) {
        $(this).addClass("striped");
    } else {
        $(this).removeClass("striped");
    }
});

// span
$('ul').on('click', 'li span', function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

// input text
$('input[type="text"]').on("keypress", function(event) {
    if (event.which === 13) {
        let userValue = $(this).val();
        $(this).val("");
        let appendedVal = $('<li></li>').text(" " + userValue);
        let myTrashIcon = $('<i></i>');
        myTrashIcon.addClass("fa fa-trash");
        let mySpan = $('<span></span>').append(myTrashIcon);
        appendedVal.prepend(mySpan);
        $('ul').append(appendedVal);
        
    }
});

// toggle input text
$('.fa-plus').on('click', function() {
    $('input[type="text"]').fadeToggle();
});