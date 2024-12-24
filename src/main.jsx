import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Newsapp from './Newsapp'
import NewsAppo from './NewsAppo'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <NewsAppo/>
  </StrictMode>,
)
