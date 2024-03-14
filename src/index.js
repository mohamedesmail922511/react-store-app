import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <PersistGate loading={"loading..."} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
 
  </React.StrictMode>
);


reportWebVitals();
