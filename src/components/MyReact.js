import { useState } from 'react';

export default function useReducer(reducer, initialState) {
    // 实现useReducer
    // 初始化state
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        // let res = reducer(state, action);
        // setState(res);

        setState((s) => reducer(s, action));
    }

    return [state, dispatch];
}
