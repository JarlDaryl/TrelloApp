import './Column.scss';
import Task from '../Task/Task';

const Column = () => {
	return (
		<>
			<div className='column'>
				<header>Brainstorm</header>
				<ul className='task-list'>
                <Task />
					<li className='task-item'>Task 2</li>
					<li className='task-item'>Task 3</li>
					<li className='task-item'>Task 2</li>
					<li className='task-item'>Task 3</li>
					<li className='task-item'>Task 2</li>
					<li className='task-item'>Task 3</li>
					<li className='task-item'>Task 2</li>
					<li className='task-item'>Task 2</li>
					<li className='task-item'>Task 2</li>
					<li className='task-item'>Task 2</li>
					<li className='task-item'>Task 2</li>
				</ul>
				<footer>Add another card</footer>
			</div>
		</>
	);
};

export default Column;
