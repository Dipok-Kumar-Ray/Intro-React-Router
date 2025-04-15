import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Components/Users/Users.jsx'
import Users2 from './Components/Users2/Users2.jsx'



const  usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())


const router = createBrowserRouter([
{
  path:'/',
  Component:Root,
  children: [
    {index:true, Component:Home},
    {path:'mobiles', Component:Mobiles},
    {path:'laptops', Component:Laptops},
    {
      path:'/users', 
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      Component:Users
    }, 
    {
      path:Users2 , 
      element: <Suspense fallback ={ <span>Loading...</span>}>
const  userPromise = fetch('https://jsonplaceholder.typicode.com/users')
        <Users2 usersPromise={usersPromise}></Users2>
      </Suspense>,
      
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
