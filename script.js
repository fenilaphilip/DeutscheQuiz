
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
    $("#about").hide();
    $("#nomen-class,#quiz-area,#submit-button").show();
    display_nomen(category);
}

function about_clicked() {
    $("#about").show();
    $("#nomen-class,#quiz-area,#submit-button").hide();
}

function display_nomen(category) {
    $.get("data/" + category + ".json", function (object, status) {
        let art = object.article;
        $("#nomen-class").html(art + " " + category);
        let len = object.words.length;
        $("#quiz-area").html("");
        for (j = 0; j < len; j++) {
            $("#quiz-area").append(
                '<li class="question">' +
                '<input class="btn-check" type="radio" name="que-' + j + '" autocomplete="off" id="der' + j + '">' +
                '<label class="btn btn-outline-success" for="der' + j + '"> Der </label> ' +
                '<input class="btn-check" type="radio" name="que-' + j + '" autocomplete="off" id="die' + j + '">' +
                '<label class="btn btn-outline-success" for="die' + j + '"> Die </label> ' +
                '<input class="btn-check" type="radio"  name="que-' + j + '" autocomplete="off" id="das' + j + '">' +
                '<label class="btn btn-outline-success" for="das' + j + '"> Das </label>' +
                '<span id="nomen">' + object.words[j].nom + '</span></li>');
        }
    });
}
