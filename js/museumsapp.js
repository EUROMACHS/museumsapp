
			/* für Kachel-Galerie */
			$(function () {
                $(".tiles").tilesGallery({
                    tileMinHeight: 200
                });
            });   

			/* für Image Map */
			$(window).load(function(ev) {
				
				$('img[usemap]').rwdImageMaps();
		
			/* für Popup in der Image Map */	
				$('area').on('click', function(event) {
                    event.preventDefault();/* wenn man diese Zeile entfernt öffnet/schließt sich Popup sofort */
                    var sel= $(this).attr('href');
                    $(sel).popup("open")
                });
			});
			