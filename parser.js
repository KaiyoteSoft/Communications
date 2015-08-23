function processData() {
	var jdata;
	var name = "Kai";
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

			i = 0;
			for (i; i < listContainer.length; i++) {
			console.log(listContainer[i]); 
			}
			// }
		// };

		var data = "<table> <tr><th>Url Link</th><th>First Name</th>" + 
		" <th>Last Name</th> <th>Description</th> <th>Date Submitted</th> </tr>" + listContainer + "</table>";

		$('#work').html(data);
		}
	});
};