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
	
	johnRef.on('value', function(snapshot) {
		var showWorkouts = snapshot.val().WorkoutName;
		console.log(showWorkouts);
		var div1 = document.createElement('div');
		var header = document.createElement('h4');
		//header.style.margin-top = '20px';
		header.innerText = showWorkouts;
		div1.appendChild(header);
		var border = document.getElementById('border');
		border.appendChild(header);
		header.style.marginTop = '20px';
	});



	document.getElementById('prmptCreateWrkoutBtn').addEventListener('click', function() {
		   //alert('Create Workout Button Pressed');
		   var workoutName = document.getElementById('workoutNameInput').value.trim();
		   var exerciseInput1 = document.getElementById('exerciseInput1').value.trim();
		   var weightInput1 = document.getElementById('weightInput1').value.trim();
		   var repInput1 = document.getElementById('repInput1').value.trim();
		   var exerciseInput2 = document.getElementById('exerciseInput2').value.trim();
		   var weightInput2 = document.getElementById('weightInput2').value.trim();
		   var repInput2 = document.getElementById('repInput2').value.trim();
		   var exerciseInput3 = document.getElementById('exerciseInput3').value.trim();
		   var weightInput3 = document.getElementById('weightInput3').value.trim();
		   var repInput3 = document.getElementById('repInput3').value.trim();
		   var exerciseInput4 = document.getElementById('exerciseInput4').value.trim();
		   var weightInput4 = document.getElementById('weightInput4').value.trim();
		   var repInput4 = document.getElementById('repInput4').value.trim();
		   var exerciseInput5 = document.getElementById('exerciseInput5').value.trim();
		   var weightInput5 = document.getElementById('weightInput5').value.trim();
		   var repInput5 = document.getElementById('repInput5').value.trim();
		   var weightInput5 = document.getElementById('weightInput1').value.trim();
		   alert(' ' + workoutName + ' Created!');
		   //var newWorkoutRef = johnRef.push();
		   johnRef.push({
			  WorkoutName: workoutName,
			  Exercise1: exerciseInput1,
			  Weight1: weightInput1,
			  Reps1: repInput1,
 			  Exercise2: exerciseInput2,
			  Weight2: weightInput2,
			  Reps2: repInput2,
 			  Exercise3: exerciseInput3,
			  Weight3: weightInput3,
			  Reps3: repInput3,
 			  Exercise4: exerciseInput4,
			  Weight4: weightInput4,
			  Reps4: repInput4,
 			  Exercise5: exerciseInput5,
			  Weight5: weightInput5,
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

});




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
