// import React, { lazy } from "react";
import Navbar from "./Navbar";
import { createBrowserRouter } from 'react-router-dom'
// import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Example from "./Example";
import React, { Suspense } from "react";
import Funcationrutes from "./Funcationrutes/Funcationrutes";

const Classrutes = React.lazy(() => import("./Classrutes/Classrutes"));
const Functionrutes = React.lazy(() => import("./Funcationrutes/Funcationrutes"));

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Navbar />
            <Home />
        </>,
        children: [
            {
                path: "Classrutes/*",
                element: <Suspense fallback={<h2>Loading....</h2>}><Classrutes /></Suspense>
            },
            {
                path: "Funcationrutes/*",
                element: <Suspense fallback={<h2>Loading....</h2>}><Funcationrutes /></Suspense>
            }
        ]
    },
    {
        path: "/about",
        element: <>
            <Navbar />

            <About />
        </>
    },
    {
        path: "/contact",
        element: <>
            <Navbar />
            <Contact />
        </>
    },
    {
        path: "/service",
        element: <>
            <Navbar />
            <Service />
        </>
    },
    {
        path: "/example",
        element: <>
            <Navbar />
            <Example />
        </>,
        children: [
            {
                path: "Classrutes/*",
                element: <Suspense fallback={<h2>Loading....</h2>}><Classrutes /></Suspense>
            },
            {
                path: "Funcationrutes/*",
                element: <Suspense fallback={<h2>Loading....</h2>}><Functionrutes /></Suspense>
            }
        ]
    }
]);
export default Mainrouter