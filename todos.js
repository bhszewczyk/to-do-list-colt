let userInput = prompt('What would you like to do?');

const toDoList = ['something'];

while (userInput !== 'quit' && userInput !== 'q') {
	if (userInput === 'list') {
		console.log('*****');
		for (let i = 0; i < toDoList.length; i++) {
			console.log(`${i + 1}: ${toDoList[i]}`);
		}
	} else if (userInput === 'new') {
		const newToDo = prompt('What is the new to do?');
		toDoList.push(newToDo);
		console.log(toDoList);
	} else if (userInput === 'delete') {
		const inputNum = prompt(
			'Ok, which point from the list do you want to delete?'
		);
		const index = parseInt(inputNum);
		console.log(index);

		if (!Number.isNaN(index) && index <= toDoList.length) {
			toDoList.splice(index - 1, 1);
			console.log(toDoList);
		} else {
			console.log('Unknown index');
		}
	}
	userInput = prompt('What would you like to do?');
}

console.log('Ok, quitting');
