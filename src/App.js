import { createRef, useRef, useState } from 'react';
import MyInput from './components/MyInput';

function App() {
    const [count, setCount] = useState(0);

    // 创建一个ref对象,每次渲染都是同一个对象引用
    const inpRef = createRef();

    // 创建一个ref对象
    const countRef = useRef(0);

    const timer = useRef(null);

    const handleStop = () => {
        if (!timer.current) return;
        clearInterval(timer.current);
        timer.current = null;
    };

    const handleStart = () => {
        handleStop();
        // 这里count一直为之前的值,是因为timer.current不会因为重新渲染而发生变化,还是过去的引用,所以取的count也是过去的值
        timer.current = setInterval(() => {
            setCount(count + 1);
        }, 1000);
    };

    return (
        <div className='App' style={{ width: 300 }}>
            <MyInput ref={inpRef} />
            <button
                onClick={() => {
                    inpRef.current.focus();
                }}
            >
                聚焦
            </button>

            <div>
                <span>{countRef.current}</span>
                <button
                    onClick={() => {
                        // 修改ref的值不会触发react重新渲染
                        countRef.current = countRef.current + 1;
                        console.log(countRef.current);
                    }}
                >
                    +1
                </button>
            </div>

            <div>
                {count}
                <button onClick={handleStart}>开始</button>
                <button onClick={handleStop}>暂停</button>
            </div>
        </div>
    );
}

export default App;
