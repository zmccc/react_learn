import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export default function MyModal() {
    return createPortal(<Wrap>模态框</Wrap>, document.querySelector('#modal'));
}

const Wrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #000;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
`;
