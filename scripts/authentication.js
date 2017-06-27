


function userPage(johnRef) {
	var userRef = firebase.database().ref('Users');
	var johnRef = userRef.child('John');
document.getElementById('johnBtn').addEventListener('click', function() {
	displayModal();
	var signUpBtn = document.getElementById('signUpBtn');
	signUpBtn.style.display = 'none';
	document.getElementById('mainHeader').innerHTML = 'John';
	document.getElementById('subHeader').innerHTML = 'Workouts';
	document.getElementById('border').innerHTML = '';
	document.getElementById('subHeader2').style.display = 'none';
	document.getElementById('exercise1Text').style.display = 'inline';
	document.getElementById('createWorkoutArea').style.display = 'none';

	//document.getElementById('workoutTable').style.display = 'table';

	johnRef.on('child_added', function(snapshot) {
		var dateCompleted = snapshot.val().DateCompleted;
		var showWorkouts = snapshot.val().WorkoutName;
		var exercise1 = snapshot.val().Exercise1;
		var exercise2 = snapshot.val().Exercise2;
		var exercise3 = snapshot.val().Exercise3;
		var exercise4 = snapshot.val().Exercise4;
		var exercise5 = snapshot.val().Exercise5;
		var weight1 = snapshot.val().Weight1;
		var weight2 = snapshot.val().Weight2;
		var weight3 = snapshot.val().Weight3;
		var weight4 = snapshot.val().Weight4;
		var weight5 = snapshot.val().Weight5;
		var reps1 = snapshot.val().Reps1;
		var reps2 = snapshot.val().Reps2;
		var reps3 = snapshot.val().Reps3;
		var reps4 = snapshot.val().Reps4;
		var reps5 = snapshot.val().Reps5;
		var sets1 = snapshot.val().Sets1;
		var sets2 = snapshot.val().Sets2;
		var sets3 = snapshot.val().Sets3;
		var sets4 = snapshot.val().Sets4;
		var sets5 = snapshot.val().Sets5;
		var count = snapshot.numChildren();
		var key = snapshot.key;

		console.log(showWorkouts);
		console.log(exercise1);
		console.log(weight1);
		console.log(reps1);
		console.log(sets1);
		console.log(count);
		console.log(key);

		var div1 = document.createElement('div');
		var header = document.createElement('h4');
		//header.style.margin-top = '20px';
		header.innerText = showWorkouts;
		header.style.color = 'green';
		div1.appendChild(header);
		var border = document.getElementById('border');
		border.appendChild(header);
		header.style.marginTop = '40px';
		var table = document.createElement('table');
		//table.style.cellspacing = '10';
		table.setAttribute('class', 'workoutTable');
		border.appendChild(table);

		var tableRow1 = document.createElement('tr');
		border.appendChild(tableRow1);

		var tableHeader1 = document.createElement('th');
		tableHeader1.innerText = 'Exercise';
		border.appendChild(tableHeader1);

		var tableHeader2 = document.createElement('th');
		tableHeader2.innerText = 'Sets';
		border.appendChild(tableHeader2);

		var tableHeader3 = document.createElement('th');
		tableHeader3.innerText = 'Reps';
		border.appendChild(tableHeader3);

		var tableHeader4 = document.createElement('th');
		tableHeader4.innerText = 'Weight';
		border.appendChild(tableHeader4);

		var tableRow2 = document.createElement('tr');
		border.appendChild(tableRow2);

		var exerciseData1 = document.createElement('td');
		//exerciseData1.contentEditable = 'true';
		var textNode = document.createTextNode(exercise1);
		exerciseData1.appendChild(textNode);


		tableRow2.appendChild(exerciseData1);
		exerciseData1.addEventListener('click', function() {
			var exerciseName = prompt("Update the exercise name:");
			exerciseData1.innerText = exerciseName;
			//console.log(key);
			johnRef.child(key).update({
				Exercise1: exerciseName
			});
			alert(exerciseName + ' saved as exercise name.');
		});

		var setData1 = document.createElement('td');
		//var textNode = document.createTextNode(sets1);
		createSetRadioBtns(setData1, sets1);
		//var editBr = document.createElement('br');
		var editSets = document.createElement('button');
		editSets.setAttribute('class', 'editSetBtn');
		editSets.innerText = 'Edit';
		//setData1.appendChild(editBr);
		setData1.appendChild(editSets);

		//setData1.appendChild(textNode);
		tableRow2.appendChild(setData1);
		editSets.addEventListener('click', function() {
			var setAmount = prompt('Update set amount:');
			setData1.innerText = setAmount;
			johnRef.child(key).update({
				Sets1: setAmount
			});
			alert(setAmount + ' saved as set amount.');
			window.location.reload();
			userPage();
		});

		var repData1 = document.createElement('td');
		var textNode = document.createTextNode(reps1);
		repData1.appendChild(textNode);
		tableRow2.appendChild(repData1);
		repData1.addEventListener('click', function() {
			var repAmount = prompt("Update the rep amount:");
			repData1.innerText = repAmount;
			//console.log(key);
			johnRef.child(key).update({
				Reps1: repAmount
			});
			alert(repAmount + ' saved as rep amount.');
		});

		var weightData1 = document.createElement('td');
		var textNode = document.createTextNode(weight1);
		weightData1.appendChild(textNode);
		tableRow2.appendChild(weightData1);
		weightData1.addEventListener('click', function() {
			var weightAmount = prompt("Update the weight amount:");
			weightData1.innerText = weightAmount;
			//console.log(key);
			johnRef.child(key).update({
				Weight1: weightAmount
			});
			alert(weightAmount + ' saved as weight amount.');
		});


		var tableRow3 = document.createElement('tr');
		border.appendChild(tableRow3);

		var exerciseData2 = document.createElement('td');
		//exerciseData1.contentEditable = 'true';
		var textNode = document.createTextNode(exercise2);
		exerciseData2.appendChild(textNode);
		tableRow3.appendChild(exerciseData2);
		exerciseData2.addEventListener('click', function() {
			var exerciseName = prompt("Update the exercise name:");
			exerciseData2.innerText = exerciseName;
			//console.log(key);
			johnRef.child(key).update({
				Exercise2: exerciseName
			});
			alert(exerciseName2 + ' saved as exercise name.');
		});

		var setData2 = document.createElement('td');
		//var textNode = document.createTextNode(sets1);
		createSetRadioBtns(setData2, sets2);
		//var editBr = document.createElement('br');
		var editSets2 = document.createElement('button');
		editSets2.setAttribute('class', 'editSetBtn');
		editSets2.innerText = 'Edit';
		//setData1.appendChild(editBr);
		setData2.appendChild(editSets2);
		//setData1.appendChild(textNode);
		tableRow3.appendChild(setData2);
		editSets2.addEventListener('click', function() {
			var setAmount = prompt('Update set amount:');
			setData2.innerText = setAmount;
			johnRef.child(key).update({
				Sets2: setAmount
			});
			alert(setAmount + ' saved as set amount.');
			window.location.reload();
			userPage();
		});

		var repData2 = document.createElement('td');
		var textNode = document.createTextNode(reps2);
		repData2.appendChild(textNode);
		tableRow3.appendChild(repData2);
		repData2.addEventListener('click', function() {
			var repAmount = prompt("Update the rep amount:");
			repData2.innerText = repAmount;
			//console.log(key);
			johnRef.child(key).update({
				Reps2: repAmount
			});
			alert(repAmount + ' saved as rep amount.');
		});

		var weightData2 = document.createElement('td');
		var textNode = document.createTextNode(weight2);
		weightData2.appendChild(textNode);
		tableRow3.appendChild(weightData2);
		weightData2.addEventListener('click', function() {
			var weightAmount = prompt("Update the weight amount:");
			weightData2.innerText = weightAmount;
			//console.log(key);
			johnRef.child(key).update({
				Weight2: weightAmount
			});
			alert(weightAmount + ' saved as weight amount.');
		});
		var btnDiv = document.createElement('div');
		btnDiv.setAttribute('id', 'btnDiv');
		//btnDiv.style.flexdirection = 'row';
		border.appendChild(btnDiv);
		var completeWorkoutBtn = document.createElement('button');
		completeWorkoutBtn.innerText = 'Complete Workout';
		btnDiv.appendChild(completeWorkoutBtn);
		border.appendChild(completeWorkoutBtn);
		completeWorkoutBtn.addEventListener('click', function() {
			var date = new Date().toLocaleString();
			var newDate = new Date();
			var getday = newDate.getDay();
			var day = '';
			if(getday === 0) {
				day = 'Sunday';
			}
			else if(getday === 1) {
				day = 'Monday';
			}
			else if(getday === 2) {
				day = 'Tuesday';
			}
			else if(getday === 3) {
				day = 'Wednesday';
			}
			else if(getday === 4) {
				day = 'Thursday';
			}
			else if(getday === 5) {
				day = 'Friday';
			}
			else if(getday === 6) {
				day = 'Saturday';
			}
			console.log(day);
			alert(showWorkouts + '' + ' has been logged for ' + '' + day + ' ' + date);
			console.log(day);
			johnRef.child(key).child('Log').push({
				WorkoutName: showWorkouts,
				DayCompleted: day,
				DateCompleted: date,
  			  	Exercise1: exercise1,
  			  	Weight1: weight1,
  			  	Sets1: sets1,
  			  	Reps1: reps1,
   			  	Exercise2: exercise2,
  			  	Weight2: weight2,
  			  	Sets2: sets2,
  			  	Reps2: reps2,
   			  	Exercise3: exercise3,
  			  	Weight3: weight3,
  			  	Sets3: sets3,
  			  	Reps3: reps3,
   			  	Exercise4: exercise4,
  			  	Weight4: weight4,
  			  	Sets4: sets4,
  			  	Reps4: reps4,
   			  	Exercise5: exercise5,
  			  	Weight5: weight5,
  			  	Sets5: sets5,
  			  	Reps5: reps5,
			});





			/////Note:Use this for Google Calendar hookup/////////
			/*$(document).ready(function() {

	    // page is now ready, initialize the calendar...

	    $('#showCalendar').fullCalendar({
	        // put your options and callbacks here
			googleCalendarApiKey: 'AIzaSyBI5ZZD4LzneRjsUWb8fYPqjtWxWOWW-7Y',
			googleCalendarId: 'jmfavaro62@gmail.com',
			events: [
        	{
				//googleCalendarApiKey: 'AIzaSyBvBaCN1y4klYAtCCeB6zvUAm4pxUR44aE',

            	title: 'Testing',
            	start: '2017-06-25'
        	},
    		]
	    })


	});*/
	window.open('https://calendar.google.com/calendar/render?cid=jmfavaro62%40gmail.com#main_7%7Cmonth','_blank');
		});

		var showWrkoutLogBtn = document.createElement('button');
		showWrkoutLogBtn.innerText = 'Workout Log';
		showWrkoutLogBtn.style.marginbottom = '20px';
		btnDiv.appendChild(showWrkoutLogBtn);
		border.appendChild(showWrkoutLogBtn);

		showWrkoutLogBtn.addEventListener('click', function() {
			johnRef.child(key).child('Log').on('child_added', function(snapshot) {
				var dateCompleted = snapshot.val().DateCompleted;
				var dayCompleted = snapshot.val().DayCompleted;
				var exercise1 = snapshot.val().Exercise1;
				var exercise2 = snapshot.val().Exercise2;
				var exercise3 = snapshot.val().Exercise3;
				var exercise4 = snapshot.val().Exercise4;
				var exercise5 = snapshot.val().Exercise5;
				var weight1 = snapshot.val().Weight1;
				var weight2 = snapshot.val().Weight2;
				var weight3 = snapshot.val().Weight3;
				var weight4 = snapshot.val().Weight4;
				var weight5 = snapshot.val().Weight5;
				var reps1 = snapshot.val().Reps1;
				var reps2 = snapshot.val().Reps2;
				var reps3 = snapshot.val().Reps3;
				var reps4 = snapshot.val().Reps4;
				var reps5 = snapshot.val().Reps5;
				var sets1 = snapshot.val().Sets1;
				var sets2 = snapshot.val().Sets2;
				var sets3 = snapshot.val().Sets3;
				var sets4 = snapshot.val().Sets4;
				var sets5 = snapshot.val().Sets5;
				//console.log(exercise1);
				var key = snapshot.key;
				//console.log(dateCompleted);
				//var ke = snapshot.key;
				//alert(dayCompleted);
				console.log(key);
				alert('' + dayCompleted + ' ' + dateCompleted + '\n' + showWorkouts + '\n' + '' +
				exercise1 + ': ' + 'Reps: ' + reps1 + ' Weight: ' + '' + weight1 + ' Sets: ' + '' + sets1 + '\n' );
			});
			//console.log(key);

		});

		//tableRow2.appendChild(exerciseData1);
		//table.appendChild(tableRow2);
		//var tableHeader2 = document.createElement('th');
		//tableHeader2.innerText = 'Weight';
		//var tableHeader3 = document.createElement('th');
		//tableHeader3.innerText = 'Reps';
		//tableRow1.appendChild(tableHeader1);
		//tableRow1.appendChild(tableHeader2);
		//tableRow1.appendChild(tableHeader3);
		//border.appendChild(tableHeader1);
		//border.appendChild(tableHeader2);
		//border.appendChild(tableHeader3);


		/*var tableRow2 = document.createElement('tr');
		var exerciseData1 = document.createElement('td');
		exerciseData1.innerText = 'Exercise';
		var weightData1 = document.createElement('td');
		weightData1.innerText = 'Weight';
		var repData1 = document.createElement('td');
		repData1.innerText = 'Reps';
		tableRow2.appendChild(exerciseData1);
		tableRow2.appendChild(weightData1);
		tableRow2.appendChild(repData1);
		border.appendChild(exerciseData1);
		border.appendChild(weightData1);
		border.appendChild(repData1);*/
	});



	document.getElementById('prmptCreateWrkoutBtn').addEventListener('click', function() {
		   //alert('Create Workout Button Pressed');
		   var workoutName = document.getElementById('workoutNameInput').value.trim();

		   var exerciseInput1 = document.getElementById('exerciseInput1').value.trim();
		   var weightInput1 = document.getElementById('weightInput1').value.trim();
		   var repInput1 = document.getElementById('repInput1').value.trim();
		   var setInput1 = document.getElementById('setInput1').value.trim();

		   var exerciseInput2 = document.getElementById('exerciseInput2').value.trim();
		   var weightInput2 = document.getElementById('weightInput2').value.trim();
		   var repInput2 = document.getElementById('repInput2').value.trim();
		   var setInput2 = document.getElementById('setInput2').value.trim();

		   var exerciseInput3 = document.getElementById('exerciseInput3').value.trim();
		   var weightInput3 = document.getElementById('weightInput3').value.trim();
		   var repInput3 = document.getElementById('repInput3').value.trim();
		   var setInput3 = document.getElementById('setInput3').value.trim();

		   var exerciseInput4 = document.getElementById('exerciseInput4').value.trim();
		   var weightInput4 = document.getElementById('weightInput4').value.trim();
		   var repInput4 = document.getElementById('repInput4').value.trim();
		   var setInput4 = document.getElementById('setInput4').value.trim();

		   var exerciseInput5 = document.getElementById('exerciseInput5').value.trim();
		   var weightInput5 = document.getElementById('weightInput5').value.trim();
		   var repInput5 = document.getElementById('repInput5').value.trim();
		   var setInput5 = document.getElementById('setInput5').value.trim();

		   alert(' ' + workoutName + ' Created!');
		   //var newWorkoutRef = johnRef.push();
		   johnRef.push({
			  WorkoutName: workoutName,
			  Exercise1: exerciseInput1,
			  Weight1: weightInput1,
			  Sets1: setInput1,
			  Reps1: repInput1,
 			  Exercise2: exerciseInput2,
			  Weight2: weightInput2,
			  Sets2: setInput2,
			  Reps2: repInput2,
 			  Exercise3: exerciseInput3,
			  Weight3: weightInput3,
			  Sets3: setInput3,
			  Reps3: repInput3,
 			  Exercise4: exerciseInput4,
			  Weight4: weightInput4,
			  Sets4: setInput4,
			  Reps4: repInput4,
 			  Exercise5: exerciseInput5,
			  Weight5: weightInput5,
			  Sets5: setInput5,
			  Reps5: repInput5,
		   });
		   document.getElementById('workoutNameInput').value = '';
		   /*newWorkoutRef.set({
			  WorkoutName: workoutName,
			  Exercise1: 'None',
			  Exercise2: 'None',
			  Exercise3: 'None',
			  Exercise4: 'None',
			  Exercise5: 'None'
		  });*/
		   //firebase.database().ref('Users').child('John/' + workoutName);
		   /*johnRef.update({
			   WorkoutName: workoutName
		   });*/
	});
	document.getElementById('calendarLink').addEventListener('click', function() {
		//alert('Calendar Link Pressed!');
		//var calendarDiv = document.createElement('div');
		//document.appendChild(calendarDiv);
		//calendarDiv.innerText = 'Test';
		var cal = document.getElementById('showCalendar');
		//var x = document.getElementById('myDIV');
   		if (cal.style.display === 'none') {
	   		cal.style.display = 'inline-block';
			document.getElementById('subHeader').innerHTML = 'Calendar';
			$(document).ready(function() {

	    // page is now ready, initialize the calendar...

	    $('#showCalendar').fullCalendar({
	        // put your options and callbacks here

			googleCalendarApiKey: 'AIzaSyBI5ZZD4LzneRjsUWb8fYPqjtWxWOWW-7Y',
			events:
        	{

				googleCalendarId: 'jmfavaro62@gmail.com'

        	}




	    })

	});
   		} else {
	   		cal.style.display = 'none';
			document.getElementById('subHeader').innerHTML = 'Workouts';
   		}
		//console.log(calVal);


	});
});
}// END userPage function //FOR TESTING - DELETE IF NOT NEEDED!!\\

