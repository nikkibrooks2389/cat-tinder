import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import { BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <AppRoutes />
    
    </BrowserRouter>
  )
}

export default App
