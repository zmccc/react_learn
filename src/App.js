import { useState } from 'react';
import PlayGround from './components/PlayGround';

function App() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setShow(!show);
                }}
            >
                {show ? '卸载' : '挂载'}
            </button>
            {show && <PlayGround />}
        </div>
    );
}

export default App;
