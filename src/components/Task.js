import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TasksDispatchContext } from '../TasksContext';

export default function Task(props) {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useContext(TasksDispatchContext);

    return (
        <Wrap>
            <label>
                <input
                    type='checkbox'
                    checked={props.task.done}
                    onChange={(e) => {
                        dispatch({
                            type: 'change_task',
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
                                dispatch({
                                    type: 'change_task',
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
                    dispatch({
                        type: 'delete_task',
                        id: props.task.id,
                    });
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
