import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Service from '../pages/Services'
import CaseStudy from '../pages/CaseStudy'
import Contact from '../pages/Contact'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'portfolio', element: <Portfolio /> },
            { path: 'services', element: <Service /> },
            { path: 'case-study', element: <CaseStudy /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
])