userPage();

function createSetRadioBtns(setData1, sets1) {
	for(var x = 0; x < sets1; x++) {
		var radioBtns = document.createElement('input');
		radioBtns.setAttribute('type', 'radio');
		radioBtns.setAttribute('class', 'setRadioBtns');
		radioBtns.setAttribute('id', 'radioBtn ' + x);
		radioBtns.onclick = function() {
			var clock = $('.showClock').FlipClock({
				clockFace: 'MinuteCounter'

			});
			clock.start(function() {
				// Optional callback will fire when the clock starts
			});
			/*
			var clockDiv = document.createElement('div'); clockDiv.setAttribute('class', 'clockDisplay'); clockDiv.style.color = 'red'; setData1.appendChild(clockDiv); var initialTime = Date.now();
function checkTime(){
  var timeDifference = Date.now() - initialTime;
  var formatted = convertTime(timeDifference);
  clockDiv.innerHTML = '' + formatted;
}
function convertTime(miliseconds) {
  var totalSeconds = Math.floor(miliseconds/1000);
  var minutes = Math.floor(totalSeconds/60);
  var seconds = totalSeconds - minutes * 60;
  return minutes + ':' + seconds;
}
window.setInterval(checkTime, 100);*/};
		setData1.appendChild(radioBtns);
	}//END FOR LOOP
}



