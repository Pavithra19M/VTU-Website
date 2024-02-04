import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider} from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SlideComponent from './components/SlideComponent';
import ResultComponent from './components/ResultComponent';
import ResultPage from './components/ResultPage';
import About from './components/About';
import AdminScreen from './components/AdminScreen';
import AdmissionFormScreen from './components/AdmissionFormScreen';
import AdmissionDetailsScreen from './components/AdmissionDetailsScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' index={true} element={<SlideComponent/>}/> 
      <Route path='/about' element={<About/>} />
      <Route path='/admin/login' element={<AdminScreen />} />
      <Route path='/student/admissionform' element={<AdmissionFormScreen />} />
      <Route path='/admin/admissiondetails' element={<AdmissionDetailsScreen/>} /> 
      <Route path='/result' element={<ResultComponent/>} />
      <Route path='/resultpage/:id' element = {<ResultPage/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
