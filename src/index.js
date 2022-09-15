import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// const fetchWeather = async () => {
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ec560cbbcf47509da1763134ff51bf86`);
//   if(componentMounted){
//       setData(await response.json());
//       console.log(data);
//   }
//   return () => {
//       componentMounted = false;
//   }
// }
// fetchWeather();
// }, [])