document.getElementById('signUpBtn').addEventListener('click', function() {
	var userName = document.getElementById('displayNameInput').value.trim();
	var userDisplay = document.getElementById('border');
	if(userName.length > 0) {
			saveToFB(userName);
			//var li = "<li>" + userName + "<li>";
			//document.getElementById('userList').innerHTML += li;
		}
		document.getElementById("displayNameInput").value = "";
		alert('Welcome ' + userName);
		location.reload();
	/*
	alert('Welcome ' + userName + '!');
	document.getElementById('displayNameInput').value = "";
	var userRef = firebase.database().ref('Users').push({
		name: userName
	});
	var btn = document.createElement("BUTTON");
    var t = document.createTextNode(userName);
    btn.appendChild(t);
    document.body.appendChild(btn);
	*/
}, false);
var userHeader = document.getElementById('userHeader');
var div = document.getElementById('border');
/*userRef.on("child_added", function(child) {
  //console.log(child.key+': '+child.val().name);
  var tr = document.createElement('button');
  tr.id = " " + child.val().name;
  //console.log(" " + tr.id);
  var td = document.createElement('td');
  td.innerText = child.val().name;
  //td.onclick = btnHistorySelect;
  tr.appendChild(td);
  div.appendChild(tr);
  tr.onclick = function() {
	  var userHeader = document.getElementById('userHeader');
	  var div = document.getElementById('createWorkoutArea');
	  div.style.display = 'none';
	var id = this.id;
	//alert(id);
	//document.getElementById('userHeader').innerHTML = child.val().name;
	//userHeader.innerHTML = " " + id;
	displayModal();
	var signUpBtn = document.getElementById('signUpBtn');
	signUpBtn.style.display = 'none';
	document.getElementById('mainHeader').innerHTML = id;
	document.getElementById('subHeader').innerHTML = 'Workouts';
	document.getElementById('border').innerHTML = '';
	document.getElementById('subHeader2').style.display = 'none';
	document.getElementById('exercise1Text').style.display = 'inline';
	//var text1 = document.createElement('h5');
	//text1.id = 'exercise1Text';
	//text1.innerText = "Exercise 1";
	//div.appendChild(text1);
  };
*/
/*
 document.getElementById('prmptCreateWrkoutBtn').addEventListener('click', function() {
 		//alert('Create Workout Button Pressed');
 		var workoutName = document.getElementById('workoutNameInput').value.trim();
 		//alert(' ' + workoutName);
		var childName = child.val().name;
		//alert(childName);
		var rootRef = firebase.database().ref('Users').child(childName);
		//rootRef.child.val().name;
		//alert(rootRef);
		/*rootRef.update({
			name: userName,
			workoutName: workoutName
		});*/

 //});

 //div.innerHTML = '<button id=" "+ child.val().name + value=""+child.val().name onClick="goToUserPage()"/>';
