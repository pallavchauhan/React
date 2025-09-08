
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <>
      <h1>custom app</h1>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />
  </>
)
