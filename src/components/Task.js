import React, { useState } from 'react';
import styled from 'styled-components';

export default function Task(props) {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <Wrap>
            <label>
                <input
                    type='checkbox'
                    checked={props.task.done}
                    onChange={(e) => {
                        props.onChangeTask({
                            ...props.task,
                            done: e.target.checked,
                        });
                    }}
                />
                {isEdit ? (
                    <>
                        <input
                            value={props.task.text}
                            onChange={(e) => {
                                props.onChangeTask({
                                    ...props.task,
                                    text: e.target.value,
                                });
                            }}
                        />
                        <button onClick={() => setIsEdit(false)}>save</button>
                    </>
                ) : (
                    <>
                        <span>{props.task.text}</span>
                        <button onClick={() => setIsEdit(true)}>edit</button>
                    </>
                )}
            </label>
            <button
                onClick={() => {
                    props.onDeleteTask(props.task.id);
                }}
            >
                delete
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
