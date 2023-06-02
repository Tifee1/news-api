import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleNews from './pages/SingleNews'
import Home from './pages/Home'
import Error from './pages/Error'
import MainLayout from './Layout/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news/:id' element={<SingleNews />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
