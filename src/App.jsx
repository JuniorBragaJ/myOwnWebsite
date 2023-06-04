import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from './screen/home/Home'
import Projects from './screen/projects/Projects'
import AboutMe from "./screen/aboutMe/AboutMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "projects",
        element: <Projects />
    }, 
    {
        path: "aboutme",
        element: <AboutMe />
    }
])

const App = () => {

    return (
        <div>
            <Header />
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
