import { Pages } from '@/pages'

import './App.scss'
import { AppContextProvider } from './context/app.context'

function App() {
  return (
    <AppContextProvider>
      <Pages />
    </AppContextProvider>
  )
}

export default App
