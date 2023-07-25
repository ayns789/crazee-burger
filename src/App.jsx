// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage';
import ErrorPage from './components/pages/error/ErrorPage';
import OrderPage from './components/pages/order/OrderPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}></Route>
      <Route path='/*' element={<ErrorPage />}></Route>
      <Route path='/order' element={<OrderPage />}></Route>
    </Routes>
  );
}

export default App;
