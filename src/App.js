import { createRef, useState } from 'react';
import Providers from './components/Providers';
import Container from './components/Container';
import MyInput from './components/MyInput';

function App() {
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

    // 创建一个ref对象,每次渲染都是同一个对象引用
    const inpRef = createRef();

    return (
        <div className='App' style={{ width: 300 }}>
            <Providers theme={theme}>
                <Container theme={theme} setTheme={setTheme} />
            </Providers>
            <div>
                {count}
                <button onClick={() => setCount(count + 1)}>add</button>
            </div>

            <MyInput ref={inpRef} />
            <button
                onClick={() => {
                    inpRef.current.focus();
                }}
            >
                聚焦
            </button>
        </div>
    );
}

export default App;
