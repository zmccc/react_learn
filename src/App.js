import { useState } from 'react';
import Providers from './components/Providers';
import Container from './components/Container';

function App() {
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

    return (
        <div className='App' style={{ width: 300 }}>
            <Providers theme={theme}>
                <Container theme={theme} setTheme={setTheme} />
            </Providers>
            <div>
                {count}
                <button onClick={() => setCount(count + 1)}>add</button>
            </div>
        </div>
    );
}

export default App;
