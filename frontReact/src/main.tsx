import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme, ThemePanel } from '@radix-ui/themes'
import './index.css'
import "@radix-ui/themes/styles.css";
//import App from '../src/app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <ThemePanel />
    </Theme>

  </StrictMode>,
)
