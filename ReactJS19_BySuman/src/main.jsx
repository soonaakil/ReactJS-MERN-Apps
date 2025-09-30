import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import AiApp from './AiApp'
// import MyApp from './NestedRoutingByOutlet/MyApp.jsx'
// import Ai_App from './AiRouterSetup/Ai_App.jsx'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <AiApp /> */}
    {/* <MyApp /> */}
    {/* <Ai_App /> */}
  </StrictMode>,
)


