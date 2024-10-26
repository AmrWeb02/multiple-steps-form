import { useState } from 'react'
import Form from './Form'
import './App.css'
import {Route, NavLink, BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route index element={<Form/>}/>
      </Route>


    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
