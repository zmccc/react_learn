import { useState } from 'react';
import Button from './components/Button';
import WelcomePanel from './components/WelcomePanel';
import Providers from './components/Providers';

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <div className='App' style={{ width: 300 }}>
            <Providers theme={theme}>
                <WelcomePanel>
                    <Button>login as xiaomo</Button>
                </WelcomePanel>
                <label>
                    <input
                        type='checkbox'
                        checked={theme === 'dark'}
                        onChange={(e) =>
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }
                    />
                    <span>use dark mode</span>
                </label>
            </Providers>
        </div>
    );
}

export default App;
