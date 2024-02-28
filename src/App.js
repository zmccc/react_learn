import useInput from './hooks/useInput';

function App() {
    const firstObj = useInput('hello');
    const lastObj = useInput('world');

    const fullName = firstObj.value + ' ' + lastObj.value;

    // useEffect会在组件渲染到屏幕上时调用
    // 由于firstName改变触发重新渲染,等firstName改完在运行useEffect内到代码,导致再次触发一次页面渲染
    // 不建议通过useEffect监听一些state来更新另外的state
    console.log('改变' + fullName);
    // useEffect(() => {
    //     setFullName(firstName + ' ' + lastName);
    // }, [firstName, lastName]);

    return (
        <div>
            <div>
                <span>first:</span>
                <input {...firstObj} />
            </div>
            <div>
                <span>last:</span>
                <input {...lastObj} />
            </div>
            <span>{fullName}</span>
        </div>
    );
}

export default App;
