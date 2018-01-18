// Intercept form submission and submit the form with ajax
$('#jsonform').on('submit', function(e) {
  // Prevent submit event from bubbling and automatically submitting the
  // form
  e.preventDefault();

  $.ajax({
      url: '/docs',
      method: 'POST',
      dataType: 'json',
      data: {
          data: $('#textarea').val(),
      }
  }).done(function(data) {
      // The JSON sent back from the server will contain a success message
      let urlfield = document.getElementById('urlfield');
      urlfield.value = "";
      urlfield.value = urlfield.value + data.url;
      alert(data.message)
  }).fail(function(error) {
      alert(error.toString());
  });
});

// $("#showjson").click(function(){
//   let jsonurl = prompt("Please enter the url to yor json data");
// 	$.ajax({url: jsonurl, success: function(result){
//       $("#viewdata").html(result);
//   }});
// });

// function getid(url){
//     //split url to array
//     //get last four values
//     //return last four values
// }
// $("#updatejson").click(function(){
//   let jsonurl = prompt("Please enter the url to yor json data");
// 	$.ajax({url: jsonurl, success: function(result){
// 		let textarea = document.getElementById('textarea');
// 		textarea.value = "";
// 		textarea.value = textarea.value + result;
// 		//$("#viewdata").html(result);
// }});

	// $.ajax({
	// 	url: '/docs/'+id,
	// 	method: 'GET',
	// 	dataType: 'json',
	// }).done(function(data) {
	// 	// The JSON sent back from the server will contain a success message
	// 	let textarea = document.getElementById('textarea');
	// 	textarea.value = "";
	// 	textarea.value = textarea.value + data.data;
	// }).fail(function(error) {
	// 	alert(error.toString());
	// });
// });



