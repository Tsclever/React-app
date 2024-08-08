import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';   // 引用了来自 App.js 文件中的 React 组件, 并将此命名为App
// import Hw from './Hw'  // import 引入, Hw 命名, './Hw' 实际文件地址
// import TodoList from './TodoList'
// import Avatar from './Avatar';
import Profile from './MyFirstComponent'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 挂载在页面 id 叫 root 的元素上
  <React.StrictMode>   
    {/* 显示Hw组件 */}
    <Profile />
    {/* <App /> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
