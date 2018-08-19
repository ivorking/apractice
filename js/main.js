// check JS connnected
console.log("javascript connected");

// global variables
// change lorem text here
var loremContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing eleifen. Suspendisse iaculis mi ut elit. Suspendisse aliquam fermen sem. Etiam blandit mattis velit. Integer posuere. Nullam fermentum. Integer aliquam, purus a eleifend vehicula, tellus odio bibendum leo, vitae vestibulum ipsum mi id augue. Sed viverra. Curabitur consequat sagittis justo.";
// if more slides are being used, increase slidecounter
var slideNumber = 3;

// keeps track of input form page number
var pageCounter = 1;

// set up form data for submission
var formData = {
  firstname: null,
  lastname: null,
  emailaddress: null,
  telephone: null
}

// initialize swiper
var mySwiper = new Swiper('.swiper-container', {
  initialSlide: 0,
  speed: 300,
  loop: true,
  infinite: true,
  effect: 'slide',
  direction: 'horizontal',
  centeredSlides: true,
  slidesPerView: slideNumber,
  spaceBetween: 14,
  observer: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // responsive breakpoints
  breakpoints: {
    // when window width is <= 848px
    867: {
      slidesPerView: 2
    },
    // when window width is <= 480px
    503: {
      slidesPerView: 1,
    }
  }
});

// check if slide is blank and remove it
$('.swiper-slide').each(function(){
  if ($(this).html().length==0) $(this).parent().remove()
})

setTimeout(function(){
  mySwiper.update(true);
}, 100);

$(document).ready(function() {

  // check jquery connected
  if (jQuery) {
    console.log("jquery working");
  } else {
    console.log("jquery not working");
  }

  // set default colours for step boxes
  $('#first').css("background-color", "#717171");
  $('#second').css("background-color", "#AAAAAA");

  $('#loremtext').text(loremContent);

  $('#nextbutton').on('click', function () {

    if (pageCounter == 2) {

      formData.telephone = $('#firstbox').val();
      formData.emailaddress = $('#secondbox').val();

      // check not empty fields before submitting

      if ((formData.telephone) && (formData.emailaddress)) {
        console.log("form submitted, with the following data:", formData);
        window.confirm('Form submitted!');
      }

    } else {

      formData.firstname = $('#firstbox').val();
      formData.lastname = $('#secondbox').val();

      // check not empty fields before moving to page 2

      if ((formData.firstname) && (formData.lastname)) {

        $('#first').css("background-color", "#AAAAAA");
        $('#second').css("background-color", "#717171");

        $('#firstbox').val("");
        $('#secondbox').val("");

        // update the input form for page 2
        $('#firsttext').text("Telephone number:");
        $('#secondtext').text("Email address:");

        console.log('switching to input form page 2');
        pageCounter = 2;
      }
    }
  });
});






