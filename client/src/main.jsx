import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import GenerateQuizForm from './pages/GenerateQuizForm.jsx';
import Homepage from './pages/HomePage.jsx';
import Register from './pages/AuthPages/Register.jsx'
import Login from './pages/AuthPages/Login.jsx'
import CreateClassroom from './pages/ClassroomPages/CreateClassroom.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import JoinClassroom from './pages/ClassroomPages/JoinClassroom.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/generate-quiz',
        element: <GenerateQuizForm />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/create-classroom',
        element: <CreateClassroom />
      },
      {
        path: '/join-classroom',
        element: <JoinClassroom />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
