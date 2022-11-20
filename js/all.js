// JavaScript Document
$(document).ready(function(){
	$(".login").click(function(){
		var inputnum = document.getElementById("number");
		var number = inputnum.value;
		var inputpw = document.getElementById("password");
		var password = inputpw.value;
		if( number=="1" && password=="1"){
			$(".initial-page").fadeOut(200);
		}else{
			alert("健保卡號或身分證錯誤");
		}
	});
	$(".bc1").click("")
	
});


