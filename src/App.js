import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import About from "./components/About";
import Base from "./components/home/Base";
import DesignMain from "./components/design/DesignMain";
import FurnitureMain from "./components/furniture/FurnitureMain";
import OrderMain from "./components/order/OrderMain";
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import ErrorPage from "./components/utils/ErrorPage";
import DesignSingleItem from "./components/design/single/DesignSingleItem";
import FurnitureSingleItem from "./components/furniture/single/FurnitureSingleItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Base />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/design",
        element: <DesignMain />,
        errorElement: <ErrorPage />,
    },,
    {
        path: "/design/:slug",
        element: <DesignSingleItem />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/furniture",
        element: <FurnitureMain />,
        errorElement: <ErrorPage />,
    },,
    {
        path: "/furniture/:slug",
        element: <FurnitureSingleItem />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/order",
        element: <OrderMain />,
        errorElement: <ErrorPage />,
    }
]);

const App = () => {
    return (
        <div className="wrapper">
            <Navbar/>
            <main>
                <RouterProvider router={router} />
            </main>
            <Footer/>
        </div>
    );
}

export default App;