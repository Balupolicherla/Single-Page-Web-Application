$('input#quantity').on('input',function(e){
	var price = 100;
	var totalPrice = e.target.value * price;
	$('.total-price').text('Total Price: $' + totalPrice)
});

$('#add-to-cart').click(function(){
	checkPincode();
});

$('#check').click(function(){
	checkPincode();
});


function checkPincode() {
	var pincode = $("#pincode").val();
	if(pincode === '') {
		$('#alert1').addClass('alert-danger');
		$('#alert1').text("Please Enter Pincode");
		$('#alert2').removeClass('alert-success');
		$('#alert2').removeClass('alert-danger');
		$('#alert2').text("");
		$(".add_cart_buy_btn").prop("disabled", true);
	} else {
		$('#alert1').removeClass('alert-danger');
		$('#alert1').text("");
		var pin = parseInt(pincode);
		if(pin === 560017 || pin === 560018 || pin === 560019 || pin === 560020){
			$('#alert2').addClass('alert-danger');
			$('#alert2').text("Sorry, You are not eligible for COD");
			$(".add_cart_buy_btn").prop("disabled", true);
		} else {
			$('#alert2').removeClass('alert-danger');
			$('#alert2').addClass('alert-success');
			$('#alert2').text("You are eligible for COD");
			$(".add_cart_buy_btn").prop("disabled", false);
		}
	}
}