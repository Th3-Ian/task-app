import './App.css';
import Overview from './components/Overview';
import React, { useState } from 'react';

function App() {
	const [task, setTask] = useState()

	const updateValue = e => {
		setTask(e.target.value)

	}

	const handleClick = event => {
		event.preventDefault();

    console.log('handleClick 👉️', task);
	}

  return (
		<div className='App'>
			<div>
				<label htmlFor='newTask' >New Task:</label>
    		<input id='newTask' value={task} onChange={ updateValue } />
				<button type="submit" id="newTask" onClick={ handleClick }>Submit</button>
			</div>
			<div>
			</div>
		</div>
	);
}

export default App;
