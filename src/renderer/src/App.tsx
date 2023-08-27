//import MainPage from './pages/MainPage/MainPage'
import { ReactNode } from 'react'
import MusicPage from "./pages/MusicPage/MusicPage";
import Default from './layouts/Default/Default';

function App(): ReactNode {
  return (
    <>
      <Default>
        <MusicPage />
      </Default>
    </>
  )
}

export default App
