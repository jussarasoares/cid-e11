import { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'antd/dist/antd.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthContext } from './services/authContext'
import NewMeasure from './pages/NewMeasure/NewMeasure'
import MeasureHistory from './pages/MeasureHistory/MeasureHistory'

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
        path: '/measure-history',
        element: <MeasureHistory />,
    },
    {
        path: '/new-measure/:userId',
        element: <NewMeasure />,
    },
    {
        path: '/new-measure/:userId/:id',
        element: <NewMeasure />,
    },
])

function App(): ReactElement {
    return (
        <AuthContext.Provider
            value={{
                id: 1,
                name: 'Jussara',
                email: 'email@email.com',
            }}
            // value={null}
        >
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}

export default App
