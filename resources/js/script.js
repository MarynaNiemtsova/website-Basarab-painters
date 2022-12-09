$(document).ready(function() {
    
    
    /* For the sticky navigation */
	
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
			
            var nav = $('nav');
            nav.addClass('sticky');
			
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    

/* Scroll on button*/	
	$('.js--scroll-to-form').click(function () {
		
		$('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
	});
	
	$('.js--scroll-to-start').click(function () {
		
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	 
	/*Navigation scroll*/
	
	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	
	/*Animation on scroll */
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated zoomInRight');
	}, {
		offset: '70%'
	});
    $('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset: '60%'
	});
    $('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated slideInLeft');
	}, {
		offset: '60%'
	});
    $('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated pulse');
	}, {
		offset: '60%'
	});
	$('.js--wp-5').waypoint(function(direction) {
		$('.js--wp-5').addClass('animated fadeInDown');
	}, {
		offset: '95%'
	});
    $('.js--wp-6').waypoint(function(direction) {
		$('.js--wp-6').addClass('animated zoomInRight');
	}, {
		offset: '70%'
	});
	
	/* Mobile nav*/
	
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
        var body = $('.js--nav-body');
		
        
		nav.slideToggle(300);
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
            body.addClass('lock');
            
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
            body.removeClass('lock');
            
		}
	});
    
});

$('.js--main-nav-li').click(function() {
    
    
    
var navli = $('.js--main-nav-li');
 var nav = $('.js--main-nav');
 var icon = $('.js--nav-icon i');
var body = $('.js--nav-body');
var mobicon = $('.mobile-nav-icon')    


    var displayVal = $('.mobile-nav-icon').css('display');
    
    if (displayVal === 'block'){
        
        nav.hide(300); 
        
        body.removeClass('lock');
        icon.removeClass('ion-close-round'); 
        icon.addClass('ion-navicon-round'); 
        
    } 

});





//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}









