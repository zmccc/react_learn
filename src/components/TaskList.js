import React, { useContext } from 'react';
import Task from './Task';
import styled from 'styled-components';
import { TasksContext } from '../TasksContext';

export default function TaskList() {
    const tasks = useContext(TasksContext);

    return (
        <Wrap>
            <ol>
                {tasks.map((t) => (
                    <li key={t.id}>
                        <Task task={t} />
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
