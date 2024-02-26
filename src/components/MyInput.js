import React, { forwardRef } from 'react';

function MyInput(props, ref) {
    return (
        <label>
            <input ref={ref} />
        </label>
    );
}

// forwardRef接受一个函数,(props, ref) => { return JSX }
// 返回一个可以接受ref的渲染函数
export default forwardRef(MyInput);
