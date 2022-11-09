import React, { useState } from 'react';
import './App.css';
import Lists from './components/lists';
import TextBox from './components/textbox';
import Todo from './models/todo';

// type UserRecord = {
// 	name: string;
// };

// interface UserInterface extends UserRecord {
// 	age: number;
// }

// interface UserInterfac2 extends UserInterface {
// 	phone: number;
// 	address: string;
// }

// let userData: UserInterfac2 = {
// 	name: 'Chetan',
// 	age: 26,
// 	phone: 1234567890,
// 	address: 'adarsh nagar bijapur'
// };
// console.log(userData);

// type UserType = UserInterface & {
// 	age: number;
// };

// type UserType2 = UserType & {
// 	name: string;
// };

// let userInfo: UserType2 = {
// 	name: 'Prasad',
// 	age: 10
// };

// console.log(userInfo, 'userInfo');

const App: React.FC = () => {
	let [list, setList] = useState<Todo[]>([]);

	const handleAddNewRecord = (newTodo: Todo): void => {
		let records: Todo[] = [...list];
		records.push(newTodo);
		setList(records);
	};

	const handleUpdateTaskStatus = (id: number): void => {
		let records: Todo[] = [...list];
		records[id].isCompleted = !records[id].isCompleted;
		setList(records);
	};

	const handleEditTask = (id: number, isEditing: boolean): void => {
		let records: Todo[] = [...list];
		records[id].isEditing = isEditing;
		setList(records);
	};

	const handleUpdateTaskName = (id: number, name: string): void => {
		let records: Todo[] = [...list];
		records[id].isEditing = !records[id].isEditing;
		records[id].name = name;
		setList(records);
	};

	const handleDeleteTask = (id: number): void => {
		let records: Todo[] = [...list];
		records.splice(id, 1);
		setList(records);
	};

	return (
		<div className='App'>
			<div>Todo list TypeScript</div>
			<TextBox handleAddNewRecord={handleAddNewRecord} />
			<Lists
				list={list}
				handleEditTask={handleEditTask}
				handleUpdateTaskName={handleUpdateTaskName}
				handleUpdateTaskStatus={handleUpdateTaskStatus}
				handleDeleteTask={handleDeleteTask}
			/>
		</div>
	);
};

export default App;
