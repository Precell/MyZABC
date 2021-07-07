// To we use jquery
// The function is getting the document ready for work
$(document).ready(() =>{

    // So we target our container with the class slick 
    // and then use the function slick();
    // These are the actual bare bones to have slick working
    // after we have added a slick instance by adding .slick() on the slick class element
    //   we pass in an object to make a customized carousel for me
    // Each key in this object is a configuring option and the value is what you set it to
    $('.slick').slick({
        dots: true,
        autoplay:true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true
      });
} )