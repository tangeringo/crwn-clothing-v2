import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './redux/user/user.actions';

import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Authentication from './routes/authentication/authentication.component';

import { GlobalStyle } from './global.styles';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
}, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="auth" element={<Authentication />} />      
        </Route>
      </Routes>
    </div>
  );
}

export default App;