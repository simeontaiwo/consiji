$(document).ready(function(){
	
	"use strict";
	
    /* 
	=======================================================================
	  		 	select script
	======================================================================= */
  	$('.selectpicker').selectric();
        
    if($('.kodeslider-section').length){
	   $(".kode-traders-datail").hover(
	        function () {
	          $(this).addClass("active");
	        },
	        function () {
	          $(this).removeClass("active");
	        }
	  	)
	}     

	/* ==============================================================
		   OWL Carousel
	   ============================================================== */
   
	if($('.big-images').length){
	var $sync1 = $(".big-images"),
		$sync2 = $(".thumbs"),
		flag = false,
		duration = 300;
		$sync1.owlCarousel({
			items: 1,
			margin: 10,
            mouseDrag: false,
            autoPlay : true,
            loop:true,
            nav: true
		})
		.on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;
				$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
				flag = false;
			}
		});

		$sync2.owlCarousel({
			margin: 0,
			items: 4,
			mouseDrag: false
 
			
		}).on('click', '.owl-item', function () {
			$sync1.trigger('to.owl.carousel', [$(this).index(), duration, 300, true]);

		}).on('changed.owl.carousel', function (e) {
			if (!flag) {
				flag = true;		
				$sync1.trigger('to.owl.carousel', [e.item.index, duration, 300, true]);
				flag = false;
			}
		});
	}
	/* ==============================================================
	   Banner Bx-Slider Script Start
	============================================================== */
	if($('.bsslider2').length){
		$('.bsslider2').bxSlider({	
			auto:true
		});
	}
	
	/* ==============================================================
		Count Down Script Start
	============================================================== */
	if($('.countdown').length){
        $('.countdown').downCount({ date: '08/08/2016 12:00:00', offset: +1 });
    }
		
	/* ==============================================================
		testimonial Carousel Script Start
	============================================================== */

	if($('.banner-slider2').length){
		$('.banner-slider2').owlCarousel({
			center:true,
			autoplay:true,
			margin:0,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:2
				},
				1600:{
					items:1
				}
			}
		});
	}

	if($('.kodeslider-section').length){
		$('.kodeslider-section').owlCarousel({
			loop:true,
			center:true,
			margin:0,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:3
				},
				1600:{
					items:3
				}
			}
		});
	}
	/* ==============================================================
		testimonial Carousel Script Start
	============================================================== */
	if($('.kodesilder2-section').length){
		$('.kodesilder2-section').owlCarousel({
			loop:true,
			autoplay:true,
			margin:0,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:2
				},
				1600:{
					items:4
				}
			}
		});
	}
	/* ==============================================================
		Home page 2 kode-brands-section Script Start
	============================================================== */
	if($('.kode-brands-section').length){
		$('.kode-brands-section').owlCarousel({
			loop:true,
			autoplay:true,
			margin:30,
			responsive:{
				0:{
					items:2
				},
				450:{
					items:2
				},
				600:{
					items:2
				},
				1000:{
					items:3
				},
				1600:{
					items:4
				}
			}
		});
	}
	/* ==============================================================
		Home page 2 kode-testimonial Script Start
	============================================================== */
	if($('.kode-testimonial-home2').length){
		$('.kode-testimonial-home2').owlCarousel({
			loop:true,
			autoplay:true,
			margin:0,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				},
				1600:{
					items:1
				}
			}
		});
	}
	/* ==============================================================
		INNER PAGE BLOG DETAIL Script Start
	============================================================== */
	if($('.kode-financial-rt-slider-id').length){
		$('.kode-financial-rt-slider-id').owlCarousel({
			loop:true,
			autoplay:true,
			margin:0,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
				
			}
		});
	}
	/* ==============================================================
		Planing Carousel Script Start
	============================================================== */
	if($('.kodeplaning-section').length){
		$('.kodeplaning-section').owlCarousel({
			loop:true,
			center:true,
			
			margin:0,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				},
				1600:{
					items:5
				}
			}
		});
	}
	/* ==============================================================
		Planing Carousel Script Start
	============================================================== */
	if($('.kode-testimonial-section').length){
		$('.kode-testimonial-section').owlCarousel({
			autoplay:true,
			margin:30,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				450:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:2
				},
				1600:{
					items:2
				}
			}
		});
	}

	/* =======================================================================
		  		 go-up Script
	   =======================================================================
	*/	
	 $(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('.go-up').fadeIn();
		} else {
			$('.go-up').fadeOut();
		}
	});
	$('.go-up').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	/* ---------------------------------------------------------------------- */
		/*		DL Responsive Menu
	/* ---------------------------------------------------------------------- */
	if($('.spincrement').length){
		$('.spincrement').spincrement({
			from: 0.0,
			decimalPlaces: 0,
			duration: 2000,
		});
	}
		
	/*
	==============================================================
	   tabs Script Start
	==============================================================  */
	
	/*
	==============================================================
	   Progress Bar Script Start
	============================================================== */  
	if($('.progressbar').length){
	$('.progressbar').each(function(){
		var t = $(this),
			dataperc = t.attr('data-perc'),
			barperc = Math.round(dataperc*5.56);
		t.find('.bar').animate({width:barperc}, dataperc*25);
		t.find('.label').append('<div class="perc"></div>');
		
		function perc() {
			var length = t.find('.bar').css('width'),
				perc = Math.round(parseInt(length)/5.56),
				labelpos = (parseInt(length)-2);
			t.find('.perc').text(perc+'%');
		}
		perc();
		setInterval(perc, 0); 
	});
	}
	/*
	==============================================================
	   Choose US Script Start
	============================================================== */  
	if($('.for-accodien').length){
		//custom animation for open/close
		$.fn.slideFadeToggle = function(speed, easing, callback) {
		  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
		};

		$('.for-accodien').accordion({
		  defaultOpen: 'accodien-one',
		  cookieName: 'nav',
		  speed: 'slow',
		  animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
			elem.next().stop(true, true).slideFadeToggle(opts.speed);
		  },
		  animateClose: function (elem, opts) { //replace the standard slideDown with custom function
			elem.next().stop(true, true).slideFadeToggle(opts.speed);
		  }
		});
	} 

	
	
	/* ---------------------------------------------------------------------- */
	/*	DL Responsive Menu
	/* ---------------------------------------------------------------------- */
	if(typeof($.fn.dlmenu) == 'function'){
		$('#kode-responsive-navigation').each(function(){
			$(this).find('.dl-submenu').each(function(){
				if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
					var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
					parent_nav.append($(this).siblings('a').clone());
					
					$(this).prepend(parent_nav);
				}
			});
			$(this).dlmenu();
		});
	}

	   
   /* =======================================================================
				Filterable Gallery Script
   ======================================================================= */
	    
	var filter_container = jQuery('#filterable-item-holder-1');

	filter_container.children().css('position','relative'); 
	filter_container.masonry({
		singleMode: true,
		itemSelector: '.filterable-item:not(.hide)',
		animate: true,
		animationOptions:{ duration: 800, queue: false }
	}); 
	jQuery(window).resize(function(){
		var temp_width =  filter_container.children().filter(':first');
		filter_container.masonry({
			columnWidth: temp_width,
			singleMode: true,
			itemSelector: '.filterable-item:not(.hide)',
			animate: true,
			animationOptions:{ duration: 800, queue: false }
		});   
	}); 
	jQuery('ul#filterable-item-filter-1 button').click(function(e){  

		jQuery(this).addClass("active");
		jQuery(this).parents("li").siblings().children("button").removeClass("active");
		e.preventDefault();

		var select_filter = jQuery(this).attr('data-value');

		if( select_filter == "All" || jQuery(this).parent().index() == 0 ){   
			filter_container.children().each(function(){
				if( jQuery(this).hasClass('hide') ){
					jQuery(this).removeClass('hide');
					jQuery(this).fadeIn();
				}
			});
		}else{
			filter_container.children().not('.' + select_filter).each(function(){
				if( !jQuery(this).hasClass('hide') ){
					jQuery(this).addClass('hide');
					jQuery(this).fadeOut();
				}
			});
			filter_container.children('.' + select_filter).each(function(){
				if( jQuery(this).hasClass('hide') ){
					jQuery(this).removeClass('hide');
					jQuery(this).fadeIn();
				}
			});
		}

		filter_container.masonry(); 

	});

	/* 
	=======================================================================
	  		 	Pretty Photo Script
	======================================================================= */
	if($("a[data-rel^='prettyPhoto']").length){
		$("a[data-rel^='prettyPhoto']").prettyPhoto();
	}
	

	/*
	  =======================================================================
		  		Map Calling Script Script
	  =======================================================================
	*/
	if($('#map-canvas').length){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	
	if($('#curve_chart').length){
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);
	}		/*	  =======================================================================		  		 combobox Script	  =======================================================================	*/		if($('.location-select').length){		$('.location-select').not('multiple').change(function(){			var wrapper = $(this).attr('data-slug') + '-wrapper';			var selected_wrapper = $(this).val();			var dd = $(this).parents('.kode-financial-bottom-border').children('.kode-financial-right').html();						$(this).parents('.kode-financial-bottom-border').children('.kode-financial-right').find('.'+selected_wrapper).each(function(){								if($(this).hasClass(selected_wrapper)){					$('.'+selected_wrapper).parent().children().hide();					$(this).css('display', 'block');				}else{					$('.'+selected_wrapper).parent().children().hide();					$(this).css('display', 'none');				}			});		});	}	if($('.location-select').length){		$('.location-select').not('multiple').each(function(){			var wrapper = $(this).attr('data-slug') + '-wrapper';			var selected_wrapper = $(this).val();			var dd = $(this).parents('.kode-financial-bottom-border').children('.kode-financial-right').html();						$(this).parents('.kode-financial-bottom-border').children('.kode-financial-right').find('.'+selected_wrapper).each(function(){								if($(this).hasClass(selected_wrapper)){					$('.'+selected_wrapper).parent().children().hide();					$(this).css('display', 'block');				}else{					$('.'+selected_wrapper).parent().children().hide();					$(this).css('display', 'none');				}			});		});	}

});

