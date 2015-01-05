 $(document).ready(function() {

var inscription = $('.inscription');
var span = $('span');
var nombre = 0;
var result = $('.result');

	inscription.click(function(event){
		
event.preventDefault();

if (nombre < 5) {
//il n y a que 5 places
nombre++;
console.log(nombre);
span.text(" "+ nombre +" ");	
}
else{
	alert("plus de place");
	
	result.css("color","#F8F8F8");
	$(".result").addClass("off");

}



		

	});
    });