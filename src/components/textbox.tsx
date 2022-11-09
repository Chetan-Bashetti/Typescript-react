import React, { useState } from 'react';
import Todo from '../models/todo';
import './list.css';

interface Props {
	handleAddNewRecord: (newTodo: Todo) => void;
}

const TextBox: React.FC<Props> = ({ handleAddNewRecord }) => {
	const [todo, setTodo] = useState<string>('');

	const handleOnchange = (): void => {
		let newObj: Todo = {
			name: todo,
			isCompleted: false,
			isEditing: false
		};
		handleAddNewRecord(newObj);
		setTodo('');
	};

	return (
		<div className='text-box-wrapper'>
			<input
				className='text-box'
				type='text'
				value={todo}
				onChange={(e) => {
					console.log(e?.target?.value);
					setTodo(e?.target?.value);
				}}
			/>
			<button className='button' onClick={() => handleOnchange()}>
				👍
			</button>
		</div>
	);
};
export default TextBox;
