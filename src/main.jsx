import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './UserContext'; 

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
       <App />
    </UserProvider>
  </StrictMode>,
)
