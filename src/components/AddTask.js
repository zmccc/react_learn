import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function AddTask(props) {
    const [text, setText] = useState('');

    return (
        <Wrap>
            <input
                placeholder='Add task'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    props.onAddTask(text);
                    setText('');
                }}
            >
                add
            </button>
        </Wrap>
    );
}

const Wrap = styled.div`
    input,
    button {
        margin: 5px;
    }
`;
