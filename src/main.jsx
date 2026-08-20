import 'bootstrap/dist/css/bootstrap.min.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CreateStore } from './Components/Context.jsx';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <CreateStore>
    <App />
    </CreateStore>
  // </StrictMode>,
)