/*
	  =======================================================================
				Map Style Script
	  =======================================================================
	*/
		function initialize() {
			var MY_MAPTYPE_ID = 'custom_style';
			var map;
			var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
			var featureOpts = [
				{
				  stylers: [
					{ hue: '#f9f9f9' },			
					{ visibility: 'simplified' },
					{ gamma: 0.7 },
					{ saturation: -200 },
					{ lightness: 45 },
					{ weight: 0.6 }
				  ]
				},
				{
				featureType: "road",
				  elementType: "geometry",
				  stylers: [
					{ lightness: 200 },
					{ visibility: "simplified" }
				  ]
				},
				{
				  elementType: 'labels',
				  stylers: [		  
					{ visibility: 'on' }
				  ]
				},
				{
				  featureType: 'water',
				  stylers: [
					{ color: '#ffffff' }
				  ]
				}
			];	
		
			var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: brooklyn,
				mapTypeControlOptions: {
				  mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
				},
				mapTypeId: MY_MAPTYPE_ID
			};
		
			map = new google.maps.Map(document.getElementById('map-canvas'),
				  mapOptions);
		
			var styledMapOptions = {
				name: 'Custom Style'
			};
		
			var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
		
			map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
		}
/* 
	=======================================================================
	  		 	google charts Script
	======================================================================= */

 	
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  5000,      1000],
          ['2014',  100,      5000],
          ['2015',  8000,      1900],
          ['2016',  12000,      1000]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
       }
      
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
 
  	}			
	  	