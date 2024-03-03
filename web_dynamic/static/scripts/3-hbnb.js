$(() => {
	let url ='http://0.0.0.0:5001/api/v1/places_search/';
	let aminities = {}
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
});
