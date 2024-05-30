(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });

    // ============== Handle Menu on Sreen scrolling ================= //
    function menuOnScroll() {
        const elementToModify = $(".site_header");
        let lastScrollTop = 0;
        const scrollTop = $(window).scrollTop();
        if (scrollTop > 200) {
            elementToModify.addClass("sticky");
        }
        $(window).on("scroll", () => {
            const scrollTop = $(window).scrollTop();
            if (scrollTop > lastScrollTop && lastScrollTop > 100) {
                elementToModify.addClass("sticky");
            } else if (scrollTop < 110) {
                elementToModify.removeClass("sticky");
            }
            lastScrollTop = scrollTop;
        });
    }

    $(document).ready(function () {

        // menuOnScroll
        menuOnScroll()

    });

})(jQuery);