//});

function displayModal() {

	var displayNameInput = document.getElementById('displayNameInput').value.trim();
	//alert(displayNameInput);

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("createWrkoutBtn");
	btn.style.display = "block";

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}



function saveToFB(userName) {
	// save data to Amazon Firebase
	userRef.push({
		name: userName,
		workoutName: 'Default'
	});
	document.getElementById("displayNameInput").value = "";

};

function btnHistorySelect(event) {
	//console.log("Button Pressed!");
	//alert(event.target);
	var id = this.id;
	console.log(id);
}
/*
function refreshList(list, element) {
	var ls = '';
	for (var i = 0; i < list.length; i++) {
		ls += '<li data-key="' + list[i].key + '">' + list[i].title + ' ' + genLinks(list[i].key, list[i].title) + '</li>';
	};
	/*document.getElementById('amazonList').innerHTML = ls;*/
	/*document.getElementById('cannedList').innerHTML = ls;*/
	//document.getElementById(element).innerHTML = ls;
//};
/*
function genLinks(key, usName) {
    var links = '';
    links += '<a id="editBtn" href="javascript:edit(\'' + key + '\',\'' + usName + '\')">Edit</a> | ';
    links += '<a id="deleteBtn" href="javascript:del(\'' + key + '\',\'' + usName + '\')">Delete</a>';
    return links;
};
function edit(key, usName) {
    var userName = prompt("Update the user name", usName);
    if (usName && userName.length > 0) {
        // Build the FireBase endpoint to the item
        var updateUserRef = buildEndPoint(key);
        updateUserRef.update({
            name: userName
        });
    }
}
function del(key, usName) {
    var response = confirm("Remove \"" + usName + "\" from the list?");
    if (response == true) {
        // build the FB endpoint to the item in movies collection
        var deleteItemRef = buildEndPoint(key);
        deleteItemRef.remove();
    }
}
function buildEndPoint(key) {
	var userEnd = firebase.database().ref('Users').child(key);
	location.reload();
	return userEnd;
}
// this will get fired on inital load as well as when ever there is a change in the data
userRef.on("value", function(snapshot) {
	var data = snapshot.val();
	console.log(data);
  	var list = [];
	var element = 'userList';
  	for (var key in data) {
  		if (data.hasOwnProperty(key)) {
    	title = data[key].title ? data[key].title : '';
      if (title.trim().length > 0) {
      	list.push({
        	title: title,
          key: key
        })
      }
    }
  }
  // refresh the UI
  refreshList(list, element);
});
*/












