import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import ContextProvider from './components/Context/Context'

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Sidebar} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
