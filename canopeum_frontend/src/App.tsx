import './App.scss';
import 'bootstrap/js/index.umd.js';

import { BrowserRouter } from 'react-router-dom';

import AuthenticationContextProvider from './components/context/AuthenticationContext';
import MainLayout from './components/MainLayout';

const App = () => (
  <AuthenticationContextProvider>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </AuthenticationContextProvider>
);

export default App;
