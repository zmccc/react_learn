import { createContext, useState } from 'react';
import Button from './components/Button';
import WelcomePanel from './components/WelcomePanel';

// 创建一个上下文
export const ThemeContext = createContext(null);
export const UserContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);

  return (
    <div className='App' style={{ width: 300 }}>
      {/* 给被包裹的组件提供上下文的值 */}
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider
          value={{
            user,
            setUser,
          }}
        >
          <WelcomePanel>
            <Button>login as xiaomo</Button>
          </WelcomePanel>
          <label>
            <input
              type='checkbox'
              checked={theme === 'dark'}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
            <span>use dark mode</span>
          </label>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
