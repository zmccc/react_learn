import { useState } from "react";

function getCount() {
  console.log('init');
  return 0;
}

function App() {
  // react只在初次渲染时保存初始状态,后续渲染时会将其忽略
  // 注意:每次渲染还是会调用此函数,只不过后续渲染会忽略函数的返回结果
  // 可以通过传递函数本身来解决,react仅会在初次调用函数
  const [count, setCount] = useState(getCount);

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

export default App;
