import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';   // 引用了来自 App.js 文件中的 React 组件, 并将此命名为App
import Hw from './Hw'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 显示Hw组件 */}
    <Hw />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
