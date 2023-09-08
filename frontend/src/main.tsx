import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SelectLanguageContextProvider from './Contexts/SelectLanguageContext.tsx';
import VocabsContextProvider from './Contexts/VocabsContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <SelectLanguageContextProvider>
    <VocabsContextProvider>
      <App />
    </VocabsContextProvider>
  </SelectLanguageContextProvider>,
  // </React.StrictMode>
);
