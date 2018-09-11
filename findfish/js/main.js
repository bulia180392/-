$(function(){

	
	$(".btn_order").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	var name = $('input[name=name]').val(); 
	var phone = $('input[name=phone]').val();
	var otpravka = true;
	if(name==""){ 
	otpravka = false;
	}
	if(phone ==""){
	otpravka = false;
	}
	dannie = {'polz_name':name, 'polz_phone':phone};
	if(otpravka) 
	{
	$.post('senda.php', dannie, function(otvet){ 
	rezultat = '<div>'+otvet.text+'</div>';
	$("#form_result").hide().html(rezultat).slideDown();
	}, 'json');
	}
	$(".answer").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	var name = $('input[name=name]').val(); 
	var phone = $('input[name=phone]').val();
	var otpravka = true;
	if(name==""){ 
	otpravka = false;
	}
	if(phone ==""){
	otpravka = false;
	}
	dannie = {'polz_name':name, 'polz_phone':phone};
	if(otpravka) 
	{
	$.post('senda.php', dannie, function(otvet){ 
	rezultat = '<div>'+otvet.text+'</div>';
	$("#form_result").hide().html(rezultat).slideDown();
	}, 'json');
	}
$(".btn_click").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	var name = $('input[name=name]').val(); 
	var phone = $('input[name=phone]').val();
	var otpravka = true;
	if(name==""){ 
	otpravka = false;
	}
	if(phone ==""){
	otpravka = false;
	}
	dannie = {'polz_name':name, 'polz_phone':phone};
	if(otpravka) 
	{
	$.post('senda.php', dannie, function(otvet){ 
	rezultat = '<div>'+otvet.text+'</div>';
	$("#form_result").hide().html(rezultat).slideDown();
	}, 'json');
	}
});