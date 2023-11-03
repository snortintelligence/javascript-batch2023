import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// Example 1.
const Example1 = () => {
  const [data, setData] = useState(0);

  const firstInputRef = useRef();
  const secondInputRef = useRef();

  const getNumberBox = () => {
    console.log('input money : ', firstInputRef.current.value);
    console.log(firstInputRef.current);
    firstInputRef.current.style.backgroundColor = '#CAB5DC';
    firstInputRef.current.style.color = '#000142';
    firstInputRef.current.style.width = '300px';
    firstInputRef.current.style.borderRadius = '8px';

  }

  const getTexBox = () => {
    console.log('input currency');
    console.log(secondInputRef.current);
  }

  return <>
    <h2>Form Data</h2>
    <input ref={firstInputRef} type="number" value={data} onChange={(e) => setData(e.target.value)} /> {' '}
    <input ref={secondInputRef} type="text" value={data} onChange={(e) => setData(e.target.value)} />{' '}
    <h3>Input Form Data : {data}</h3>{' '}
    <button onClick={getNumberBox}>Rupees</button>{' '}
    <button onClick={getTexBox}>Dollar</button>
  </>
}


const Example2 = () => {
  // You can use useRef to access and manipulate a DOM element directly. 
  const paragraphRef = useRef();

  const changeText = () => {
    // paragraphRef.current.textContent = '<h2>Welcome in React session useRef</h2>';
    paragraphRef.current.innerHTML = '<h2>Welcome in React session useRef</h2>';
    paragraphRef.current.style.color = '#000142';
  };

  return <>
    <div style={{margin: '5px'}}>
      <p ref={paragraphRef}>Original Text</p>
      <button onClick={changeText}>Change Text</button>
    </div>
  </>
}

function Example3() {
  const emailRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const validateEmail = () => {
      const email = emailRef.current.value;
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      setIsValid(regex.test(email));
  };

  return (
      <div style={{margin: '5px'}}>
          <input ref={emailRef} type="email" /> {' '}
          <button onClick={validateEmail}>Validate Email</button>
          <h5>{isValid ? 'Valid Email' : 'Invalid Email'}</h5>
      </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Example3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
