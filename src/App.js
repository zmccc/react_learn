import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false },
];
let nextId = 3;

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const handleAddTask = (text) => {
        if (!text) return;
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text,
                done: false,
            },
        ]);
    };

    const handleChangeTask = (task) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === task.id) {
                    return task;
                }
                return item;
            })
        );
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
    };

    return (
        <>
            <h1>day</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

export default App;
