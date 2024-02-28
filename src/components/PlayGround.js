import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function PlayGround() {
    const [text, setText] = useState('');

    useEffect(() => {
        function handleTimeout() {
            console.log('延迟触发', text);
        }

        console.log('安排' + text);
        const timer = setTimeout(handleTimeout, 2000);
        // 清理函数,消除副作用的影响
        return () => {
            console.log('取消' + text);
            clearTimeout(timer);
        };
    }, [text]);

    return (
        <Wrap>
            <span>日志内容:</span>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <div>{text}</div>
        </Wrap>
    );
}

const Wrap = styled.div``;
