// check JS connnected
console.log("javascript connected");

var pageCounter = 1;

$('.swiper-slide').each(function(){
  //Check if slide is blank and remove it
  if ($(this).html().length==0) $(this).parent().remove()
})

// initialize swiper
var mySwiper = new Swiper('.swiper-container', {
  initialSlide: 0,
  speed: 300,
  loop: true,
  infinite: true,
  effect: 'slide',
  direction: 'horizontal',
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 14,
  observer: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 848px
    867: {
      slidesPerView: 2
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
    }
  }
});

setTimeout(function(){
  mySwiper.update(true);
  // mySwiper.slideTo(0, 0)
}, 100);

// set up form data for submission
formData = {
  firstname: null,
  lastname: null,
  emailaddress: null,
  telephone: null
}

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

  $('#nextbutton').on('click', function () {

    if (pageCounter == 2) {
      console.log("submitting page");
      formData.telephone = $('#firstbox').val();
      formData.emailaddress = $('#secondbox').val();
      // $('#mainform').submit();
      console.log("Form submitted, with the following data:", formData);

      // can enable redirect to avamae site on form on submission
      // window.location = "https://www.avamae.co.uk/";
    } else {
      $('#first').css("background-color", "#AAAAAA");
      $('#second').css("background-color", "#717171");
      formData.firstname = $('#firstbox').val();
      formData.secondname = $('#secondbox').val();
      $('#firstbox').val("");
      $('#secondbox').val("");
      // update the input form
      $('#firsttext').text("Telephone number:");
      $('#secondtext').text("Email address:");

      console.log('switching to page 2');
      pageCounter = 2;
    }
  });
});






