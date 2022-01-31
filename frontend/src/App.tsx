import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/Main/MainLayout'
import { ChatPage } from './pages/chat/ChatPage'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<ChatPage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
