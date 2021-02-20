$(document).ready(function(){
	// Codes here
	$('input[type=text]').focus(function(){
		$(this).addClass('highlights');
	}).blur(function(){
		$(this).removeClass('highlights');
	});

	$('#email').focus(function(){
		$(this).addClass('highlights');
	}).blur(function(){
		$(this).removeClass('highlights');
	});

	$('#message').focus(function(){
		$(this).addClass('highlights');
	}).blur(function(){
		$(this).removeClass('highlights');
	});
});