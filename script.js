const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

function firstPromise(number) {
	return new Promise(resolve =>{
		setTimeout(()=>{
			output.textContent = `Result: ${number}`;
			resolve(number);
			
		},2000);
	});
	
}

function secondPromise(number) {
	return new Promise(resolve =>{
		setTimeout(() =>{
			const result = number * 2;
			output.textContent = `Result: ${result}`;
			resolve(result);
		},2000);
	});
	
}
function thirdPromise(number) {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = number - 3;
      output.textContent = `Result: ${result}`;
      resolve(result);
    }, 1000);
  });
}

function fourthPromise(number) {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = number / 2;
      output.textContent = `Result: ${result}`;
      resolve(result);
    }, 1000);
  });
}

function fifthPromise(number) {
  return new Promise(resolve => {
    setTimeout(() => {
      const result = number + 10;
      output.textContent = `Final Result: ${result}`;
      resolve(result);
    }, 1000);
  });
}

button.onclick = function () {
	const num = Number(input.value);
	output.textContent = '';

	firstPromise(num)
		.then(secondPromise)
		.then(thirdPromise)
	    .then(fourthPromise)
		.then(fifthPromise);
	
};

