

/*
rootRef.on('value', function(snapshot) {
	var data = snapshot.val();
	var user = firebase.auth().currentUser;
	var email;
	if(user != null) {
		email = user.email;
	}
	if(data == email) {

	}
})
*/
document.getElementById("createWrkoutBtn").addEventListener('click', function () {
	var workoutName = document.getElementById('wrkoutNameInput').value;
	var rootRef = firebase.database().ref('Users');
	var user = firebase.auth().currentUser;
	var uid;
	//const userRef = firebase.database().ref('Users').child(user);
	if (user != null) {
		alert(workoutName);
		uid = user.uid;
		console.log("" + uid);
		//var userId = firebase.auth().currentUser.uid;
			//var ref = firebase.database().ref('Users/'+userId).child(workoutName);
			/*ref.push({
				name: workoutName
			});*/
			//var uid = firebase.auth().currentUser.uid;
			firebase.database().ref('Users/'+uid).child(workoutName).push({
  				name: 'bench press'
			});
			//var email = snapshot.val();
			//console.log("" + email);
  		// ...

		//console.log("" +email);
		/*
		rootRef.child(workoutName);
		rootRef.on('value', function(snapshot) {
			var data = snapshot.val();
			var user = firebase.auth().currentUser;
			var email;
			if(user != null) {
				email = user.email;
				console.log("" +email);
			}
			if(data == email) {
				console.log("success");
			} else {
				console.log("Failure");
			}
		});
		*/
		/*
	  user.providerData.forEach(function (profile) {
	    console.log("Sign-in provider: "+profile.providerId);
	    console.log("  Provider-specific UID: "+profile.uid);
	    console.log("  Name: "+profile.displayName);
	    console.log("  Email: "+profile.email);
	    console.log("  Photo URL: "+profile.photoURL);
	  });
	  */
	}
}, false);





/*
console.log("" + user);
if(user) {

}
else {

}
*/
