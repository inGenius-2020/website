$(document).ready(function() {
	// Validación para cuando le de click al botón de ir arriba y al botón del footer-mobil lo lleve a la posicion 0 del scroll
	$('#btn-go-to-up').on('click', function() {
		$('html').animate({
			scrollTop: '0px'
		}, 100);
	});

	$(window).on('load scroll resize', function() {
		if($(this).scrollTop() < $(window).height()-10)
			$('#btn-go-to-up').css('display','block');
		if ($(this).scrollTop() > $(window).height()) {
		//	 Si el scroll pasa de "winH" el botón de ir arriba aparece
			$('#btn-go-to-up').css('display','block');
			$('#btn-go-to-up').removeClass('hide-btn-go-to-up');
		}

		else {
			// De lo contrario el botón de ir arriba se esconde
			$('#btn-go-to-up').addClass('hide-btn-go-to-up');
		}
	});

	// Validación para cunado le dan click a los botones al que le de click no se quede con el focus marcado
	$('button').on('click', function() {
		//console.log('click');
		$(this).blur();
	});

});
