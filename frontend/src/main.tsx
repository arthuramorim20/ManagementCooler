import { Provider } from './components/ui/provider.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Demo from './App.tsx'
import { Input } from "@chakra-ui/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Demo />
      <Input />
    </Provider>
  </StrictMode>,
)

