
			/* f�r Kachel-Galerie */
			$(function () {
                $(".tiles").tilesGallery({
                    tileMinHeight: 200
                });
            });   

			/* f�r Image Map */
			$(window).load(function(ev) {
				
				$('img[usemap]').rwdImageMaps();
		
			/* f�r Popup in der Image Map */	
				$('area').on('click', function(event) {
                    event.preventDefault();/* wenn man diese Zeile entfernt �ffnet/schlie�t sich Popup sofort */
                    var sel= $(this).attr('href');
                    $(sel).popup("open")
                });
			});
			