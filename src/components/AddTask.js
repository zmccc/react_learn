import React, { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { TasksDispatchContext } from '../TasksContext';

export default function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContext);

    return (
        <Wrap>
            <input
                placeholder='Add task'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({
                        type: 'add_task',
                        text,
                    });
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
