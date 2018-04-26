$(document).ready(function(){
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    // $("#button").click(function(){
    //     Materialize.fadeInImage("#fade-img"); 
    // });
    $("#button").click(function(){
        Materialize.showStaggeredList("#ul-test");
    });
    $(".modal").modal({
        dismissible: false,
        opacity: .7,
        inDuration: 300,
        outDuration: 300,
        startingTop: '70%'
    });
    $(".carousel.carousel-slider").carousel({
        fullWidth: true,
        indicators: true,
        duration: 500,
        noWrap: true
    });
});