import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { AppContainer } from './components/App-container'


const $root = document.getElementById('root') as HTMLElement

 $root.className = 'bg-light dark:bg-dark'

ReactDOM.createRoot($root).render(
<React.StrictMode>
  
    <AppContainer />
    
  </React.StrictMode>

)

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
