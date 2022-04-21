
$(document).ready(function () {
    $("#about").show();
    $("#nomen-class,#quiz-area,#submit-button").hide();
    $.get("data/categories.json", function (navItems, status) {
        console.log(navItems);
        for (i = 0; i < navItems.length; i++) {
            $("#categoryElement")
                .append("<li class=\"nav-item\"><a class=\" cat-item nav-link \" href=\"#\">"
                    + navItems[i]
                    + "</a></li>");
        }
        $(".cat-item").click(function () {
            nav_link_clicked($(this).text())
        });
    });

});


function nav_link_clicked(category) {
    $("#nomen-class").html(category);
    $("#about").hide();
    $("#nomen-class,#quiz-area,#submit-button").show();
}

function about_clicked() {
    $("#about").show();
    $("#nomen-class,#quiz-area,#submit-button").hide();
}
