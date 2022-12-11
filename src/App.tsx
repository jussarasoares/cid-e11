import { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.css'
import DataRegister from './pages/MeasuresList/MeasuresList'
import MeasureRegister from './pages/MeasureRegister/MeasureRegister'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthContext } from './services/authContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/data-register',
        element: <DataRegister />,
    },
    {
        path: '/measure-register/:userId',
        element: <MeasureRegister />,
    },
    {
        path: '/measure-register/:userId/:id',
        element: <MeasureRegister />,
    },
])

function App(): ReactElement {
    return (
        <div className='App'>
            <AuthContext.Provider
                value={{
                    id: 1,
                    name: 'Jussara',
                    email: 'email@email.com',
                }}
            >
                <RouterProvider router={router} />
            </AuthContext.Provider>
        </div>
    )
}

export default App
