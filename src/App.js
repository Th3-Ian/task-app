import './App.css';
import Overview from './components/Overview';
import React, { useState } from 'react';

function App() {
	const [task, setTask] = useState()
	let TASKLIST = [{name: 'task1', id: 1}, {name: 'task2', id: 2}, {name: 'task3', id: 3}, {name: 'task4', id: 4}];

	const updateValue = e => {
		setTask(e.target.value)

	}

	const handleClick = event => {
		event.preventDefault();

    console.log('handleClick 👉️', task);
		TASKLIST.unshift({name: task, id: Math.floor(Math.random() * 100)});
		console.log(TASKLIST)
	}

	const displayTasks = () => {

	}

  return (
		<div className='App'>
			<div>
				<label htmlFor='newTask' >New Task: </label>
    		<input id='newTask' value={task} onChange={ updateValue } />
				<button type="submit" id="newTask" onClick={ handleClick }>Submit</button>
			</div>
			<div>
				<Overview tasks={TASKLIST} />
			</div>
		</div>
	);
}

export default App;
