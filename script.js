$(document).ready(function () {
    $('.categoryButton').on('click', function () {
        var category = $(this).data('category');
        if (category === 'all') {
            $('.wishProduct').show();
        } else {
            $('.wishProduct').hide();
            $('.' + category).show();
        }

        $('.categoryButton').removeClass("selected");
        $(this).addClass("selected");
        
    });
});