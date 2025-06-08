import 'modern-normalize'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import { Provider } from 'react-redux'
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
);
