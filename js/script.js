AOS.init();

$('.test-popup-link').magnificPopup({
    type: 'image'
});

$({ Counter: 0 }).animate({
    Counter: $('.count-num').text()
}, {
    duration: 1000,
    easing: 'swing',
    step: function() {
        $('.Single').text((this.Counter));
    }
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-7742845-9', 'inorganik.github.io');
    ga('send', 'pageview');
    

//Navbar color chnage
function scroll(){
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 80) {
                $('#menu').css("background" , "#0e0d0c");
            }
            else{
                $('#menu').css("background" , "#0000008f");
            }
        })
    })
}

// Button Click
function btnClick(){
    $('#menu').css("background" , "#020712");
}
function focusout(){
    $('#menu').css("background" , "transparent");
}

// Search Button Action
function searchAction() {
    var searchBtn = document.getElementById("searchBtn");
    if (searchBtn.style.width == '320px') {
        searchBtn.style.width = '0';
        searchBtn.style.opacity = 0;
        searchBtn.classList.remove("fadeInRightBig");
        searchBtn.classList.add("fadeInLeftBig");
    } else {
        searchBtn.style.width = "320px";
        searchBtn.style.opacity = 1;
        var count = document.querySelectorAll("section").length;
        var sections = document.querySelectorAll("section");
        var i;
        for (i = 0; i < count; i++) {
            var color = window.getComputedStyle(sections[i], null).getPropertyValue("background-color");
            if(color == "rgb(255, 255, 255)"){
                // document.getElementById("inputbox").style.background = "#262626";
                // document.getElementById("button-addon2").style.borderColor = "#262626";
            }
        }
    }
}


document.getElementById("count").innerHTML= count;
// Swiper click
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Skilss Load
function skill(){
    $(document).ready(function(){

        $('#bar1').barfiller();
        $('#bar2').barfiller();
        $('#bar3').barfiller();
        $('#bar4').barfiller();
        
    });
}

// Gallery Padding Fix
function fixPadding(){
    var galleryItem = document.getElementById("gallery-item");
    if(galleryItem.style.paddingTop == '30px'){
        galleryItem.style.paddingTop = '0px';
    }
    else{
        galleryItem.style.paddingTop = '30px';
    }
}

// Toggle
function toggleFunction(){
    $('#visibility').visibilityToggle();
    return false;
}

// Wow js
var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animation', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
         resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();

// 
$(document).on("scroll", function(){
    if
    ($(document).scrollTop() > 86){
        $("#banner").addClass("shrink");
    }
    else
    {
        $("#banner").removeClass("shrink");
    }
});


