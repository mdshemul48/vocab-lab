import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SelectLanguageContextProvider from './Contexts/SelectLanguageContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SelectLanguageContextProvider>
      <App />
    </SelectLanguageContextProvider>
  </React.StrictMode>,
);
