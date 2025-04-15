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
import BlogDetails from './Components/Users/BlogDetails/BlogDetails.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetail from './Components/PostDetails/PostDetail.jsx'



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
      path:'/users2' , 
      element: <Suspense fallback ={ <span>Loading...</span>}>

        <Users2 usersPromise={usersPromise}></Users2>
      </Suspense>,     
    },

    
      // loader:({params}) => {
      //   console.log('params inside the loader : ', params.userId);
      //   fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      // },

    {
      path:'users/:userId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      Component:BlogDetails
    },

    {
      path:'/posts',
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts') ,
      Component: Posts
    },

    {
      path:'posts/:postId',
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      Component: PostDetail
    },

    {
      path: '*',
      element: <h3>Not Found : 404 Status</h3>
    }

  ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
