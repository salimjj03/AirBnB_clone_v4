$(() => {
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
});
