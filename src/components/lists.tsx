import React, { useState } from 'react';
import Todo from '../models/todo';
import './list.css';

interface Props {
	list: Todo[];
	handleEditTask: (id: number, isEditing: boolean) => void;
	handleUpdateTaskName: (id: number, name: string) => void;
	handleUpdateTaskStatus: (id: number) => void;
	handleDeleteTask: (id: number) => void;
}

const Lists: React.FC<Props> = ({
	list,
	handleEditTask,
	handleUpdateTaskName,
	handleUpdateTaskStatus,
	handleDeleteTask
}) => {
	const [editingTask, setEditingTask] = useState<string>('');

	return (
		<div className='lists-wrapper'>
			{list?.map((eachTodo, id) => (
				<div key={id} className='each-list'>
					<div>
						{!eachTodo.isEditing ? (
							<div
								style={{
									textDecoration: eachTodo.isCompleted ? 'line-through' : '',
									textTransform: 'capitalize',
									color: 'gray'
								}}
							>
								{eachTodo.name}
							</div>
						) : (
							<input
								className='text-box'
								value={editingTask}
								onChange={(e) => {
									setEditingTask(e.target.value);
								}}
							/>
						)}
					</div>
					<div className='actions-wrapper'>
						<div className='edit'>
							{!eachTodo.isEditing ? (
								<button
									className='button'
									onClick={() => {
										handleEditTask(id, true);
										setEditingTask(eachTodo.name);
									}}
								>
									✎
								</button>
							) : (
								<button
									className='button'
									onClick={() => handleUpdateTaskName(id, editingTask)}
								>
									👍
								</button>
							)}
						</div>
						<div>
							<button className='button' onClick={() => handleDeleteTask(id)}>
								🗑
							</button>
						</div>
						<div className='edit'>
							{eachTodo.isCompleted ? (
								<button
									className='button'
									onClick={() => handleUpdateTaskStatus(id)}
								>
									{' '}
									✘
								</button>
							) : (
								<button
									className='button'
									onClick={() => handleUpdateTaskStatus(id)}
								>
									✔{' '}
								</button>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Lists;
