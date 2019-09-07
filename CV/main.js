function sizeContent() {
    var newHeight = ($(window).height() - $(".header").css('height')-3) ;
    $(".content").css('height',newHeight);
}