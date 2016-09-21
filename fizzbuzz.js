
for(var i = 1; i <= 100; i++){
	var number = document.getElementById('key');
	var output = document.createElement('p');
	output.className = "square";
	if (i % 15 === 0) {
		output.innerHTML = "FizzBuzz";
		output.className += " fizzbuzz";
	} else if (i % 3 === 0) {
		output.innerHTML = "Fizz";
		output.className += " fizz";
	} else if (i % 5 === 0) {
		output.innerHTML = "Buzz";
		output.className += " buzz";
	}else {
		output.innerHTML = i;
		output.classList.add("number");
	}
	number.appendChild(output);
}

