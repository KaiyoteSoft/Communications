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
	var name = "Kai";
	$('#loading').html("Loading... ");

	jQuery.ajax({
		url: "https://communicationsinput.apispark.net/v1/sheet1s/",
		type: "GET",
		contentType: 'application/json; charset=utf-8',
		success: function(resultData) {
		jdata = resultData;
		// console.log(jdata.length);
		listContainer = [];

		var i = 0;
		for (i; i < jdata.length; i++) {
			// if (jdata[i].firstName == name) {
			var firstName = jdata[i].firstName;
			var lastName = jdata[i].lastName;
			var url = jdata[i].urlLink;
			var description = jdata[i].Description;
			var date = jdata[i].Date;
			// console.log(firstName);
			  listContainer.push("<tr> <td><a href='" + url + "' target='_blank'>" + url + "</a>" + 
			  	"</td> <td>" + firstName + "</td>" + "<td>" + lastName + "</td> <td>" + description + 
			  	"</td> <td>" + date + "</td> </tr>"); 
			};

		var data = "<table> <tr><th>Url Link</th><th>First Name</th>" + 
		" <th>Last Name</th> <th>Description</th> <th>Date Submitted</th> </tr>" + listContainer + "</table>";

		$('#loading').html(" ");
		$('#work').html(data);
		}
	});
};

function searchName() {
	$('#work').html(" ");
	$('#loading').html("Loading...");
	listContainer = [];
	i = 0;
	count = 0;
	var searchValue = $('#search').val();
	for (i; i < jdata.length; i++) {
		var nameData = jdata[i].firstName;
		if (nameData.startsWith(searchValue)) {
			console.log("searchValue");
			var firstName = jdata[i].firstName;
			var lastName = jdata[i].lastName;
			var url = jdata[i].urlLink;
			var description = jdata[i].Description;
			var date = jdata[i].Date;
			count = count + 1;
			listContainer.push("<tr> <td><a href='" + url + "' target='_blank'>" + url + "</a>" + 
			  	"</td> <td>" + firstName + "</td>" + "<td>" + lastName + "</td> <td>" + description + 
			  	"</td> <td>" + date + "</td> </tr>"); 
		};


	var data = "<table> <tr><th>Url Link</th><th>First Name</th>" + 
		" <th>Last Name</th> <th>Description</th> <th>Date Submitted</th> </tr>" + listContainer + "</table>";

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

