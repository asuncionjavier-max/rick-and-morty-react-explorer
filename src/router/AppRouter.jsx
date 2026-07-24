import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import CharacterDetailPage from '../pages/CharacterDetailPage/CharacterDetailPage'
import Layout from '../component/Layout/Layout'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
        {index: true, element: <HomePage />},
        {path: "/character/:characterId",element: <CharacterDetailPage />},
        ],
    },
])

 function AppRouter(){
        return <RouterProvider router={router}/>
}

export default AppRouter