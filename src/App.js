import { useReducer } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksContext, TasksDispatchContext } from './TasksContext';

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false },
];
let nextId = 3;

function taskReducer(tasks, action) {
    switch (action.type) {
        case 'add_task': {
            return [
                ...tasks,
                {
                    id: nextId++,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'change_task': {
            return tasks.map((item) => {
                if (item.id === action.id) {
                    let { type, ...other } = action;
                    return other;
                }
                return item;
            });
        }
        case 'delete_task': {
            return tasks.filter((item) => item.id !== action.id);
        }
        default: {
            throw Error(`未知type: ${action.type}`);
        }
    }
}

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                <h1>day</h1>
                <AddTask />
                <TaskList />
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export default App;
