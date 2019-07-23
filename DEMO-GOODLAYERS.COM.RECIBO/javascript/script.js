$(document).ready(function () {
    // -----------------------------------------------------
    // SEARCH INPUT
    $("#searchIcon").click(function () {
        $("#searchInput").toggleClass("displayblock");
    });
    // -----------------------------------------------------
    var homeElemWidth = $("#homepage").width()
    $(".hoverline").css("width", homeElemWidth);
    $("#navbarlist li").mouseleave(function (e) {
        $(".hoverline").css("width", homeElemWidth);

    });
    $("#navbarlist li").mouseover(function (e) {
        var elemWidth = $(e.currentTarget).width();
        $(".hoverline").css("width", elemWidth);
        var position = e.target.offsetLeft;
        $(".hoverline").css("left", position);
    });
    // -----------------------------------------------------
    $("#navbarlist li")
        .on("mouseenter", function () {
        })
        .on("mouseleave", function () {
            $(".hoverline").css("width", homeElemWidth);
            $(".hoverline").css("left", "0");
        });
    // -----------------------------------------------------           
    $("#blog")
        .on("mouseenter", function (e) {
            $("#blogopen").css("display", "flex");
        })
        .on("mouseleave", function (e) {
            setTimeout(function (e) {
                $(window).mouseover(function (e) {
                    console.log(e.target.closest('#blogopen'));
                    if (e.target.closest('#blogopen')) {
                        $("#blogopen").css("display", "flex");
                    }
                    else {
                        $("#blogopen").css("display", "none");
                        console.log("outt");

                    }
                });
            }, 1000);
        });
    // -----------------------------------------------------   
    // $(function (e) {

    //     $('#blog').hover(function (e) {
    //         $('#blogopen').show();  //find the div INSIDE this li
    //     }, function (e) {
    //         setTimeout(function (e) {
    //             console.log(e.relatedTarget);
    //             if (e.relatedTarget.id != '#blogopen') {
    //                 // $('#blogopen').hide();
    //             }

    //         }, 1000);

    //     });
    // });
    // -----------------------------------------------------       
    $('.slider1owl').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    })
    // -----------------------------------------------------
    $('.secondowl').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })
    // -----------------------------------------------------
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    })
    // -----------------------------------------------------    

    function myFunction(x) {
        if (x.matches) { // If media query matches
            $("#shortcodes").css("display", "none");

        } else {
            $("#shortcodes").css("display", "block");
        }
    }
    // -----------------------------------------------------    

    var x = window.matchMedia("(max-width: 1070px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    // -----------------------------------------------------    

    function myFunction(p772) {
        if (p772.matches) { // If media query matchs
            $("#features-nav").css("display", "none");

        } else {
            $("#features-nav").css("display", "block");
        }
    }
    var p772 = window.matchMedia("(max-width: 772px)")
    myFunction(p772) // Call listener function at run time
    p772.addListener(myFunction) // Attach listener function on state changes

    // -----------------------------------------------------   
    function myFunction(y) {
        if (y.matches) { // If media query matches
            $(".header-phone").removeClass("col-md-5");
            $(".header-time").removeClass("col-md-5");
            $(".header-time").css("justify-content", "center");
            $(".header-icon").css("justify-content", "center");
            $(".header-icon").removeClass("col-md-2");
            $(".logo-div").removeClass("col-md-2");


        } else {
            $(".header-phone").addClass("col-md-5");
            $(".header-time").addClass("col-md-5");
            $(".header-icon").addClass("col-md-2");
            $(".logo-div").addClass("col-md-2");

        }
    }
    var y = window.matchMedia("(max-width: 1010px)")
    myFunction(y) // Call listener function at run time
    y.addListener(myFunction) // Attach listener function on state changes
});