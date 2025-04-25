import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from "./pages/dashboard/sidebar/sidebar.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
