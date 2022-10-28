import { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import DataRegister from './pages/DataRegister/DataRegister'
import Main from './pages/Main/Main'
import MeasureRegister from './pages/MeasureRegister/MeasureForm'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/data-register',
        element: <DataRegister />,
    },
    {
        path: '/measure-register',
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
