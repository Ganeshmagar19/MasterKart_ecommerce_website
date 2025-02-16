import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProductProvider } from './component/ProductContext.jsx'; 
import { Cartprovider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider> 
      <Cartprovider>

      <App />
      </Cartprovider>
      
    </ProductProvider>
  </StrictMode>
);
