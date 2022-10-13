import React from 'react'

function Overview(props) {
	return (
		<div>
			{props.tasks.map(task => (
				<div id={ task.id }>{ task.name }</div>
			))}
		</div>
	)
}

export default Overview