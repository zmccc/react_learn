import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TasksProvider from './components/TasksProvider';

function App() {
    return (
        <TasksProvider>
            <h1>day</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}

export default App;
