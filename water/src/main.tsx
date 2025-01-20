import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WrappedApp from './component/WrappedApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WrappedApp></WrappedApp>
  </StrictMode>,
)
