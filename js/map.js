
		
		$(document).ready(function(ev) {
		
			var map = L.map('map').setView([47.5, 3.16], 5);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
				maxZoom: 18,
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
					'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
					'Imagery © <a href="http://mapbox.com">Mapbox</a>',
				id: 'mapbox.streets'
			}).addTo(map);
			
			var marker = L.marker([51.51, -0.099]).addTo(map);
			
			marker.bindPopup($('<a href="./museen.html#seiteTateModern" data-ajax="false">Tate Modern</a>').click(function() {
			})[0]);
			
			var marker = L.marker([50.94, 6.96]).addTo(map);
			
			marker.bindPopup($('<a href="./museen.html#seiteMuseumLudwig" data-ajax="false">Museum Ludwig</a>').click(function() {
			})[0]);
			
			var marker = L.marker([48.86, 2.36]).addTo(map);
			
			marker.bindPopup($('<a href="./museen.html#seiteMuseePicasso" data-ajax="false">Musée Picasso</a>').click(function() {
			})[0]);
			
			var marker = L.marker([40.41, -3.69]).addTo(map);
			
			marker.bindPopup($('<a href="./museen.html#seiteMuseoReinaSofia" data-ajax="false">Museo Reina Sofía</a>').click(function() {
			})[0]);		
		
			setTimeout(map.invalidateSize.bind(map));
		
		});