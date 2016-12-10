$('document').ready(function(){
	// $('p').css('visibility', 'hidden' );
	$('.hidden-test').on('click', hiddenTest);
	$('#even').on('click', hiddenEven);
	$('#odd').on('click', hiddenOdd);
	// $('.hidden-p').on('click', hiddenP);
	$('.hidden-p').dblclick('dblclick', doubleClickP);
	$('span').hover(hoverHiddenSpan);
}

});


function hiddenTest() {
	$('#test').css('visibility', 'hidden');
}

function hiddenEven() {
	$('h2:even').css('visibility', 'hidden');
}

function hiddenOdd() {
	$('h2:odd').css('visibility', 'hidden');
}

// function hiddenP() {
// 	$(this).css('visibility', 'hidden');
// }

function doubleClickP() {
	$(this).css('visibility', 'hidden');
}

function hoverHiddenSpan() {
	$(this).css('visibility', 'hidden');
}
