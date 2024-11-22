import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import RecipeStore from './redux/RecipeStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>  
  <Provider store={RecipeStore}>
    <App />
    </Provider>
  </BrowserRouter>
  </StrictMode>,
)
