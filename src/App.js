import { useState } from 'react';
import MyModal from './components/MyModal';

function App() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? '显示' : '隐藏'}
            </button>
            {show && <MyModal />}
        </div>
    );
}

export default App;
