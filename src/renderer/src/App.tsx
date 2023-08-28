import { ReactNode } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Default } from './layouts'
import { MusicPage, RadioPage } from './pages'

function App(): ReactNode {
  return (
    <div>
      <HashRouter>
        <Default>
          <Routes>
            <Route path="/" element={<MusicPage />} />
            <Route path="/radio" element={<RadioPage />} />
          </Routes>
        </Default>
      </HashRouter>
    </div>
  )
}

export default App
