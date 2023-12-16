$(document).ready(function(){
    console.log("Dvwdvww");
    $(window).scroll(function() {
        // Check if the scroll position is greater than or equal to 500px
        if ($(this).scrollTop() >= 300) {
          // Add the 'scrolled' class to the header
          $('header').addClass('animateUP');
          $('.secondary-header-div').addClass('animateUp2');
          $('.header1').css({'backgroundColor': 'rgba(233, 233, 233, 0.7)'})
        } else {
          // Remove the 'scrolled' class if the scroll position is less than 500px
          $('header').removeClass('animateUP');
          $('.secondary-header-div').removeClass('animateUp2');
        }
        // if ($(this).scrollTop() >= 800) {
        //   $('.secondary-header-div-a').css({color: '#000'})
        //  } else {
        //   $('.secondary-header-div-a').css({color: '#fff'})
        //  }
      });

  });