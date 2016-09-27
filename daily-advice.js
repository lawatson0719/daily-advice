console.log ('Hello! Here is some advice for the day:')


var currentDate = new Date(); 
var hours = currentDate.getHours();
var	month = currentDate.getMonth() +1;
var day = currentDate.getDay() + 1;


if (hours < 12 && hours > 3) {
	console.log ('Coffee first, then things.');
} else if (hours > 12 && hours < 17) {
	console.log ('More coffee, then more things.');
} else if (hours > 17 || hours < 3) {
	console.log ('Eat, sleep, repeat.'); 
}

if (day >= 2 && day <= 4) {
	console.log ('Life sucks...');
} else if (day >= 5 && day <= 6) {
	console.log ('Almost the weekend! You can do it!');
} else if (day >= 7 || day <= 1) {
	console.log ('Life is good!!!');
}

if (month <= 3 || month >= 12) {
	if (hours < 12 && hours > 3) {
		console.log('Warm up the car');
	} else {
		console.log ('Bundle up!');
	}
} else if (month >= 4 && month <= 5) {
	if (hours > 12 && hours < 17) {
		console.log ('Might need to take some allergy medicine.');
	} else {
		console.log ('Dont forget your umbrella!');
	}
} else if (month >= 6 && month <= 8) {
	if (hours > 12 && hours < 17) {
		console.log	('Time to get your tan on!')
	} else {
		console.log ('Make sure you stay hydrated! It gets hot!');
	}	
} else if (month >= 9 && month <= 11) {
	if (hours > 17 || hours < 3) {
		console.log ('Turn up the heat.')
	} else {
		console.log	('Open the windows and let the crisp air in.');
	}
}


if (month >=4 && month <= 8) {
	console.log ('Stay cool!')
} else if (month > 8 || month <= 3) {
	console.log ('Stay warm!')
}













