
			/* f�r Kachel-Galerie */
			
			$(function () {
                $(".tiles").tilesGallery({
                    tileMinHeight: 200
                });
            });   

			/* f�r Image Map */
			$(document).ready(function(ev) {
			
			    $('img[usemap]').rwdImageMaps();
			
				$( window ).hashchange(function() {
					 setTimeout( function() {
					 console.info("hello1");
					$('img[usemap]').rwdImageMaps();
					},200);
				});
				/*
					setTimeout(function() {
				$(".tiles").tilesGallery.event.trigger(".tiles",'resize');
				}, 200);*/
				
			/* f�r Popup in der Image Map */	
				$('area').on('click', function(event) {
                    event.preventDefault();/* wenn man diese Zeile entfernt �ffnet/schlie�t sich Popup sofort */
                    var sel= $(this).attr('href');
                    $(sel).popup("open")
                });
			});
			