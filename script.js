$(document).ready(function() {
    $("header").on("scroll", function(e) {
        e.preventDefault();
        var $menu = $("#menu"),
            $nav_link = $(".nav_link");

        $nav_link.click(function() {
            $nav_link.toggleClass("active");
            $menu.toggleClass("active");
        });
    });
});