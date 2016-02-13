$(document).ready(function(){

	// swiper slider
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: false
    });

	// header animation

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 450){
			if(!flag){
				$(".logo").css({"width": "135px"});
				// $("header").css({"background": "blue"});
				$(".nav-2 li").css({"font-size": "11px"});
				$("header .nav-2 li:last-child a").css({"padding": "2px 15px"});
				$(".language select").css({"padding": "5px 10px"});
				$("header .nav-2").css({"margin-top": "4px"});
				$("header").css({"padding": "12px 0"});
				flag = true;
			}
		}else{
			if(flag){
				$(".logo").css({"width": "180px"});
				// $("header").css({"background": "rgba(255,255,255,0.96)"});
				$(".nav-2 li").css({"font-size": "14px"});
				$("header .nav-2 li:last-child a").css({"padding": "5px 15px"});
				$(".language select").css({"padding": "8px 10px"});
				$("header .nav-2").css({"margin-top": "15px"});
				$("header").css({"padding": "20px 0"});
				flag = false;
			}
		}


	});

});

// Ver más

$('.see_more').click(function(){
			var $this = $(this);
			$this.toggleClass('see_more');

			if($this.hasClass('see_more')){
				$this.text('Ver más');
				// $this.addClass('fa-sort-desc');	
			} else {
				$this.text('Ver menos');
				// $this.addClass('fa-sort-asc');	
			}
		});