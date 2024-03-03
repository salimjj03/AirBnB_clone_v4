$(() => {
	let url = 'http://0.0.0.0:5001/api/v1/status/'
	let url2 ='http://0.0.0.0:5001/api/v1/places_search/';
	let aminities = {};
	const j_data = {};
	const p_data = {};
	$('INPUT[type="checkbox"]').change(function () {
		if ($(this).is(':checked')) {
			aminities[$(this).attr("data-id")] = $(this).attr("data-name");
		}
		else {
			delete aminities[$(this).attr("data-id")];
		}
		$('.amenities h4').text(Object.values(aminities).join(', '));
	}
	);
	$.get(url, (data, textStatus) => {
		if (data['status'] === 'OK') {
			$('div#api_status').addClass('available');
		}
		else {
			$('div#api_status').removeClass('available');
		}
	})
	$.post(url2, j_data, (data) => {
		data.forEach((place) => {
		$("section.places").append(
		'<article>' +
                '<div class="title_box">' +
                    '<h2>' + place.name + '</h2>' +
                    '<div class="price_by_night">$' + place.price_by_night + '</div>' +
                '</div>' +
                '<div class="information">' +
                    '<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest != 1 ? 's' : '') + '</div>' +
                    '<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms != 1 ? 's' : '') + '</div>' +
                    '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms != 1 ? 's' : '') + '</div>' +
                '</div>' +
                '<div class="user">' +
                    '<b>Owner:</b> ' + place.user.first_name + ' ' + place.user.last_name +
                '</div>' +
                '<div class="description">' +
                    place.description +
                '</div>' +
            '</article>'
		);
	});
	})
	$('button').click(() => {
		p_data['amenities'] = Object.keys(aminities);
		$.post(url2, aminities, (data) => {
			console.log('Response data:', data);
		})
	})
	
});

