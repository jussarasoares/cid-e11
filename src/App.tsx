import { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.css'
import DataRegister from './pages/MeasuresList/MeasuresList'
import Main from './pages/Main/Main'
import MeasureRegister from './pages/MeasureRegister/MeasureRegister'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/main',
        element: <Main />,
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
            <RouterProvider router={router} />
        </div>
    )
}

export default App
