var userRef = firebase.database().ref('Users');
var meganRef = userRef.child('Megan');

function meganPage() {
//document.getElementById('meganBtn').addEventListener('click', function() {
	displayModal();
	//var signUpBtn = document.getElementById('signUpBtn');
	//signUpBtn.style.display = 'none';
	document.getElementById('userHeader').innerHTML = 'Megan';
	document.getElementById('subHeader').innerHTML = 'Workouts';
	document.getElementById('border').innerHTML = '';
	//document.getElementById('subHeader2').style.display = 'none';
	document.getElementById('exercise1Text').style.display = 'inline';
	document.getElementById('createWorkoutArea').style.display = 'none';
	//document.getElementById('workoutTable').style.display = 'table';

	meganRef.on('child_added', function(snapshot) {
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
		/*var table = document.createElement('table');
		//table.style.cellspacing = '10';
		table.setAttribute('class', 'workoutTable');
		border.appendChild(table);*/
		var displayWrkout = document.createElement('div');
		border.appendChild(displayWrkout);
		displayWrkout.style.display = 'none';
		var tableRow1 = document.createElement('tr');
		displayWrkout.appendChild(tableRow1);

		var tableHeader1 = document.createElement('th');
		tableHeader1.innerText = 'Exercise';
		displayWrkout.appendChild(tableHeader1);

		var tableHeader2 = document.createElement('th');
		tableHeader2.innerText = 'Sets';
		displayWrkout.appendChild(tableHeader2);

		var tableHeader3 = document.createElement('th');
		tableHeader3.innerText = 'Reps';
		displayWrkout.appendChild(tableHeader3);

		var tableHeader4 = document.createElement('th');
		tableHeader4.innerText = 'Weight';
		displayWrkout.appendChild(tableHeader4);

		var tableRow2 = document.createElement('tr');
		//tableRow2.setAttribute('id', 'tableRow2');
		//document.getElementById('tableRow2').style.display = 'none';
		displayWrkout.appendChild(tableRow2);

		var exerciseData1 = document.createElement('td');
		//exerciseData1.contentEditable = 'true';
		var textNode = document.createTextNode(exercise1);
		exerciseData1.appendChild(textNode);
		header.addEventListener('click', function() {
			//document.getElementsByTagName('TR').style.display = 'inline-block';
			//document.getElementsByTagName('TH').style.display = 'inline-block';
			if(displayWrkout.style.display == 'none') {
				displayWrkout.style.display = 'block';
			} else {
				displayWrkout.style.display = 'none';
			}

		});

		tableRow2.appendChild(exerciseData1);
		exerciseData1.addEventListener('click', function() {
			var exerciseName = prompt("Update the exercise name:");
			exerciseData1.innerText = exerciseName;
			//console.log(key);
			meganRef.child(key).update({
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
		if(sets1 === '') {
			editSets.style.display = 'none';
		} else {
			setData1.appendChild(editSets);
		}


		//setData1.appendChild(textNode);
		tableRow2.appendChild(setData1);
		editSets.addEventListener('click', function() {
			var setAmount = prompt('Update set amount:');
			setData1.innerText = setAmount;
			meganRef.child(key).update({
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
			meganRef.child(key).update({
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
			meganRef.child(key).update({
				Weight1: weightAmount
			});
			alert(weightAmount + ' saved as weight amount.');
		});


		var tableRow3 = document.createElement('tr');
		displayWrkout.appendChild(tableRow3);

		var exerciseData2 = document.createElement('td');
		//exerciseData1.contentEditable = 'true';
		var textNode = document.createTextNode(exercise2);
		exerciseData2.appendChild(textNode);
		tableRow3.appendChild(exerciseData2);
		exerciseData2.addEventListener('click', function() {
			var exerciseName = prompt("Update the exercise name:");
			exerciseData2.innerText = exerciseName;
			//console.log(key);
			meganRef.child(key).update({
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
		if(sets2 === '') {
			editSets2.style.display = 'none';
		} else {
			setData2.appendChild(editSets2);
		}

		//setData1.appendChild(textNode);
		tableRow3.appendChild(setData2);
		editSets2.addEventListener('click', function() {
			var setAmount = prompt('Update set amount:');
			setData2.innerText = setAmount;
			meganRef.child(key).update({
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
			meganRef.child(key).update({
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
			meganRef.child(key).update({
				Weight2: weightAmount
			});
			alert(weightAmount + ' saved as weight amount.');
		});
		//
		//
		// START HERE FOR EXERCISE 3 TABLE ROW 4
		//
		//
		var tableRow4 = document.createElement('tr');
		displayWrkout.appendChild(tableRow4);

		var exerciseData3 = document.createElement('td');
		//exerciseData1.contentEditable = 'true';
		var textNode = document.createTextNode(exercise3);
		exerciseData3.appendChild(textNode);

		tableRow4.appendChild(exerciseData3);
		exerciseData3.addEventListener('click', function() {
			var exerciseName = prompt("Update the exercise name:");
			exerciseData3.innerText = exerciseName;
			//console.log(key);
			meganRef.child(key).update({
				Exercise3: exerciseName
			});
			alert(exerciseName + ' saved as exercise name.');
		});

		var setData3 = document.createElement('td');
		//var textNode = document.createTextNode(sets1);
		createSetRadioBtns(setData3, sets3);
		//var editBr = document.createElement('br');
		var editSets3 = document.createElement('button');
		editSets3.setAttribute('class', 'editSetBtn');
		editSets3.innerText = 'Edit';
		//setData1.appendChild(editBr);
		if(sets3 === '') {
			editSets3.style.display = 'none';
		} else {
			setData3.appendChild(editSets3);
		}


		//setData1.appendChild(textNode);
		tableRow4.appendChild(setData3);
		editSets3.addEventListener('click', function() {
			var setAmount = prompt('Update set amount:');
			setData3.innerText = setAmount;
			meganRef.child(key).update({
				Sets3: setAmount
			});
			alert(setAmount + ' saved as set amount.');
			window.location.reload();
			userPage();
		});

		var repData3 = document.createElement('td');
		var textNode = document.createTextNode(reps3);
		repData3.appendChild(textNode);
		tableRow4.appendChild(repData3);
		repData3.addEventListener('click', function() {
			var repAmount = prompt("Update the rep amount:");
			repData3.innerText = repAmount;
			//console.log(key);
			meganRef.child(key).update({
				Reps3: repAmount
			});
			alert(repAmount + ' saved as rep amount.');
		});

		var weightData3 = document.createElement('td');
		var textNode = document.createTextNode(weight3);
		weightData3.appendChild(textNode);
		tableRow4.appendChild(weightData3);
		weightData3.addEventListener('click', function() {
			var weightAmount = prompt("Update the weight amount:");
			weightData3.innerText = weightAmount;
			//console.log(key);
			meganRef.child(key).update({
				Weight3: weightAmount
			});
			alert(weightAmount + ' saved as weight amount.');
		});

		var tableRow5 = document.createElement('tr');
		displayWrkout.appendChild(tableRow5);

		var exerciseData4 = document.createElement('td');
		//exerciseData1.contentEditable = 'true';
		var textNode = document.createTextNode(exercise4);
		exerciseData4.appendChild(textNode);
		tableRow5.appendChild(exerciseData4);
		exerciseData4.addEventListener('click', function() {
			var exerciseName = prompt("Update the exercise name:");
			exerciseData4.innerText = exerciseName;
			//console.log(key);
			meganRef.child(key).update({
				Exercise4: exerciseName
			});
			alert(exerciseName + ' saved as exercise name.');
		});

		var setData4 = document.createElement('td');
		//var textNode = document.createTextNode(sets1);
		createSetRadioBtns(setData4, sets4);
		//var editBr = document.createElement('br');
		var editSets4 = document.createElement('button');
		editSets4.setAttribute('class', 'editSetBtn');
		editSets4.innerText = 'Edit';
		//setData1.appendChild(editBr);
		if(sets4 === '') {
			editSets4.style.display = 'none';
		} else {
			setData4.appendChild(editSets4);
		}

		//setData1.appendChild(textNode);
		tableRow5.appendChild(setData4);
		editSets4.addEventListener('click', function() {
			var setAmount = prompt('Update set amount:');
			setData4.innerText = setAmount;
			meganRef.child(key).update({
				Sets4: setAmount
			});
			alert(setAmount + ' saved as set amount.');
			window.location.reload();
			userPage();
		});

		var repData4 = document.createElement('td');
		var textNode = document.createTextNode(reps4);
		repData4.appendChild(textNode);
		tableRow5.appendChild(repData4);
		repData4.addEventListener('click', function() {
			var repAmount = prompt("Update the rep amount:");
			repData4.innerText = repAmount;
			//console.log(key);
			meganRef.child(key).update({
				Reps4: repAmount
			});
			alert(repAmount + ' saved as rep amount.');
		});

		var weightData4 = document.createElement('td');
		var textNode = document.createTextNode(weight4);
		weightData4.appendChild(textNode);
		tableRow5.appendChild(weightData4);
		weightData4.addEventListener('click', function() {
			var weightAmount = prompt("Update the weight amount:");
			weightData4.innerText = weightAmount;
			//console.log(key);
			meganRef.child(key).update({
				Weight4: weightAmount
			});
			alert(weightAmount + ' saved as weight amount.');
		});

		var tableRow6 = document.createElement('tr');
		displayWrkout.appendChild(tableRow6);

		var exerciseData5 = document.createElement('td');
		//exerciseData1.contentEditable = 'true';
		var textNode = document.createTextNode(exercise4);
		exerciseData5.appendChild(textNode);
		tableRow6.appendChild(exerciseData5);
		exerciseData5.addEventListener('click', function() {
			var exerciseName = prompt("Update the exercise name:");
			exerciseData5.innerText = exerciseName;
			//console.log(key);
			meganRef.child(key).update({
				Exercise5: exerciseName
			});
			alert(exerciseName + ' saved as exercise name.');
		});

		var setData5 = document.createElement('td');
		//var textNode = document.createTextNode(sets1);
		createSetRadioBtns(setData5, sets5);
		//var editBr = document.createElement('br');
		var editSets5 = document.createElement('button');
		editSets5.setAttribute('class', 'editSetBtn');
		editSets5.innerText = 'Edit';
		//setData1.appendChild(editBr);
		if(sets5 === '') {
			editSets5.style.display = 'none';
		} else {
			setData5.appendChild(editSets5);
		}

		//setData1.appendChild(textNode);
		tableRow6.appendChild(setData5);
		editSets5.addEventListener('click', function() {
			var setAmount = prompt('Update set amount:');
			setData5.innerText = setAmount;
			meganRef.child(key).update({
				Sets5: setAmount
			});
			alert(setAmount + ' saved as set amount.');
			window.location.reload();
			userPage();
		});

		var repData5 = document.createElement('td');
		var textNode = document.createTextNode(reps5);
		repData5.appendChild(textNode);
		tableRow6.appendChild(repData5);
		repData5.addEventListener('click', function() {
			var repAmount = prompt("Update the rep amount:");
			repData5.innerText = repAmount;
			//console.log(key);
			meganRef.child(key).update({
				Reps5: repAmount
			});
			alert(repAmount + ' saved as rep amount.');
		});

		var weightData5 = document.createElement('td');
		var textNode = document.createTextNode(weight5);
		weightData5.appendChild(textNode);
		tableRow6.appendChild(weightData5);
		weightData5.addEventListener('click', function() {
			var weightAmount = prompt("Update the weight amount:");
			weightData5.innerText = weightAmount;
			//console.log(key);
			meganRef.child(key).update({
				Weight5: weightAmount
			});
			alert(weightAmount + ' saved as weight amount.');
		});

		var btnDiv = document.createElement('div');
		btnDiv.setAttribute('id', 'btnDiv');
		//btnDiv.style.display = 'row';
		displayWrkout.appendChild(btnDiv);

		var completeWorkoutBtn = document.createElement('button');
		completeWorkoutBtn.innerText = 'Complete';
		completeWorkoutBtn.setAttribute('id', 'completeWorkoutBtn');
		btnDiv.appendChild(completeWorkoutBtn);
		displayWrkout.appendChild(completeWorkoutBtn);

		completeWorkoutBtn.addEventListener('click', function() {
			document.getElementById('prmptCompWorkName').innerHTML = showWorkouts;

			document.getElementById('prmptCompWorkEx1').innerHTML = exercise1;
			document.getElementById('prmptCompWorkWeight1').innerHTML = weight1;
			document.getElementById('prmptCompWorkReps1').innerHTML = reps1;

			document.getElementById('prmptCompWorkEx2').innerHTML = exercise2;
			document.getElementById('prmptCompWorkWeight2').innerHTML = weight2;
			document.getElementById('prmptCompWorkReps2').innerHTML = reps2;

			document.getElementById('prmptCompWorkEx3').innerHTML = exercise3;
			document.getElementById('prmptCompWorkWeight3').innerHTML = weight3;
			document.getElementById('prmptCompWorkReps3').innerHTML = reps3;

			document.getElementById('prmptCompWorkEx4').innerHTML = exercise4;
			document.getElementById('prmptCompWorkWeight4').innerHTML = weight4;
			document.getElementById('prmptCompWorkReps4').innerHTML = reps4;

			document.getElementById('prmptCompWorkEx5').innerHTML = exercise5;
			document.getElementById('prmptCompWorkWeight5').innerHTML = weight5;
			document.getElementById('prmptCompWorkReps5').innerHTML = reps5;

		// Get the modal
		var modal = document.getElementById('completeWorkModal');
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		// When the user clicks on the button, open the modal
		modal.style.display = "block";
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

		document.getElementById('prmptCompleteWrkoutBtn').addEventListener('click', function() {
			var setVal1 = document.getElementById('cmpWrkSetInput1').value.trim();
			var setVal2 = document.getElementById('cmpWrkSetInput2').value.trim();
			var setVal3 = document.getElementById('cmpWrkSetInput3').value.trim();
			var setVal4 = document.getElementById('cmpWrkSetInput4').value.trim();
			var setVal5 = document.getElementById('cmpWrkSetInput5').value.trim();
			console.log(setVal1);
			var date = moment().format();
			var getDate = new Date();
			var getday = getDate.getDay();
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

			/*meganRef.once('value', function(childSnapshot) {
				var key2 = childSnapshot.key;
				console.log(key2);
				return key2;
			});*/
			var ref = meganRef.child(key);
			ref.child('Log').push({
				WorkoutName: showWorkouts,
				DayCompleted: day,
				DateCompleted: date,
				Exercise1: exercise1,
				Weight1: weight1,
				Sets1: setVal1,
				Reps1: reps1,
				Exercise2: exercise2,
				Weight2: weight2,
				Sets2: setVal2,
				Reps2: reps2,
				Exercise3: exercise3,
				Weight3: weight3,
				Sets3: setVal3,
				Reps3: reps3,
				Exercise4: exercise4,
				Weight4: weight4,
				Sets4: setVal4,
				Reps4: reps4,
				Exercise5: exercise5,
				Weight5: weight5,
				Sets5: setVal5,
				Reps5: reps5,
			});
			alert(showWorkouts + '' + ' has been logged for ' + '' + day + ' ' + date);
			var modal = document.getElementById('completeWorkModal');
			modal.style.display = 'none';
			ref.child('Log').off('child_added');
			location.reload();
		});

		});

		/*var showWrkoutLogBtn = document.createElement('button');
		showWrkoutLogBtn.innerText = 'Workout Log';
		showWrkoutLogBtn.style.marginbottom = '20px';
		showWrkoutLogBtn.setAttribute('id', 'showWrkoutLogBtn');
		btnDiv.appendChild(showWrkoutLogBtn);
		//border.appendChild(showWrkoutLogBtn);

		showWrkoutLogBtn.addEventListener('click', function() {


			meganRef.child(key).child('Log').on('child_added', function(snapshot) {
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
				var logKey = snapshot.key;
				//console.log(dateCompleted);
				//var ke = snapshot.key;
				//alert(dayCompleted);
				console.log(logKey);
				return logKey;

				//alert('' + dayCompleted + ' ' + dateCompleted + '\n' + showWorkouts + '\n' + '' +
				//exercise1 + ': ' + 'Reps: ' + reps1 + ' Weight: ' + '' + weight1 + ' Sets: ' + '' + sets1 + '\n' );
				//meganRef.child(key).child('Log').off('child_added');
			});
			//console.log(key);

		});*/

		var deleteWrkoutBtn = document.createElement('button');
		deleteWrkoutBtn.innerText = 'Delete';
		deleteWrkoutBtn.setAttribute('id', 'deleteWrkoutBtn');
		btnDiv.appendChild(deleteWrkoutBtn);

		deleteWrkoutBtn.addEventListener('click', function() {
			var response = confirm("Delete \"" + showWorkouts + "\" ?");
    		if (response == true) {
        		meganRef.child(key).remove();
				location.reload();
    		}
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
		   //var newWorkoutRef = meganRef.push();
		   meganRef.push({
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
		   document.getElementById('myModal').style.display = 'none';
		   /*newWorkoutRef.set({
			  WorkoutName: workoutName,
			  Exercise1: 'None',
			  Exercise2: 'None',
			  Exercise3: 'None',
			  Exercise4: 'None',
			  Exercise5: 'None'
		  });*/
		   //firebase.database().ref('Users').child('Megan/' + workoutName);
		   /*meganRef.update({
			   WorkoutName: workoutName
		   });*/
	});
	document.getElementById('prmptCloseCrteWrktBtn').addEventListener('click', function() {
		location.reload();
	});
	document.getElementById('calendarLink').addEventListener('click', function() {
		var closeCalBtn = document.getElementById('closeCalendarBtn');
		closeCalBtn.style.display = 'inline-block';
		closeCalBtn.addEventListener('click', function(){
			location.reload();
		});
		//function log(){
			meganRef.on('child_added', function(childSnapshot) {
				var childKey = childSnapshot.key;
				console.log(childKey);
				var ref = meganRef.child(childKey);
				ref.child('Log').on('child_added', function(snapshot) {
					//var logKey = childSnapshot.key;
					const dateCompleted = snapshot.val().DateCompleted;
					const workoutName = snapshot.val().WorkoutName;
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

					$(document).ready(function()
					{
						var date = new Date();
						var d = date.getDate();
						var m = date.getMonth();
						var y = date.getFullYear();

		    			/*$('#showCalendar').fullCalendar({
		        			googleCalendarApiKey: 'AIzaSyBvBaCN1y4klYAtCCeB6zvUAm4pxUR44aE',
		        			events: {
		            			googleCalendarId: 'jmfavaro62@gmail.com'
		        			}
		    			});*/

		            	const newEvent = {
		                	title: workoutName,
		                	start: dateCompleted,
							description: 'Ex1: ' + exercise1 + ' S: ' + sets1 + ' R: ' + reps1 + ' W: ' + weight1 +'\nEx2: ' + exercise2 + ' S: ' + sets2 + ' R: ' + reps2 + ' W: ' + weight2 + '\nEx3: ' + exercise3 + ' S: ' + sets3 + ' R: ' + reps3 + ' W: ' + weight3 + '\nEx4: ' + exercise4 + ' S: ' + sets4 + ' R: ' + reps4 + ' W: ' + weight4 + '\nEx5: ' + exercise5 + ' S: ' + sets5 + ' R: ' + reps5 + ' W: ' + weight5
		            	};
		            	$('#showCalendar').fullCalendar( 'renderEvent', newEvent , true);

		        		$('#showCalendar').fullCalendar({
		            		editable: true,
							eventClick: function (event, jsEvent, view) {
								alert('' + event.title + '\n' + event.description);
							}
		        		});
					});// END document.ready()
				});
			});

		var cal = document.getElementById('showCalendar');
		//console.log(workoutName);
		//var x = document.getElementById('myDIV');
   		if (cal.style.display === 'none') {
	   		cal.style.display = 'inline-block';
			document.getElementById('subHeader').innerHTML = 'Calendar';
			$(document).ready(function()
			{
				var date = new Date();
				var d = date.getDate();
				var m = date.getMonth();
				var y = date.getFullYear();

    			$('#showCalendar').fullCalendar({
        			googleCalendarApiKey: 'AIzaSyBvBaCN1y4klYAtCCeB6zvUAm4pxUR44aE',
        			events: {
            			googleCalendarId: 'jmfavaro62@gmail.com'
        			}
    			});
			});// END document.ready()
			meganRef.on('child_added', function(childSnapshot) {
				var childKey = childSnapshot.key;
				var ref = meganRef.child(childKey);
				ref.child('Log').off('child_added');
			});
   		} else {
	   		cal.style.display = 'none';
			document.getElementById('subHeader').innerHTML = 'Workouts';
   		}
	},false);// END Calendar onclick function
//});
}// END userPage function //FOR TESTING - DELETE IF NOT NEEDED!!\\

meganPage();

function createSetRadioBtns(setData1, sets1) {
	for(var x = 0; x < sets1; x++) {
		var radioBtns = document.createElement('input');
		radioBtns.setAttribute('type', 'radio');
		radioBtns.setAttribute('class', 'setRadioBtns');
		radioBtns.setAttribute('id', 'radioBtn' + x);
		var n = 0;
		var j = 0;
		radioBtns.onclick = function() {
			var clock = $('.showClock').FlipClock({
				clockFace: 'MinuteCounter'
			});
			clock.start(function() {
				// Optional callback will fire when the clock starts
			});

			//var meganRef = firebase.database().ref('Users').child('Megan');
			//var meganRef = userRef.child('Megan');

			var closeClock = document.getElementById('closeClock');
			closeClock.style.display = 'inline-block';
			closeClock.addEventListener('click', function() {
				var showClock = document.getElementsByClassName('showClock');
				//showClock.style.display = 'none';
				location.reload();
			});

			var stopClock = document.getElementById('stopClock');
			stopClock.style.display = 'inline-block';
			stopClock.addEventListener('click', function() {
				clock.stop(function() {
				});
			});

			var resetClock = document.getElementById('resetClock');
			resetClock.style.display = 'inline-block';
			resetClock.addEventListener('click', function() {
				clock.reset(function() {
				});
			});

			var startClock = document.getElementById('startClock');
			startClock.style.display = 'inline-block';
			startClock.addEventListener('click', function() {
				clock.start(function() {
				});
			});

			meganRef.on('child_added', function(childSnapshot) {
				var childKey = childSnapshot.key;
				console.log(childKey);
				var ref = meganRef.child(childKey);
				ref.child('Log').once('child_added', function(childSnapshot) {
					var logKey = childSnapshot.key;
					const dateCompleted = childSnapshot.val().DateCompleted;
					const workoutName = childSnapshot.val().WorkoutName;
					console.log(workoutName);
					console.log(dateCompleted);

					console.log(n);
					var setsLog = childSnapshot.val().Sets1;
					console.log(setsLog);
					console.log(logKey);
					/*ref.child('Log').child(logKey).update({
						Sets1: n
					});
					ref.child('Log').child(logKey).update({
						Sets2: n
					});*/
				return n;
				});
				console.log(n + ' sets');
			});
			console.log(n + ' sets');
		};
		setData1.appendChild(radioBtns);
	}//END FOR LOOP
}//END createSetRadioBtns() Function


var userHeader = document.getElementById('userHeader');
var div = document.getElementById('border');

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
