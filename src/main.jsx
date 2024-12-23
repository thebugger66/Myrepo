import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Newsapp from './Newsapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Newsapp/>
  </StrictMode>,
)
