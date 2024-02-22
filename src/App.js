import { createContext, useState } from 'react';
import Button from './components/Button';
import WelcomePanel from './components/WelcomePanel';

// 创建一个上下文
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className='App' style={{ width: 300 }}>
      {/* 给被包裹的组件提供上下文的值 */}
      <ThemeContext.Provider value={theme}>
        <WelcomePanel>
          <Button>click</Button>
        </WelcomePanel>
        <label>
          <input
            type='checkbox'
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
          <span>use dark mode</span>
        </label>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
