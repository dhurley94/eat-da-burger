$("form").submit(function(e) {
    if ($("input:burger").val().trim() !== "") {
        return;
    }
    $("span").text("Invalid Input!").show().faceOut(1000);
    e.preventDefault();
});