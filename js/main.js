
$(".fa-heart").dblclick(function() {
    $(".notification-bubble").show(400);
});

$(document).on("scroll", function() {
    if ($(document).scrollTop() > 50) {
        $(".navigation").addClass("shrink");
    } else {
        $(".navigation").removeClass("shrink");
    }
});


// story-section
var block = document.getElementById("block");
block.scrollTop = block.scrollHeight;

// Modal-popup



