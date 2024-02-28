import { useDebugValue, useState } from 'react';

export default function useInput(initialState) {
    const [value, setValue] = useState(initialState);
    // 可以让你在react开发工具中为自定义hook添加标签
    useDebugValue(value + 'xixi');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return {
        value,
        onChange,
    };
}
