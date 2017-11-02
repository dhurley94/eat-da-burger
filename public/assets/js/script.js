$(document).ready(function () {
    $(".form-inline").submit(function(e) {
        e.preventDefault();
        var userInput = $("[name=burger]").val().trim().toLowerCase();
        if (userInput === "") {
            $(".form-group").effect("bounce", "fast");
        }
    })
});