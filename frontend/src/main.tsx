import { Provider } from './components/ui/provider.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyApp from './app/App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <MyApp { }/>
    </Provider>
  </StrictMode>,
)

