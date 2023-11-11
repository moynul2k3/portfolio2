$(document).ready(function(){
	var contentSection = $('section');
	var navigation = $('nav');
	
	//when a nav link is clicked, smooth scroll to the section
	navigation.on('click', 'a', function(event){
		event.preventDefault(); //prevents previous event
		smoothScroll($(this.hash));
	});
	
	//update navigation on scroll...
	$(window).on('scroll', function(){
		updateNavigation();
	})
	//...and when the page starts
	updateNavigation();
	
	/////FUNCTIONS
	function updateNavigation(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			var sidenavigationMatch = $('.side_navbar a[href="#' + sectionName + '"]');
			var topnavigationMatch = $('.top_navbar a[href="#' + sectionName + '"]');
			if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
				($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
				{
                    
					topnavigationMatch.css("color", "#ff0000");
                    sidenavigationMatch.css("background", "#ff0000");
                    
                    // navigationMatch.addClass('active-section');
                
				}
			else {
                topnavigationMatch.css("color", "");
                sidenavigationMatch.css("background", "");
			}
		});
	}
	function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top
		}, 0);
    }
    




    $(document).scroll(function(){
        var height = $(".header").height();

        if( $(this).scrollTop() > height){
            // $(".header").css("background-color", "rgba(0, 14, 24, 0.8)");
        }
        else{
            $(".header").css("background-color","");
        }

    });
});






// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');


// var obj = document.getElementById("active");
// obj.style.backgroundColor = "red";

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.clientHeight;
//         let id = sec.getAttribute('id');

//         if (top > offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 linkSync.classList.remove('active');
//                 document.querySelector('header nav a [href*=' + id + ']').classList.add('active');;
//             });
//     });
// };