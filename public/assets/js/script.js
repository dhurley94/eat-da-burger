$("form").submit(function (e) {
    if ($("#burger").val().trim() == '') {
        e.preventDefault();
        $("#burgerForm").effect('bounce', 500);
    } else {
        $('.btn-info').on('click', )
        return;
    }
});

$('btn-info').on('click', function () {
    $('#burger-img').animateCss('rubberBand');
});
