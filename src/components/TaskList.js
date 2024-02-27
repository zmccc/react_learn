import React from 'react';
import Task from './Task';
import styled from 'styled-components';

export default function TaskList(props) {
    return (
        <Wrap>
            <ol>
                {props.tasks.map((t) => (
                    <li key={t.id}>
                        <Task
                            task={t}
                            onChangeTask={props.onChangeTask}
                            onDeleteTask={props.onDeleteTask}
                        />
                    </li>
                ))}
            </ol>
        </Wrap>
    );
}

const Wrap = styled.div`
    ol {
        list-style: none;
        padding: 0;
    }
`;