/**
 * Handles the sign in button press.
 */
 /*
function toggleSignIn() {
	if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('usrNameInput').value;
        var password = document.getElementById('passwordInput').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
		  email.value = "";
          return;
        }
		email.value = "";
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('loginBtn').disabled = false;
          // [END_EXCLUDE]
		  email.value = "";
        });
        // [END authwithemail]
		email.value = "";
      }
      document.getElementById('loginBtn').disabled = true;
	  email.value = "";
	}
    /**
     * Handles the sign up button press.
     */

	 /*
    function handleSignUp() {
      var email = document.getElementById('sgnUpUsrInput').value;
      var password = document.getElementById('sgnUpPswrdInput').value;
	 alert(" " + email);
	 if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
	  var userRef = firebase.database().ref('Users');
	  var userName = document.getElementById('displayNameInput').value;
	  alert(" " + userName);
	  //email.value = "";
	  //password.value = "";
	 // userRef.push({
		//  name: userName
	  //});
	  var uid = firebase.auth().currentUser.uid;
	  firebase.database().ref('Users').child(uid).set({
  		username: userName,
  		userId: uid
	});
		/*
	  var workoutsRef = firebase.database().ref('Users').child(uid);
	  workoutsRef.push({
		  username: userName,
		  name: 'Workouts'
	  })
	  */
    //}
    /**
     * Sends an email verification to the user.
     */
	 /*
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }
    function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }
	*/
    /*
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
	/*
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        document.getElementById('verifyEmailBtn').disabled = true;
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('loginBtn').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          if (!emailVerified) {
            document.getElementById('verifyEmailBtn').disabled = false;
          }
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('loginBtn').textContent = 'Sign in';
          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('loginBtn').addEventListener('click', toggleSignIn, false);
      document.getElementById('signUpBtn').addEventListener('click', handleSignUp, false);
      document.getElementById('verifyEmailBtn').addEventListener('click', sendEmailVerification, false);
      document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    }
    window.onload = function() {
      initApp();
	  document.getElementById('usrNameInput').value = "";
    };
	*/
