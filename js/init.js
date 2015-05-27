(function ($) {
	Drupal.behaviors.creative_init = {
		attach: function (context, settings) {
			
			var win = $(window);
			var doc = $(document);
			var win_w = win.width();
			var win_h = win.height();
			var header = $('#header');
		
			$('#plane, #open-btn').click(function(event) {
				header.addClass('header-open');
				return false;
			});

			$('.arrow-down a').click(function(event) {
				$('html, body').animate({
			      scrollTop: $("#main").offset().top
			   }, 800);
				return false;
			});



			$('#header .close-btn').click(function(event) {
				header.removeClass('header-open');
				return false;
			});

			function showHeader(){
				header.addClass('header-open');
			}

			function hideHeader(){
				header.removeClass('header-open');
			}

			$('body').mousemove(function(event) {
				var mouseY = event.pageY;
				var scroll = win.scrollTop();
				var wPos = 260 + win.scrollTop();
				win_w = win.width();

				if(mouseY > wPos && win_w > 600){
					//showHeader();
					hideHeader();
				}else{
					
				}
			});


			win.scroll( function(){
		    
		       fadeOnScroll('#intro-1 p');
		    
		    });

			function fadeOnScroll(target){
	        $(target).each( function(i){
	            var $this = $(this);

	            var bottom_of_object = $this.offset().top + $this.outerHeight();
	            var bottom_of_window = win.scrollTop() + win.height();
	            
	            if( bottom_of_window > bottom_of_object ){ 
               	$this.animate({'opacity':'1'}, 500);   
	            }
	            
	        }); 
			}

		}
	}

	Drupal.behaviors.bg_init = {
		attach: function (context, settings) {
			
			if(Drupal.settings.bg_settings){
				var settings = Drupal.settings.bg_settings;
				var bg_image = settings.bg_image_url;
				var bg_holder = $('.bg .bg-image');

				//console.log(bg_image);

				bg_holder.css({
					'background': 'url(' + bg_image + ') no-repeat top center',
				  '-webkit-background-size': 'cover',
				  '-moz-background-size': 'cover',
				  '-o-background-size': 'cover',
				  'background-size': 'cover',
				});
			}

			//$('body').tubular({videoId: 'sOVfuvPgA6I'});
			

		}
	}


	Drupal.behaviors.translate = {
		attach: function (context, settings) {
			
			function translate(holder){
				var holder = $(holder);
				$('.translate', holder).hide();
				

				$('.translate.first').show();

				$('.translate .trigger', holder).click(function(event) {
					var target_index = $(this).data('target');
					var this_target = $('[data-index="' + target_index + '"]', holder);
					nextItem(holder, this_target);

					return false;
				});


			}

			function nextItem(holder, target){
				$('.translate', holder).hide();
				target.show();
			}

			translate('#aha-goals');
			translate('#cta');

		}
	}
})(jQuery);


