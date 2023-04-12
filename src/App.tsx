import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import MainPage from './pages/mainPage'
import tripApi from './store/slice/sliceThunk'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store/store'
import NotFound from './pages/notFoundPage'
import NavigationPage from './pages/navigationPage'
import SubInfoPage from './pages/subInfoPage'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(tripApi())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationPage />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/:id' element={<SubInfoPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
