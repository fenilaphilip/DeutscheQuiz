
$(document).ready(function () {
    $.get("data/categories.json", function (navItems, status) {

        console.log(navItems);
        for (i = 0; i < navItems.length; i++) {
            $("#categoryElement")
                .append("<li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">"
                    + navItems[i]
                    + "</a></li>");
        }
    });
});
