import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Loading';



ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback={(<Loading/>)}>
        <App />
      </Suspense>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
