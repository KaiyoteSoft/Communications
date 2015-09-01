$(document).ready(function() {
  //$('#data').displayalldatapoints(ip);
  $('body').keydown(function(e) {
    if (e.keyCode == 13) {
      searchName();
    }
  })
});

function processData() {
	jdata = " ";
	// var name = "Kai";
	$('#loading').html("Loading... ");

	jQuery.ajax({
		url: "https://communications.apispark.net:443/v1/form_Responses_1s/",
		type: "GET",
		contentType: 'application/json; charset=utf-8',
		success: function(resultData) {
		jdata = resultData;
		// console.log(jdata.length);
		listContainer = [];


		var i = jdata.length - 1;
		console.log(i);
		for (i; i > 0; i--) {
			// if (jdata[i].firstName == name) {
			var name = jdata[i].Name;
			var url = jdata[i].urlLink;
			var description = jdata[i].Description;
			var date = jdata[i].Timestamp;
			var type = jdata[i].Type;
			// console.log(firstName);
			  listContainer.push("<tr> <td><a href='" + url + "' target='_blank'>" + url + "</a>" + 
			  	"</td> <td>" + type + "</td> <td>" + name + "</td> <td>" + description + 
			  	"</td> <td>" + date + "</td> </tr>"); 
			};

		var data = "<table> <tr><th>Url Link</th><th>Type</th>" + 
		" <th>Student Name</th> <th>Description</th> <th>Date Submitted</th> </tr>" + listContainer + "</table>";

		$('#loading').html(" ");
		$('#work').html(data);
		}
	});
};

function searchName() {
	$('#work').html(" ");
	$('#loading').html("Loading...");
	listContainer = [];
	i = jdata.length - 1;
	count = 0;
	var searchValue = $('#search').val();
	for (i; i > 0; i--) {
		var nameData = jdata[i].Name;
		if (nameData.startsWith(searchValue)) {
			console.log(searchValue);
			var name = jdata[i].Name;
			var url = jdata[i].urlLink;
			var description = jdata[i].Description;
			var date = jdata[i].Timestamp;
			var type = jdata[i].Type;
			count = count + 1;
			 listContainer.push("<tr> <td><a href='" + url + "' target='_blank'>" + url + "</a>" + 
			  	"</td> <td>" + type + "</td> <td>" + name + "</td> <td>" + description + 
			  	"</td> <td>" + date + "</td> </tr>");
		};


	var data = "<table> <tr><th>Url Link</th><th>Type</th>" + 
		" <th>Student Name</th> <th>Description</th> <th>Date Submitted</th> </tr>" + listContainer + "</table>";

	$('#loading').html(" ");
	$('#work').html(data);
	}
	if (count < 1) {
		// $('#work').html(" ");
		listContainer.push("<tr> <td colspan='6'>What you searched for was" + 
        " not available in our database </td> </tr>");
		alert("The name you searched for was not found. Make sure the spelling and capitalzation " + 
			"of the student's name is correct");
		var data = "<table> <tr><th>Url Link</th><th>First Name</th>" + 
		" <th>Last Name</th> <th>Description</th> <th>Date Submitted</th> </tr>" + listContainer + "</table>";
		$('#work').html(data);
		}
};

